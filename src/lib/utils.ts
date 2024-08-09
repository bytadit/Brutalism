import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Post } from "#site/contents";
import { Project } from "#site/contents";
import { slug } from "github-slugger";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function convertToSlug(text: string){
  return text.toLowerCase().replace(/\s+/g, "-");
};

export function sortPosts(posts: Array<Post>) {
  return posts.sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0;
  });
}

type Topics = {
  [key: string]: number;
};

export const sumValues = (topics: Topics): number => {
  return Object.values(topics).reduce((acc, curr) => acc + curr, 0);
};

export function sortProjects(projects: Array<Project>) {
  return projects
  .sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0;
  });
}
export function readingTime(post: string){
  const WORDS_PER_MINUTE = 200;
  const regex = /\w+/g;
  const result = post
    ? {
        wordCount: post.match(regex)?.length || 0,
        readingTime: Math.ceil(
          (post.match(regex)?.length || 0) / WORDS_PER_MINUTE
        ),
      }
    : { wordCount: 0, readingTime: 0 };
  return result.readingTime;
};

export function getAllTags(posts: Array<Post>) {
  const tags: Record<string, number> = {};
  posts
  .filter(post => !post.draft)
  .forEach((post) => {
    post.tags?.forEach((tag) => {
      tags[tag] = (tags[tag] ?? 0) + 1;
    });
  });
  return tags;
} 

export function getAllCategories(posts: Array<Post>) {
  const categories: Record<string, number> = {};
  posts
  .filter(post => !post.draft)
  .forEach((post) => {
    categories[post.category] = (categories[post.category] ?? 0) + 1;
  });
  return categories;
} 

export function sortTagsByCount(tags: Record<string, number>) {
  return Object.keys(tags).sort((a, b) => tags[b] - tags[a]);
}

export function sortCategoriesByCount(category: Record<string, number>) {
  return Object.keys(category).sort((a, b) => category[b] - category[a]);
}

export function getPostByTagSlug(posts: Array<Post>, tag: string) {
  return posts
  .filter(post => !post.draft)
  .filter(post => {
    if(!post.tags) return false;
    const slugifiedTags = post.tags.map(tag => slug(tag));
    return slugifiedTags.includes(tag);
  });
}

export function slugToTitle(slug: string){
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function getPostByCategorySlug(posts: Array<Post>, category: string) {
  return posts
  .filter(post => !post.draft)
  .filter(post => {
    if(!post.category) return false;
    const slugifiedCategory = slug(post.category);
    return slugifiedCategory.includes(category);
  });
}

// For Projects
export function getAllProjectTags(projects: Array<Project>) {
  const tags: Record<string, number> = {};
  projects
  .filter(project => !project.draft)
  .forEach((project) => {
    project.tags?.forEach((tag) => {
      tags[tag] = (tags[tag] ?? 0) + 1;
    });
  });
  return tags;
} 

export function getAllProjectCategories(projects: Array<Project>) {
  const categories: Record<string, number> = {};
  projects
  .filter(project => !project.draft)
  .forEach((project) => {
    categories[project.category] = (categories[project.category] ?? 0) + 1;
  });
  return categories;
} 


export function getProjectByTagSlug(projects: Array<Project>, tag: string) {
  return projects
  .filter(project => !project.draft)
  .filter(project => {
    if(!project.tags) return false;
    const slugifiedTags = project.tags.map(tag => slug(tag));
    return slugifiedTags.includes(tag);
  });
}

export function getProjectByCategorySlug(projects: Array<Project>, category: string) {
  return projects
  .filter(project => !project.draft)
  .filter(project => {
    if(!project.category) return false;
    const slugifiedCategory = slug(project.category);
    return slugifiedCategory.includes(category);
  });
}