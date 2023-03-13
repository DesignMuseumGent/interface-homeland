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

    const autoplayOptions = {  delay: 8000,  rootNode: (emblaRoot) => emblaRoot.parentElement,}

    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay(autoplayOptions)])
    return(
        <div className={"embla"} ref={emblaRef}>
            <div className={"embla__container"}>
                {s0.map(im=> {
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
