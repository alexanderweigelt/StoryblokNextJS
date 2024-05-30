import {FC} from "react";
import {storyblokEditable} from "@storyblok/react";
import {FeatureStoryblok} from "./storyblok-component-types";

interface FeatureProps {
  blok:  FeatureStoryblok
}

const Feature: FC<FeatureProps> = ({ blok }) => (
  <div className="column feature" {...storyblokEditable(blok)}>
    {blok.name}
  </div>
);

export default Feature;
