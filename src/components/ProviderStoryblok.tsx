"use client";

import React, { FunctionComponent } from "react";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { COMPONENTS } from "./index";

interface StoryblokProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

storyblokInit({
  accessToken: process.env.NEXT_STORYBLOK_PREVIEW_TOKEN,
  use: [apiPlugin],
  components: COMPONENTS,
  apiOptions: {
    region: "eu",
  },
});

const ProviderStoryblok: FunctionComponent<StoryblokProviderProps> = ({
  children,
}) => {
  return children;
};

export default ProviderStoryblok;
