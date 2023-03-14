import React, {useEffect, useState, useTransition} from "react";
import texts from "../data/text.json"

 const Screen2text = (props) =>  {

     setInterval(function(){
         checkTime();
     }, 1000)


     function checkTime() {
         let minute = new Date().getMinutes();
         let second = new Date().getSeconds();
         if (minute % 2 == 0 && second == 0) {
             if (story < 4){
                 console.log(story)
                 setStory(Number(story) + 1)
             } else {
                 console.log(story)
                 setStory(0);
             }
         } else {

         }
     }

     const [dateState, setDateState] = useState(new Date());
     const [story, setStory] = useState(0);
     const [language, setLanguage] = useState("NL");
     const [text, setText] = useState(texts[1]["NL"]["text"]);
     const [title, setTitle] = useState(texts[1]["NL"]["title"]);

     function fetchData(storyNumber, lang) {
         for (let i = 0; i < texts.length; i++) {
             if (texts[i].story == storyNumber) {
                 //console.log(texts[i][lang])
                 setText(texts[i][lang]["text"]);
                 setTitle(texts[i][lang]["title"])
             }
         }
     }

     function resetText(_lang) {
         setLanguage(_lang)
         fetchData(story, language)
     }

     return(
         <div className={"textViewer"}>
             <div></div>
             <h1 style={{textAlign:"center"}}>{title}</h1>
             <div className={"textContainer"}>
                <p>{text}</p>
             </div>
             <div className={"grid-even-3"}>
                 <div>
                     <p className={"button"} onClick={()=>resetText("NL")}>NL</p>
                 </div>
                 <div>
                     <p className={"button"} onClick={()=>resetText("EN")}>EN</p>
                 </div>
                 <div>
                     <p className={"button"} onClick={()=>resetText("UK")}>UK</p>
                 </div>
             </div>
             <div></div>
         </div>
     )
 }

 export default Screen2text;