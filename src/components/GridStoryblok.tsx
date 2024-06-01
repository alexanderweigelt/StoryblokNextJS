import { FC } from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { GridStoryblokType } from "./component-types";

interface GridStoryblokProps {
  blok: GridStoryblokType;
}

const GridStoryblok: FC<GridStoryblokProps> = ({ blok }) => {
  return (
    <div className="grid grid-cols-3" {...storyblokEditable(blok)}>
      {blok.columns?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default GridStoryblok;
