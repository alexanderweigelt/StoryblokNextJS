import { FC } from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { CarouselStoryblokType } from "./component-types";
import { Carousel } from "flowbite-react";

interface CarouselStoryblokProps {
  blok: CarouselStoryblokType;
}

const CarouselStoryblok: FC<CarouselStoryblokProps> = ({ blok }) => {
  return (
    <Carousel {...storyblokEditable(blok)}>
      {blok.carousel_items?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </Carousel>
  );
};

export default CarouselStoryblok;
