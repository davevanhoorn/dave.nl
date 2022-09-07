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
      {posts.map((post, postKey) => {
        return (
          <Link
            href={`${routes.blog}/${post.postData.slug}`}
            key={`post-${postKey}`}
            passHref
          >
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className='flex flex-col rounded-md border bg-white p-4 md:p-8'>
              <p className='text-xl font-semibold hover:text-purple-600 md:text-2xl md:leading-8'>
                {post.postData.title}
              </p>
              {post.postData.subTitle && (
                <p className='mt-1 text-lg font-medium leading-6 text-gray-400'>
                  {post.postData.subTitle}
                </p>
              )}
              {post.postData.excerpt && (
                <p className='mt-5 flex-grow text-base leading-relaxed text-black'>
                  {post.postData.excerpt}
                </p>
              )}
              <p className='mt-4 text-base font-semibold text-black hover:text-purple-600'>
                Meer lezen →
              </p>
            </a>
          </Link>
        );
      })}
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
