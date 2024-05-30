import {ReactNode} from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {storyblokInit, apiPlugin, StoryblokBridgeLoader} from "@storyblok/react/rsc";
import "../styles/globals.css";
import {COMPONENTS} from "../components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alexander Weigelt",
  description: "My private app",
};

storyblokInit({
  accessToken: process.env.NEXT_STORYBLOK_PREVIEW_TOKEN,
  use: [apiPlugin],
  components: COMPONENTS,
  apiOptions: {
    region: "eu",
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <StoryblokBridgeLoader options={{}} />
    </html>
  );
}
