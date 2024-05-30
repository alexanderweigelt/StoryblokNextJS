import { storyblokEditable } from "@storyblok/react";
import {TeaserStoryblok} from "./storyblok-component-types";
import {FC} from "react";

interface TeaserProps {
  blok: TeaserStoryblok
}

const Teaser: FC<TeaserProps> = ({ blok }) => {
  return <h2 className="text-2xl mb-10" {...storyblokEditable(blok)}>{blok.headline}</h2>;
};

export default Teaser;
