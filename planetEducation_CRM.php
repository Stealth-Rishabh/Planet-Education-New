<?php
// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/php-errors.log');

// Enable CORS - keeping your specific origin
header("Access-Control-Allow-Origin: https://stealthlearn.in");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

// Handle preflight request (CORS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

try {
    // Log raw POST data for debugging
    error_log("Raw POST data: " . file_get_contents('php://input'));
    error_log("POST array: " . print_r($_POST, true));

    // Get form data with strict checking from LandingBanner.jsx
    $name = $_POST['contact-name'] ?? '';
    $email = $_POST['contact-email'] ?? '';
    $phone = $_POST['contact-phone'] ?? '';
    $city = $_POST['contact-company'] ?? ''; // This contains the city (Vadodara)
    $studyDestination = $_POST['contact-subject'] ?? ''; // This contains preferred study destination
    $educationInfo = $_POST['contact-message'] ?? ''; // This contains education, study level, and exam info
    $referrer = $_POST['referrer_name'] ?? '';
    $keyword = $_POST['keyword'] ?? '';
    $source = $_POST['source'] ?? 'Landing Page';
    $campaign_url = $_POST['campaign_url'] ?? '';
    $campaign_name = $_POST['campaign_name'] ?? '';
    $network = $_POST['network'] ?? '';
    
    // Use requested values for orderid and sitename
    $orderid = '1050';
    $sitename = 'globalscholarship';

    // Validate required fields
    if (empty($name) || empty($email) || empty($phone)) {
        throw new Exception('Required fields are missing.');
    }

    // Format the query content to include all the form information
    $query = "<b>City: </b>" . $city . 
             "<br><b>Study Destination: </b>" . $studyDestination . 
             "<br><b>Education Info: </b>" . $educationInfo;

    // Prepare CRM fields
    $uniFields = array(
        'name' => $name,
        'phone' => $phone,
        'email' => $email,
        'query' => $query,
        'http_referer' => $referrer,
        'search_keyword' => $keyword,
        'campaign_url' => $campaign_url,
        'campaign_name' => $campaign_name,
        'network' => $network,
        'source' => $source,
        'ORDERID' => $orderid,
        'SITENAME' => $sitename
    );

    error_log("Prepared CRM fields: " . print_r($uniFields, true));

    // Build query string
    $uni_fields_string = http_build_query($uniFields);
    error_log("Final query string: " . $uni_fields_string);

    // CRM URL
    $uniUrl = 'https://crm.stealthdigital.in/lp/index';

    // Make the CRM request
    $post = curl_init();
    curl_setopt($post, CURLOPT_URL, $uniUrl);
    curl_setopt($post, CURLOPT_POST, true);
    curl_setopt($post, CURLOPT_POSTFIELDS, $uni_fields_string);
    curl_setopt($post, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($post, CURLOPT_FOLLOWLOCATION, true);
    
    $content = curl_exec($post);
    $httpCode = curl_getinfo($post, CURLINFO_HTTP_CODE);
    
    error_log("CRM Response Code: " . $httpCode);
    error_log("CRM Response Content: " . $content);

    // Check for cURL errors
    if (curl_errno($post)) {
        error_log("cURL error: " . curl_error($post));
        throw new Exception('Failed to send data to CRM.');
    }

    curl_close($post);

    // Check if CRM response is a valid JSON
    $response_data = json_decode($content, true);
    if ($response_data === null && json_last_error() !== JSON_ERROR_NONE) {
        throw new Exception('Unexpected response format from CRM.');
    }

    // Response handling
    if ($response_data && isset($response_data['status']) && $response_data['status'] === 'success') {
        echo json_encode([
            'status' => 'success', 
            'message' => 'Form submitted successfully.'
        ]);
    } else {
        throw new Exception('Failed to submit form to CRM.');
    }

} catch (Exception $e) {
    error_log("Error in form submission: " . $e->getMessage());
    http_response_code(400);
    echo json_encode([
        'status' => 'error',
        'message' => $e->getMessage()
    ]);
}
?>
