import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { FiChevronsRight } from 'react-icons/fi';

import { getAllPosts } from '@/lib/api';

import Layout from '@/components/layouts/Layout';

import { PostProps } from '@/pages/blog/[slug]';

interface BlogOverviewProps {
  posts: Array<PostProps>;
}

const BlogOverview: NextPage<BlogOverviewProps> = ({ posts }) => {
  return (
    <Layout className='flex flex-col gap-4 md:gap-8'>
      {posts.map((post, postKey) => {
        return (
          <Link
            href={`/blog/${post.postData.slug}`}
            key={`post-${postKey}`}
            passHref
          >
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className='flex items-center justify-between rounded border bg-white p-4 hover:text-sky-500 md:p-6'>
              <span className='text-xl font-medium md:text-2xl md:leading-9'>
                {post.postData.title}
              </span>
              <FiChevronsRight size={22} className='ml-7 shrink-0' />
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
