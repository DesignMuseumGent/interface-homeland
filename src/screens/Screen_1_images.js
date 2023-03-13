import React, {useEffect, useState} from "react";
import EmblaCarousel from "../utils/EmblaCarousel";

let time = new Date().getMinutes();
console.log(time);


function checkTime() {
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();
    if (minute % 2 == 0 && second == 0) {
        console.log("SWITCH")
    } else {

    }
}

setInterval(function(){
    checkTime()
}, 1000)

const Screen1images = (props) =>  {

    const [story, setStory] = useState("0")

    return(
        <div className={"screenContainer"}>
            <EmblaCarousel story={story}/>
        </div>
    )
}

export default Screen1images;