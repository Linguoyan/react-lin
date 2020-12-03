/** 导航 **/

import React from 'react';
import { Link } from 'react-router-dom';
import './index.less';

export default function Menu() {
  return (
    <div className="menu">
      <Link to="/home">首页</Link>|<Link to="/test">测试</Link>|
      <Link
        to={{
          pathname: '/geektime',
          search: '?a=123&b=abc',
          state: { c: '456', d: 'ABC' },
        }}
      >
        demo
      </Link>
      |
      <a
        href="https://github.com/Linguoyan/react-lin"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </div>
  );
}
