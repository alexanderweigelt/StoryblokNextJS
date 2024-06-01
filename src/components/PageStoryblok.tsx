import { FC } from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { PageStoryblokType } from "./component-types";
import { DarkThemeToggle } from "flowbite-react";

interface PageStoryblokProps {
  blok: PageStoryblokType;
}

const PageStoryblok: FC<PageStoryblokProps> = ({ blok }) => (
  <div
    className={"min-h-screen p-4 dark:bg-gray-800"}
    {...storyblokEditable(blok)}
  >
    <header className={"flex"}>
      <div>
        {blok.header?.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
      <DarkThemeToggle />
    </header>
    <main className={"flex flex-col items-center justify-center gap-2"}>
      <h1
        className={
          "mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl"
        }
      >
        {blok.headline}
      </h1>
      {blok.main?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
    {blok.footer && (
      <footer>
        {blok.footer?.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </footer>
    )}
  </div>
);

export default PageStoryblok;
