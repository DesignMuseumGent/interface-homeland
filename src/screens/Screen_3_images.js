import React, {useEffect, useRef, useState} from "react";
import EmblaCarousel from "../utils/EmblaCarousel";
import {useInterval} from "../utils/utils";


const Screen3images = () => {
    const [count, setCount] = useState(5)
    const [story, setStory] = useState(5)

    useInterval(function(){
        let sec = new Date().getSeconds()
        if (sec === 20) {
            if (count < 6) {
                setCount(count+1)
                setStory(count)
                console.log(count);
            } else {
                setCount(5)
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

export default Screen3images