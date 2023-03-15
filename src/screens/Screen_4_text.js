import React, {useState} from "react";
import texts from "../data/DiversityInMilking.json"
import TextBlock from "../utils/TextBlock";

const Screen4text = (props) => {

    const [counter, setCounter] = useState(0)
    const [story, setStory] = useState(0);
    const [language, setLanguage] = useState("NL");
    const [text, setText] = useState(texts[0][language]["text"]);
    const [title, setTitle] = useState(texts[0][language]["title"]);


    setInterval(function(){
        checkTime();
    }, 1000)


    function checkTime() {
        let minute = new Date().getMinutes();
        let second = new Date().getSeconds();
        if (second == 20) {
            setCounter(counter + 1)
            console.log("counter: " + counter)

            if (counter < 1){
                setStory(Number(story) + 1);
                fetchData(story, language)
                console.log("story: " + story)


            } else if (counter === 1) {
                setStory(1)
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
        for (let i = 0; i < texts.length(); i++) {
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
            <TextBlock lang={language} story={story} texts={texts}/>
            <div className={"grid-even-3"}>
                <div>
                    <div className={"button"} onClick={()=>resetText("NL")}>
                        <h1 className={"text"}>NL</h1>
                    </div>
                </div>
                <div>
                    <div className={"button"} onClick={()=>resetText("EN")}>
                        <h1 className={"text"}>EN</h1>
                    </div>
                </div>
                <div>
                    <div className={"button"} onClick={()=>resetText("UK")}>
                        <h1 className={"text"}>UA</h1>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Screen4text