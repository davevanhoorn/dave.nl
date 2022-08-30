import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

import { getAllPostsDataField, getPostByFieldValue } from '@/lib/api';

import Layout from '@/components/layouts/Layout';

export type PostProps = {
  postData: {
    slug: string;
    title: string;
    excerpt: string;
    subject: 'React' | 'JavaScript';
    coverImage: string; // '/assets/blog/dynamic-routing/cover.jpg'
    date: string; // '2020-03-16T05:35:07.322Z'
    author: {
      name: string; // JJ Kasper
      picture: string; //'/assets/blog/authors/jj.jpeg'
    };
    ogImage: {
      url: string; // '/assets/blog/dynamic-routing/cover.jpg'
    };
  };
  postContent: string;
};

const BlogPost: NextPage<PostProps> = ({ postData, postContent }) => {
  useEffect(() => {
    const highlightAllWithPrism = async () => {
      const Prism = (await import('prismjs')).default;

      if (!Prism) return;

      await require('prismjs/components/prism-typescript');
      await require('prismjs/components/prism-javascript');
      await require('prismjs/components/prism-css');
      await require('prismjs/components/prism-jsx');
      await require('prismjs/components/prism-bash');

      Prism.highlightAll();
    };

    highlightAllWithPrism();
  }, []);

  return (
    <Layout>
      <h1 className='mb-8 text-3xl font-semibold leading-10 lg:text-5xl lg:leading-tight'>
        {postData.title}
      </h1>
      <article className='prose-lg'>
        <ReactMarkdown>{postContent}</ReactMarkdown>
      </article>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllPostsDataField('slug').map((slug) => ({ params: { slug } })), // [{ params: { slug: '1' } }, { params: { slug: '2' } }]
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug) {
    return {
      notFound: true,
    };
  }

  const slug = Array.isArray(params?.slug)
    ? params?.slug.join('/')
    : params?.slug;

  const post = getPostByFieldValue('slug', slug);

  if (!post?.postContent || !post?.postData) {
    return {
      notFound: true,
    };
  }

  const { postData, postContent } = post;

  return {
    props: {
      postData,
      postContent,
    },
  };
};

export default BlogPost;
