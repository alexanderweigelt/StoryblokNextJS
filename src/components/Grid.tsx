import {FC} from "react";
import {storyblokEditable, StoryblokComponent} from "@storyblok/react";
import {GridStoryblok} from "./storyblok-component-types";

interface GridProps {
  blok: GridStoryblok
}

const Grid: FC<GridProps> = ({blok}) => {
  return (
    <div className="grid grid-cols-3" {...storyblokEditable(blok)}>
      {blok.columns?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid}/>
      ))}
    </div>
  );
};

export default Grid;
