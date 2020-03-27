import Home from './view/Home.san';
import List from './view/List.san';
import About from './components/About';
import {router} from 'san-router';

const routes = [
    {
        rule: '/',
        Component: Home
    },
    {
        rule: '/list',
        Component: List
    },
    {
        rule: '/about',
        Component: About
    }
];

// 将路由规则的 target 属性设置为根组件中的标签
routes.forEach(item => {
    router.add({
        ...item,
        target: '#main'
    });
});

// 设置路由模式 'html5' | 'hash'
router.setMode('html5');

// 路由监听，路由发生变化时触发
router.listen((e, config) => {
    console.log(e);
    console.log(config);
});

export default router;

