/**
 * @file main.js
 * @author 邵康
 */
import 'santd/dist/santd.css';
import '@babel/polyfill';
import {router} from 'san-router';
import studentRouter from './student/router';
import Home from './home/index';
import Register from './common/register';
import Login from './common/login';
import './student/action';
import './common/action';
import {store} from 'san-store';

// (new Home()).attach(document.querySelector('#app'));
router.add({rule: '/login', Component: Login, target: '#app'});
router.add({rule: '/Register', Component: Register, target: '#app'});
router.add({rule: '/home', Component: Home, target: '#app'});
studentRouter.forEach(item => {
    router.add({
        ...item,
        target: '#main'
    });
});

router.listen(e => {
    if (e.path === '/login') {
        return;
    }
    let isLogin = store.getState('isAuthenticated');
    if (!isLogin) {
        e.stop();
        router.locator.redirect('/login');
    }
    else {
        let token = window.localStorage.getItem('id_token');
        if (token) {
            e.stop();
            router.locator.redirect('/login');
        }
    }
});

router.start();
