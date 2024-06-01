import { storyblokEditable } from "@storyblok/react";
import { TeaserStoryblokType } from "./component-types";
import { FC } from "react";

interface TeaserStoryblokProps {
  blok: TeaserStoryblokType;
}

const TeaserStoryblok: FC<TeaserStoryblokProps> = ({ blok }) => {
  return (
    <h2
      className="text-4xl font-extrabold dark:text-white"
      {...storyblokEditable(blok)}
    >
      {blok.headline}
    </h2>
  );
};

export default TeaserStoryblok;
