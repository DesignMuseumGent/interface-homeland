import React, {useEffect, useState} from "react";
import EmblaCarousel from "../utils/EmblaCarousel";

const Screen1images = (props) =>  {

    const [counter, setCounter] = useState(4)
    const [story, setStory] = useState(4)

    setInterval(function(){
        checkTime();
    }, 1000)


    function checkTime() {
        let minute = new Date().getMinutes();
        let second = new Date().getSeconds();
        if (second == 20) {
            setCounter(counter + 1)
            console.log("counter: " + counter)

            if (counter < 4){
                setStory(Number(story) + 1);
                console.log("story: " + story)


            } else if (counter === 4) {
                setStory(4)
                console.log("story: " + story)
            } else {
                setStory(0);
                setCounter(0);
                console.log("story: " + story);

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