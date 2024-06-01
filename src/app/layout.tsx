import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {
  storyblokInit,
  apiPlugin,
  StoryblokBridgeLoader,
} from "@storyblok/react/rsc";
import { ThemeModeScript } from "flowbite-react";
import "@/styles/globals.css";
import { COMPONENTS } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Storyblok Next.js example app",
  description:
    "My private app for the presentation of a Storyblok Next.js sample app",
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
      <head>
        <ThemeModeScript />
      </head>
      <body className={inter.className}>{children}</body>
      <StoryblokBridgeLoader options={{}} />
    </html>
  );
}
