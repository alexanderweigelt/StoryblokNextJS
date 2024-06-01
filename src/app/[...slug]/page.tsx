import { ISbStoriesParams, StoryblokComponent } from "@storyblok/react/rsc";
import { getStoryblokApi, ISbStoryData } from "@storyblok/react";

type Props = {
  params: { slug?: string[] };
  searchParams: { [key: string]: string | string[] | undefined };
};

const Page = async ({ params }: Props) => {
  let { story } = await fetchData(params);

  return <StoryblokComponent blok={story.content} />;
};

async function fetchData(params: {
  slug?: string[];
}): Promise<{ story: ISbStoryData }> {
  const storyblokApi = getStoryblokApi();
  let slug = params.slug ? params.slug.join("/") : "home";
  let sbParams: ISbStoriesParams = {
    version: "draft", // or 'published'
  };
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    story: data ? data.story : false,
  };
}

export default Page;
