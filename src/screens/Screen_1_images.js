import React, {useEffect, useState} from "react";
import EmblaCarousel from "../utils/EmblaCarousel";

const Screen1images = (props) =>  {

    const [story, setStory] = useState(0)
    console.log(story)

    setInterval(function(){
        checkTime();
    }, 1000)


    function checkTime() {
        let minute = new Date().getMinutes();
        let second = new Date().getSeconds();
        if (minute % 2 == 0 && second == 0) {
            if (story < 4){
                console.log(story)
                setStory(Number(story) + 1)
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