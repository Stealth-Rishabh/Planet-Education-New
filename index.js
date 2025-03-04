const { google } = require("googleapis");
const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const serviceAccount = require("./firebase-service-account.json");

// Initialize Firebase Admin
initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

// Google Sheets API setup
const sheets = google.sheets("v4");
const auth = new google.auth.GoogleAuth({
  keyFile: "./firebase-service-account.json",
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

// Main function to update Google Sheets
async function updateGoogleSheet() {
  const authClient = await auth.getClient();
  const spreadsheetId = "1K_mNy33bH_2qiapoAKRzMee9_vuEf2oRQyvDWAjohSc";

  try {
    // Get existing data from Google Sheets
    const getSheetData = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Sheet1!A2:Z", // Adjust this range if your email column is not in D
      auth: authClient,
    });

    const existingRows = getSheetData.data.values || [];
    const existingEmailsMap = {};

    // Store existing emails in a hashmap for fast lookup
    existingRows.forEach((row) => {
      const email = (row[1] || "").trim().toLowerCase(); // Email in column B (index 1)
      if (email) {
        existingEmailsMap[email] = true;
      }
    });

    // Get data from Firestore
    const snapshot = await db.collection("leads").get();
    const rows = [];

    snapshot.forEach((doc) => {
      const data = doc.data();
      const email = (data.email || "").trim().toLowerCase();

      if (email && !existingEmailsMap[email]) {
        // Only push rows that do not exist in the Google Sheets
        rows.push([
          data.fullname || "",
          data.email || "",
          data.contact || "",
          data.city || "",
          data.education || "",
          data.country || "",
          data.level || "",
          data.exam || "",
          data.submissionDate || "", // Include the submission date
        ]);

        // Add the email to the hashmap to prevent future duplicates in this run
        existingEmailsMap[email] = true;
      }
    });

    // Append new data to Google Sheets
    if (rows.length > 0) {
      const request = {
        spreadsheetId,
        range: `Sheet1!A${existingRows.length + 2}`,
        valueInputOption: "RAW",
        resource: {
          values: rows,
        },
        auth: authClient,
      };

      const response = await sheets.spreadsheets.values.append(request);
      console.log(`${response.data.updates.updatedCells} cells appended.`);
    } else {
      console.log("No new data to append.");
    }
  } catch (err) {
    console.error("Error appending data: ", err);
  }
}

// Run the update function every minute
setInterval(updateGoogleSheet, 60 * 1000);
