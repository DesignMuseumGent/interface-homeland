import React from "react";
import texts from "../data/text.json";

const TextBlock = (props) => {
    const _lang = props.lang;
    const _story = props.story;

    return(
        <div>
            <h1 className={"title"} style={{textAlign:"center"}}>{texts[_story][_lang]["title"]}</h1>
            <div className={"textContainer"}>
                <p className={"text"}>{texts[_story][_lang]["text"]}</p>
            </div>
        </div>
    )

}

export default TextBlock;