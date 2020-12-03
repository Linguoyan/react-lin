/** Footer 页面底部 **/
import React from 'react';
import './index.less';

export default function Footer(props) {
  return (
    <div className="footer">
      © 2020-12-01{' '}
      <a
        href="https://github.com/Linguoyan/react-lin"
        target="_blank"
        rel="noopener noreferrer"
      >
        react-lin
      </a>
      , linguoyan.
    </div>
  );
}
