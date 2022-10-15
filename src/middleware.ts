import {
  chainMatch,
  csp,
  isPageRequest,
  strictDynamic,
} from '@next-safe/middleware';

const securityMiddleware = [
  csp({
    directives: {
      'default-src': [`self`],
      'img-src': [`self`],
      'font-src': [`self`, `https://fonts.gstatic.com`],
      'style-src': [`self`, `https://fonts.googleapis.com`, `unsafe-inline`],
      'script-src': [`self`],
      'connect-src': [`self`],
    },
  }),

  strictDynamic(),
];

export default chainMatch(isPageRequest)(...securityMiddleware);
