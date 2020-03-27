/**
 * @file
 * @author 邵康
 * @date 2020/3/18
*/
import App from './App.san';
import router from './router';
import './store';

new App().attach(document.getElementById('app'));


// 启动路由
router.start();

