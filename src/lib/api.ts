import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

import { PostProps } from '@/pages/blog/[slug]';

const postsDirectory = join(process.cwd(), 'src/data/posts');

export const getPostsFiles = (): Array<string> => {
  const files = fs.readdirSync(postsDirectory);
  return files.map((file) => file.replace(/.md/g, ''));
};

export const getAllPosts = () =>
  getPostsFiles().map((fileName) => getPost(fileName));

export const getAllPostsDataField = (
  field: keyof Pick<PostProps['postData'], 'slug'>
): Array<string> =>
  getPostsFiles().map((fileName) => getPost(fileName).postData[field]);

export const getPostByFieldValue = (
  field: keyof Pick<PostProps['postData'], 'slug'>,
  value: string
) =>
  getPostsFiles()
    .map((fileName) => {
      const post = getPost(fileName);
      if (post.postData[field] === value) {
        return post;
      }
      return undefined;
    })
    .filter(Boolean)
    .find(Boolean);

export const getPost = (fileName: string): PostProps => {
  const fullPath = join(postsDirectory, `${fileName}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { postData: data as PostProps['postData'], postContent: content };
};
