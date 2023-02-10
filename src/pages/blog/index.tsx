import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

import { getAllPosts } from '@/lib/api';

import Layout from '@/components/layouts/Layout';

import { routes } from '@/config/config';
import { PostProps } from '@/pages/blog/[slug]';

interface BlogOverviewProps {
  posts: Array<PostProps>;
}

const BlogOverview: NextPage<BlogOverviewProps> = ({ posts }) => {
  return (
    <Layout className='flex flex-col gap-4 md:gap-8'>
      {posts.map((post, postKey) => (
        <Link
          className='flex flex-col rounded-md border bg-white p-6 md:p-8'
          href={`${routes.blog}/${post.postData.slug}`}
          key={`post-${postKey}`}
          passHref
        >
          <p className='font-display text-3xl font-semibold hover:underline md:text-4xl md:leading-tight'>
            {post.postData.title}
          </p>
          {post.postData.subTitle && (
            <p className='font-regular mt-1 text-lg leading-6 text-gray-400 md:mt-2'>
              {post.postData.subTitle}
            </p>
          )}
          {post.postData.excerpt && (
            <p className='mt-5 flex-grow text-lg leading-relaxed text-black'>
              {post.postData.excerpt}
            </p>
          )}
          <p className='mt-4 text-base font-medium text-black hover:underline'>
            Meer lezen →
          </p>
        </Link>
      ))}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
};

export default BlogOverview;
