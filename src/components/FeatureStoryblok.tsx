import { FC } from "react";
import { storyblokEditable } from "@storyblok/react";
import { FeatureStoryblokType } from "./component-types";

interface FeatureStoryblokProps {
  blok: FeatureStoryblokType;
}

const FeatureStoryblok: FC<FeatureStoryblokProps> = ({ blok }) => (
  <div {...storyblokEditable(blok)}>{blok.name}</div>
);

export default FeatureStoryblok;
