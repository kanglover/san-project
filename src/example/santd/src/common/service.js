/**
 * @file 请求
 * @author 邵康
*/
import config from './config';
import axios from 'axios';

export default {
    login(user) {
        return axios.post(`${config.API_URL}/users/login`, {user});
    },

    register(user) {
        return axios.post(`${config.API_URL}/users`, {user});
    }
};
