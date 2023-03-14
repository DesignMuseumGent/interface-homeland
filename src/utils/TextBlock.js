import React from "react";
import texts from "../data/text.json";

const TextBlock = (props) => {
    const _lang = props.lang;
    const _story = props.story;

    return(
        <div style={{height: "70vh"}}>
            <h1 className={"title"} style={{textAlign:"center", padding: "1vw"}}>{texts[_story][_lang]["title"]}</h1>
            <div className={"textContainer"}>
                <p style={{textAlign: "justify", padding: "4vw"}} className={"text"}>{texts[_story][_lang]["text"]}</p>
            </div>
        </div>
    )

}

export default TextBlock;