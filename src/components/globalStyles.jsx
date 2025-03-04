import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
margin:0;
padding:0;
box-sizing:border-box;
font-family: "Poppins", sans-serif;
}
html,body{
overflow-x:hidden;
width:100%;

}
body{
    padding-right:0 !important;
}
a{
text-decoration:none;
}
li{
list-style:none;
}
@media (max-width: 450px) {
    html,body{
overflow-x:hidden;
width:100%
}
}
`;
