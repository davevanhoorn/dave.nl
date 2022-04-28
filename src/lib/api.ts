import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const postsDirectory = join(process.cwd(), 'src/data/posts');

export const getPostSlugs = (): Array<string> => {
  const files = fs.readdirSync(postsDirectory);
  return files.map((file) => file.replaceAll('.md', ''));
};

export const getPost = (slug: string) => {
  const fullPath = join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { data, content };
};
