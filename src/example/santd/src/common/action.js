/**
 * @file 用户信息 action
 * @author 邵康
 */
import {store} from 'san-store';
import {updateBuilder} from 'san-update';
import service from './service';

export const Types = {
    LOGIN: 'userLogin',
    GET: 'userGet',
    REGISTER: 'userRegister',
    SET_AUTH: 'userSetAuth'
};

store.addAction(Types.LOGIN, (state, {dispatch}) => {
    return service.login(state)
        .then(({data}) => {
            dispatch(Types.SET_AUTH, data);
            return data;
        })
        .catch(errors => {
            console.log(errors.response.data.errors);
        });
});

store.addAction(Types.REGISTER, function (state, {dispatch}) {
    return service.register(state)
        .then(function ({data}) {
            dispatch(Types.SET_AUTH, data);
            return data;
        })
        .catch(errors => {
            let formattedErrors = Object.keys(errors)
                .map(key => `${key} ${errors[key]}`);
            console.log(formattedErrors);
        });
});

store.addAction(Types.SET_AUTH, function (user, {dispatch}) {
    window.localStorage.setItem('id_token', user.token);
    return updateBuilder()
        .set('user', user)
        .set('isAuthenticated', true);
});
