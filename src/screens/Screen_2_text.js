import React, {useEffect, useState, useTransition} from "react";
import texts from "../data/text.json"

 const Screen2text = (props) =>  {

     const [dateState, setDateState] = useState(new Date());
     const [story, setStory] = useState(0);
     const [language, setLanguage] = useState("NL");
     const [text, setText] = useState(texts[0][language]["text"]);
     const [title, setTitle] = useState(texts[0][language]["title"]);
     //console.log(language)


     setInterval(function(){
         checkTime();
         //setText(texts[story][language]["text"]);
         //setTitle(texts[story][language]["title"])
     }, 1000)


     function checkTime() {
         let minute = new Date().getMinutes();
         let second = new Date().getSeconds();
         if (minute % 2 == 0 && second == 0) {
             if (story < 4){
                 setStory(Number(story) + 1)
                 fetchData(story, language)
             } else {
                 console.log(story)
                 setStory(0);
                 fetchData(story, language)
             }
         } else {

         }
     }

     function fetchData(storyNumber, lang) {
         for (let i = 0; i < texts.length; i++) {
             if (texts[i].story == storyNumber) {
                 //console.log(texts[i][lang])
                 setText(texts[i][lang]["text"]);
                 setTitle(texts[i][lang]["title"])
             }
         }
     }

     function resetText(lang) {
         setLanguage(lang)
     }


     return(
         <div className={"textBlock"}>
             <div>
                 <h1 style={{textAlign:"center"}}>{texts[story]["NL"]["title"]}</h1>
                 <div className={"textContainer"}>
                     <p>{texts[story]["NL"]["text"]}</p>
                 </div>
             </div>

             <div>
                 <h1 style={{textAlign:"center"}}>{texts[story]["UK"]["title"]}</h1>
                 <div className={"textContainer"}>
                     <p>{texts[story]["UK"]["text"]}</p>
                 </div>
             </div>

             <div>
                 <h1 style={{textAlign:"center"}}>{texts[story]["EN"]["title"]}</h1>
                 <div className={"textContainer"}>
                     <p>{texts[story]["EN"]["text"]}</p>
                 </div>
             </div>
         </div>
         /*<div className={"textViewer"}>
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
         </div>*/
     )
 }

 export default Screen2text;