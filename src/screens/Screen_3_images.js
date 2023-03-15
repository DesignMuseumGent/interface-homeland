import React, {useState} from "react";
import EmblaCarousel from "../utils/EmblaCarousel";


const Screen3images = () => {

    const [counter, setCounter] = useState(5)
    const [story, setStory] = useState(5)

    setInterval(function(){
        checkTime();
    }, 1000)

    function checkTime() {
        let minute = new Date().getMinutes();
        let second = new Date().getSeconds();
        if (second == 20) {
            setCounter(counter + 1)
            console.log("counter: " + counter)

            if (counter < 6){
                setStory(Number(story) + 1);
                console.log("story: " + story)

            } else if (counter === 6) {
                setStory(6)
                console.log("story: " + story)
            } else {
                setStory(5);
                setCounter(5);
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

export default Screen3images