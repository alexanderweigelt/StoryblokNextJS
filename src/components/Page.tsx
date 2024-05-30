import {FC} from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import {PageStoryblok} from "./storyblok-component-types";

interface PageProps {
  blok: PageStoryblok
}

const Page: FC<PageProps> = ({ blok }) => (
  <main className="text-center mt-4" {...storyblokEditable(blok)}>
    {blok.body?.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;
