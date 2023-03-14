import React, {useEffect, useState, useTransition} from "react";
import texts from "../data/text.json"
import TextBlock from "../utils/TextBlock";

 const Screen2text = (props) =>  {

     const [story, setStory] = useState(0);
     const [language, setLanguage] = useState("NL");
     const [text, setText] = useState(texts[0][language]["text"]);
     const [title, setTitle] = useState(texts[0][language]["title"]);
     //console.log(language)


     setInterval(function(){
         checkTime();
     }, 1000)


     function checkTime() {
         let minute = new Date().getMinutes();
         let second = new Date().getSeconds();
         if (second == 20){
             if (story < 5){
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
         for (let i = 0; i < 5; i++) {
             if (texts[i].story == storyNumber) {
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
             <TextBlock lang={language} story={story}/>
             <div className={"grid-even-3"}>
                 <div>
                     <div className={"button"} onClick={()=>resetText("NL")}>
                         <p className={"text"}>NL</p>
                     </div>
                 </div>
                 <div>
                     <div className={"button"} onClick={()=>resetText("EN")}>
                         <p className={"text"}>EN</p>
                     </div>
                 </div>
                 <div>
                     <div className={"button"} onClick={()=>resetText("UK")}>
                         <p className={"text"}>UA</p>
                     </div>
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