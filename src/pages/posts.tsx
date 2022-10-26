import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

import { getAllPosts } from '@/lib/api';

import Layout from '@/components/layouts/Layout';

import { routes } from '@/config/config';
import { PostProps } from '@/pages/posts/[slug]';

interface BlogOverviewProps {
  posts: Array<PostProps>;
}

const BlogOverview: NextPage<BlogOverviewProps> = ({ posts }) => {
  return (
    <Layout className='flex flex-col gap-4 md:gap-8'>
      {posts.map((post, postKey) => (
        <Link
          className='flex flex-col rounded-md border bg-white p-4 md:p-8'
          href={`${routes.blog}/${post.postData.slug}`}
          key={`post-${postKey}`}
          passHref
        >
          <p className='font-display text-2xl font-medium hover:text-purple-600 md:text-4xl md:leading-none'>
            {post.postData.title}
          </p>
          {post.postData.subTitle && (
            <p className='font-regular mt-3 text-lg leading-6 text-gray-400'>
              {post.postData.subTitle}
            </p>
          )}
          {post.postData.excerpt && (
            <p className='mt-5 flex-grow text-lg leading-relaxed text-black'>
              {post.postData.excerpt}
            </p>
          )}
          <p className='mt-4 text-base font-medium text-black hover:text-purple-600'>
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
