import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

import { getPost, getPostSlugs } from '@/lib/api';

import Layout from '@/components/layouts/Layout';

type BlogPostProps = {
  postData: {
    title: string;
    excerpt: string;
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

const BlogPost: NextPage<BlogPostProps> = ({ postData, postContent }) => {
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
      <h1 className='mt-4 mb-8 text-5xl leading-tight'>{postData.title}</h1>
      <article className='prose-lg'>
        <ReactMarkdown>{postContent}</ReactMarkdown>
      </article>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getPostSlugs();

  return {
    paths: slugs.map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug) {
    return {
      notFound: true,
    };
  }

  const slug = Array.isArray(params.slug) ? params.slug.join('/') : params.slug;
  const { data, content } = getPost(slug);

  return {
    props: {
      postData: data,
      postContent: content,
    },
  };
};

export default BlogPost;
