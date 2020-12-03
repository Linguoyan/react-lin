/** 全局唯一数据中心 **/
import { init } from '@rematch/core';

import app from '@/models/app';

const store = init({
  models: {
    app, // 这里的命名很重要，即这个模块的名字
  },
});

export default store;
