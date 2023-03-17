import React, {useEffect, useState, useTransition} from "react";
import texts from "../data/MilkedCeramics.json"
import TextBlock from "../utils/TextBlock";
import {useInterval} from "../utils/utils";


 const Screen2text = (props) =>  {

     const [story, setStory] = useState(0);
     const [language, setLanguage] = useState("NL");
     const [text, setText] = useState(texts[0][language]["text"]);
     const [title, setTitle] = useState(texts[0][language]["title"]);
     const [small, setSmall] = useState(false);
     const [count, setCount] = useState(0);

     //console.log(language)
     console.log(text);

     let max = 4

     useInterval(function(){
         let sec = new Date().getSeconds()
         if (sec === 20) {
             if (count < max) {
                 setCount(count+1)
                 setStory(count)
                 console.log(count);
             } else {
                 setCount(0)
                 setStory(count)
                 console.log(count);
             }
         }
     }, 1000)


     function fetchData(storyNumber, lang) {
         for (let i = 0; i < 5; i++) {
             if (texts[i].story == storyNumber) {
                 setText(texts[i][lang]["text"]);
                 setTitle(texts[i][lang]["title"])
             }
         }
     }

     function resetText(lang, font) {
         setLanguage(lang)
         if (font) {
             setSmall(true)
         } else if (!font) {
             setSmall(false)
         }
     }


     return(
         <div className={"textBlock"}>
             <TextBlock lang={language} story={story} texts={texts} font={small}/>
             <div className={"grid-even-3 Hline"}>
                 <div>
                     <div className={"button"} onClick={()=>resetText("NL", false)}>
                         <h1 className={"text"}>NL</h1>
                     </div>
                 </div>
                 <div>
                     <div className={"button"} onClick={()=>resetText("EN", false)}>
                         <h1 className={"text"}>EN</h1>
                     </div>
                 </div>
                 <div>
                     <div className={"button"} onClick={()=>resetText("UK", true)}>
                         <h1 className={"text"}>UA</h1>
                     </div>
                 </div>
             </div>
         </div>

     )
 }

 export default Screen2text;