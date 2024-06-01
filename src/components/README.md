# Storyblok CLI Documentation

## Introduction

The Storyblok CLI (Command Line Interface) allows you to efficiently manage and automate various tasks in your Storyblok project. This documentation provides detailed steps to set up and utilize TypeScript in your Storyblok projects using the Storyblok CLI.

## Prerequisites

- Node.js installed on your machine
- An existing Storyblok project
- Basic understanding of TypeScript

## Installation

To begin, install the Storyblok CLI globally on your system:

```sh
npm i -g storyblok
```

## Logging In

Once the CLI is installed, log in to your Storyblok account by running:

```sh
storyblok login
```

Follow the on-screen instructions to complete the login process.

## Setting Up TypeScript in Your Storyblok Project

### Step 1: Get your `SPACE_ID`:

```
$ storyblok spaces
      _                   _     _       _
  ___| |_ ___  _ __ _   _| |__ | | ___ | | __
 / __| __/ _ \| '__| | | | '_ \| |/ _ \| |/ /
 \__ \ || (_) | |  | |_| | |_) | | (_) |   <
 |___/\__\___/|_|   \__, |_.__/|_|\___/|_|\_\
                    |___/


Hi, welcome to the Storyblok CLI


✓ Loading spaces...

 - Spaces From Europe region:
    website (id: 290825)
    Your demo space (id: 290824)
```

### Step 2: Pull Component Schema

Navigate to your project directory and download the schema of your Storyblok components into a `.json` file. Replace `SPACE_ID` with your actual Storyblok space ID.

```sh
storyblok pull-components --space SPACE_ID
```

It is recommended to add this command to the `scripts` section of your `package.json` for easier access. For example:

```json
{
  "scripts": {
    "pull-sb-components": "storyblok pull-components --space SPACE_ID --path ./src/components/"
  }
}
```

### Step 3: Generate TypeScript Types

Next, generate TypeScript types based on the downloaded schema. Again, replace `SPACE_ID` with your actual space ID.

```sh
storyblok generate-typescript-typedefs --sourceFilePaths ./src/components/components.SPACE_ID.json --destinationFilePath ./src/components/component-types.d.ts --titleSuffix StoryblokType
```

Similarly, add this command to the `scripts` section of your `package.json`:

```json
"scripts": {
  "generate-sb-types": "storyblok generate-typescript-typedefs --sourceFilePaths ./src/components/components.SPACE_ID.json --destinationFilePath ./src/components/component-types.d.ts --titleSuffix StoryblokType"
}
```

### Step 4: Import Types in Your Components

In your components, import the generated types to leverage TypeScript's benefits such as auto-completion and static typing. For example:

```typescript
import type { PageStoryblok } from "../component-types";
```

### Step 5: Update Scripts After Schema Changes

Remember to rerun the `pull-sb-components` and `generate-sb-types` scripts whenever you make changes to your component schema in your Storyblok space. This ensures your TypeScript types are always up-to-date.

## Example `package.json` Scripts Section

Here's an example of how your `scripts` section might look after adding the necessary commands:

```json
{
  "scripts": {
    "pull-sb-components": "storyblok pull-components --space SPACE_ID --path ./src/components",
    "generate-sb-types": "storyblok generate-typescript-typedefs --sourceFilePaths ./src/components/components.SPACE_ID.json --destinationFilePath ./src/components/component-types.d.ts --titleSuffix StoryblokType"
  }
}
```

## Advanced Usage

For more advanced use cases, customization options, and detailed documentation, refer to the official Storyblok CLI documentation.
