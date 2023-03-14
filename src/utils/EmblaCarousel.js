import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'

// import images.
import {s0} from "./imagesByIndex";
import {s1} from "./imagesByIndex";
import {s2} from "./imagesByIndex";
import {s3} from "./imagesByIndex";
import {s4} from "./imagesByIndex";

const EmblaCarousel = (props) => {

    let s;
    const stories = [s0, s1, s2, s3, s4]

    s = props.story
    let story = stories[s]

    const autoplayOptions = {  delay: 8000,  rootNode: (emblaRoot) => emblaRoot.parentElement,}

    const [emblaRef] = useEmblaCarousel({ loop: true, draggable:false }, [Autoplay(autoplayOptions)])
    return(
        <div className={"embla"} ref={emblaRef}>
            <div className={"embla__container"}>
                {story.map(im=> {
                    return(
                        <div className={"embla__slide"}>
                            <img src={im}/>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default EmblaCarousel;
