import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { render } from "react-dom";
import{BrowserRouter, Routes, Route} from "react-router-dom";

import Screen2text from "./screens/Screen_2_text";
import Screen1images from "./screens/Screen_1_images";


const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/screen1" element={<Screen1images />}/>
            <Route path="/screen2" element={<Screen2text />}/>
        </Routes>
    </BrowserRouter>,
    rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
