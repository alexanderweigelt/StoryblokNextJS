import { ISbStoriesParams, StoryblokComponent } from "@storyblok/react/rsc";
import { getStoryblokApi, ISbStoryData } from "@storyblok/react";

const Home = async () => {
  let { story } = await fetchData();

  return <StoryblokComponent blok={story.content} />;
};

async function fetchData(): Promise<{ story: ISbStoryData }> {
  const storyblokApi = getStoryblokApi();
  let sbParams: ISbStoriesParams = {
    version: "draft", // or 'published'
  };
  let { data } = await storyblokApi.get(`cdn/stories/home`, sbParams);

  return {
    story: data ? data.story : false,
  };
}

export default Home;
