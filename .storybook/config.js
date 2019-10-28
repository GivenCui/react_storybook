// // 配置一: story写在 src/stories中
// import { configure } from '@storybook/react';

// // automatically import all files ending in *.stories.js
// configure(require.context('../src/stories', true, /\.stories\.js$/), module);

// 配置二: xx.stories.js
import { configure } from '@storybook/react';
// 解决require.context在yarn test时报错问题
import requireContext from 'require-context.macro';

import '../src/index.css';

// webpack https://webpack.js.org/guides/dependency-management/
// 使用 require.context 可以动态引入文件
// 利用require.context遍历目录所以的xx.stories.js
// const req = require.context('../src', true, /\.stories.js$/);
const req = requireContext('../src', true, /\.stories.js$/);
// console.log('req类型', typeof req) // function

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
