import {FC} from "react";
import {storyblokEditable, StoryblokComponent} from "@storyblok/react";
import {CarouselStoryblok} from "./storyblok-component-types";

interface CarouselProps {
  blok: CarouselStoryblok
}

const Carousel: FC<CarouselProps> = ({blok}) => {
  return (
    <div className="grid grid-cols-3" {...storyblokEditable(blok)}>
      {blok.carousel_items?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid}/>
      ))}
    </div>
  );
};

export default Carousel;
