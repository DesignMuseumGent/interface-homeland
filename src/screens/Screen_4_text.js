import React, {useState} from "react";
import texts from "../data/DiversityInMilking.json"
import TextBlock from "../utils/TextBlock";

const Screen4text = (props) => {

    const [story, setStory] = useState(0);
    const [language, setLanguage] = useState("NL");
    const [text, setText] = useState(texts[0][language]["text"]);
    const [title, setTitle] = useState(texts[0][language]["title"]);
    const [small, setSmall] = useState(false);
    const [counter, setCounter] = useState(0)



    setInterval(function(){
        checkTime(counter);

    }, 1000)


    function checkTime(counter) {
        let minute = new Date().getMinutes();
        let second = new Date().getSeconds();
        let mil = new Date().getMilliseconds()

        if (second == 20) {
            setCounter(counter + 1)
            console.log("counter: " + counter)

            try{
                if (counter < 1){
                    setStory(Number(story) + 1);
                    fetchData(story, language)
                    console.log("story: " + story)

                } else {
                    setStory(0);
                    fetchData(story, language)

                    setCounter(0);
                    console.log("story: " + story);

                }
            } catch (e) {console.log(e)}


        } else {

        }

    }

    function fetchData(storyNumber, lang) {
        for (let i = 0; i < 2; i++) {
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