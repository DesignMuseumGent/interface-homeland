import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { render } from "react-dom";
import{BrowserRouter, Routes, Route} from "react-router-dom";

import Screen2text from "./screens/Screen_2_text";
import Screen1images from "./screens/Screen_1_images";
import Screen_3_images from "./screens/Screen_3_images";
import Screen4text from "./screens/Screen_4_text";


const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/screen1" element={<Screen1images />}/>
            <Route path="/screen2" element={<Screen2text />}/>
            <Route path="/screen3" element={<Screen3images />}/>
            <Route path="/screen4" element={<Screen4text />}/>
        </Routes>
    </BrowserRouter>,
    rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
