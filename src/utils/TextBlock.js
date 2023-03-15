import React from "react";

const TextBlock = (props) => {
    const _lang = props.lang;
    const _story = props.story;
    const texts = props.texts;
    const font = props.font;

    return(
        <div>
            <h1 className={"title"} style={{textAlign:"center", padding: "1vw"}}>{texts[_story][_lang]["title"]}</h1>
            <div className={"textContainer"}>
                <p style={{textAlign: "justify", padding: "4vw"}} className={font?"textSmall":"text"}>{texts[_story][_lang]["text"]}</p>
            </div>
        </div>
    )

}

export default TextBlock;