import { Icons } from "@/components/icons";
import type { BaseLayoutProps, LinkItemType } from "fumadocs-ui/layouts/shared";
import { WorkflowIcon } from "lucide-react";
import Image from "next/image";

export const title = "locospec";
export const description =
  "Personal website of Locospec. This is where I articulate my work, open source projects, thoughts, ideas, work, commentary and opinions.";
export const owner = "LoCoSpec";
/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <WorkflowIcon />
        Locospec
      </>
    ),
  },
  links: [
    {
      text: "Docs",
      url: "/docs",
    },
  ],
};

export const linkItems: LinkItemType[] = [
  {
    icon: <Icons.info />,
    text: "Blog",
    url: "/blog",
    active: "url",
  },
  {
    icon: <Icons.info />,
    text: "About",
    url: "/about",
    active: "url",
  },
  {
    icon: <Icons.posts />,
    text: "Me",
    url: "/me",
    active: "url",
  },
  {
    icon: <Icons.tags />,
    text: "Tags",
    url: "/tags",
    active: "url",
  },
];

export const postsPerPage = 5;
