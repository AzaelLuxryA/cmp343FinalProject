import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Inter', sans-serif;
    }
a:hover {
    color: #2d53d2;
    }

       .card {
    background-color: white;
    border-radius: 8px;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(184, 19, 19, 0.97);
 }
    body{
        color: #6c7983;
        font-size: 1.2rem;
        &::-webkit-scrollbar{
            width: 7px;
        }
        &::-webkit-scrollbar-thumb{
            background-color: #27AE60;
            border-radius: 10px;
        }
        &::-webkit-scrollbar-track{
            background-color: #EDEDED;
        }
    }
`;


export default GlobalStyle;