import React, {useEffect, useState} from "react";
import EmblaCarousel from "../utils/EmblaCarousel";
import {useInterval} from "../utils/utils";

const Screen1images = (props) =>  {

    const [count, setCount] = useState(0)
    const [story, setStory] = useState(0)

    useInterval(function(){
        let sec = new Date().getSeconds()
        if (sec === 20) {
            if (count < 4) {
                setCount(count+1)
                setStory(count)
                console.log(count);
            } else {
                setCount(0)
                setStory(count)
                console.log(count);
            }
        }
    }, 1000)


    return(
        <div>
            <EmblaCarousel story={story}/>
        </div>
    )
}

export default Screen1images;