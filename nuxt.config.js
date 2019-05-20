const path = require('path');

const rootDir = path.resolve(__dirname);

export default {
  loading: false,
  // mode: 'spa',
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  env: {
    users: [
      { id: 1, name: 'Kobe Bryant', number: 24 },
      { id: 2, name: 'Michael Jordan', number: 23 },
      { id: 3, name: 'Stephen Curry', number: 30 },
      { id: 4, name: 'Lebron James', number: 23 },
      { id: 5, name: 'Kevin Durant', number: 35 },
      { id: 6, name: 'Kyrie Irving', number: 2 }
    ]
  },
  // generate: {
  //   routes: [
  //     '/1',
  //     '/2',
  //     '/3',
  //     '/4',
  //     '/5',
  //     '/6'
  //   ]
  // }

  /**
   * router
   * @see https://nuxtjs.org/api/configuration-router
   * @see https://router.vuejs.org/guide/essentials/dynamic-matching.html
   * @see https://github.com/pillarjs/path-to-regexp#parameters
   */
  router: {
    extendRoutes(routes, resolve) {
      // `~` を接頭辞とするパスをルーティングから削除
      routes.forEach((route, index) => {
        if (/(^~|-~)/.test(route.name)) {
          routes.splice(index, 1);
        }
      });

      // eslint-disable-next-line no-param-reassign
      routes = [
        // SD ガイド
        {
          name: 'sd-guide-custom',
          path: '/sd/:restaurant_id([0-9]{6})',
          component: resolve(rootDir, 'pages/sd/~guide/index.vue'),
          children: [
            // {
            //   path: '',
            //   component: resolve(rootDir, 'pages/sd/~guide/index/index.vue'),
            // },
            {
              name: 'sd-guide-plan-custom',
              path: ':plan_id([0-9]{8})',
              component: resolve(rootDir, 'pages/sd/~guide/index/plan.vue'),
            },
          ],
        },

        // デフォルト
        ...routes,
      ];

      return routes;
    },
  },
}
