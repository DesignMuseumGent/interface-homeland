import React, {useEffect, useState} from "react";
import EmblaCarousel from "../utils/EmblaCarousel";

const Screen1images = (props) =>  {

    const [story, setStory] = useState(4)
    console.log(story)

    setInterval(function(){
        checkTime();
    }, 1000)


    function checkTime() {
        let minute = new Date().getMinutes();
        let second = new Date().getSeconds();
        if (second == 20) {
            if (story < 5){
                console.log(story)
                setStory(Number(story) + 1)
                if (story == 5) {
                    setStory(0)
                }
            } else {
                console.log(story)
                setStory(0);
            }
        } else {

        }
    }

    return(
        <div>
            <EmblaCarousel story={story}/>
        </div>
    )
}

export default Screen1images;