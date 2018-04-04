'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // hi,egg
  router.get('/', controller.home.index);
  // 教务资讯
  router.get('/jwc/news', controller.jwc.news);
  router.get('/jwc/notices', controller.jwc.notice);
  router.get('/jwc/exam', controller.jwc.exam);
  // 官网资讯
  router.get('/neau/news', controller.neau.news);
  router.get('/neau/notices', controller.neau.notices);
  router.get('/neau/enrollment', controller.neau.enrollments);
  // router.get('/neau/pictures', controller.neau.pictures);
  // router.get('/neau/social', controller.neau.socials);
  // router.get('/neau/media', controller.neau.medias);
  // router.get('/neau/events', controller.neau.events);
  // router.get('/neau/base', controller.neau.bases);
  // 请求详情页数据
  router.post('/getdetail', controller.detail.getdetail);

  router.post('/search', controller.search.search);
};
