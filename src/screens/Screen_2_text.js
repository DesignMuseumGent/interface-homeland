import React, {useEffect, useState, useTransition} from "react";
import texts from "../data/MilkedCeramics.json"
import TextBlock from "../utils/TextBlock";

 const Screen2text = (props) =>  {

     const [counter, setCounter] = useState(4)
     const [story, setStory] = useState(4);
     const [language, setLanguage] = useState("NL");
     const [text, setText] = useState(texts[3][language]["text"]);
     const [title, setTitle] = useState(texts[3][language]["title"]);
     const [small, setSmall] = useState(false);
     //console.log(language)
     console.log(text);

     setInterval(function(){
         checkTime();
     }, 1000)


     function checkTime() {
         let minute = new Date().getMinutes();
         let second = new Date().getSeconds();
         if (second == 20) {
             setCounter(counter + 1)
             console.log("counter: " + counter)

             if (counter < 4){
                 setStory(Number(story) + 1);
                 fetchData(story, language)
                 console.log("story: " + story)


             } else if (counter === 4) {
                 setStory(4)
                 fetchData(story, language)

                 console.log("story: " + story)
             } else {
                 setStory(0);
                 fetchData(story, language)

                 setCounter(0);
                 console.log("story: " + story);

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
             <div className={"grid-even-3"}>
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