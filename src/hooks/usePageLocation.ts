import { useRouter } from 'next/router';

const usePageLocation = () => {
  const router = useRouter();
  const isHome = router.pathname === '/';
  const isBlog =
    router.asPath === '/blog' || router.asPath.indexOf('/blog/') !== -1;
  const isSingleBlog =
    router.asPath !== '/blog' || router.asPath.indexOf('/blog/') !== -1;
  const isPortfolio = router.asPath === '/portfolio';
  const isContact = router.asPath === '/contact';
  const isAbout = router.asPath === '/about';

  return { isHome, isBlog, isSingleBlog, isPortfolio, isContact, isAbout };
};

export default usePageLocation;
