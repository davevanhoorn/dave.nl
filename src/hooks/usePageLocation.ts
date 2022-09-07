import { useRouter } from 'next/router';

import { routes } from '@/config/config';

const usePageLocation = () => {
  const router = useRouter();
  const isHome = router.pathname === '/';
  const isBlog =
    router.asPath === routes.blog || router.asPath.indexOf(routes.blog) !== -1;
  const isSingleBlog =
    router.asPath !== routes.blog &&
    router.asPath.indexOf(`${routes.blog}/`) !== -1;
  const isContact = router.asPath === '/contact';
  const isAbout = router.asPath === '/about';

  return { isHome, isBlog, isSingleBlog, isContact, isAbout };
};

export default usePageLocation;
