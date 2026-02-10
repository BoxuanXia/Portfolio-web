import fs from "fs";
import path from "path";
import matter from "gray-matter";

const PROJECTS_PATH = path.join(process.cwd(), "content/projects");

export function getProjectSlugs() {
  return fs.readdirSync(PROJECTS_PATH).filter((path) => /\.mdx?$/.test(path));
}

export function getProjectBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx?$/, "");
  const fullPath = path.join(PROJECTS_PATH, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { data, content, slug: realSlug };
}

export function getAllProjects() {
  const slugs = getProjectSlugs();
  const projects = slugs
    .map((slug) => getProjectBySlug(slug))
    .sort((a, b) => (a.data.date > b.data.date ? -1 : 1));
  return projects;
}
