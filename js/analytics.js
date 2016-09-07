export default function(exerslide) {
  /* global ga */
  exerslide.subscribe('SLIDE.DID_MOUNT', ({slide}) => {
    ga('send', 'pageview', {
      'page': location.pathname + slide.url,
    });
  });
};
