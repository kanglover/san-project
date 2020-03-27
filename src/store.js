import {updateBuilder} from 'san-update/src/index';
import {store} from 'san-store';

store.addAction('changeOrderState', (state, {getState, dispatch}) => {
    // 取出当前的订单状态
    const orderState = getState('orderState');
    if (!state) {
        return dispatch('fillOrderState', 1);
    }
    // 改变的状态和当前状态进行对比
    else if (state === orderState || state < 1 || state > 3) {
        return;
    }

    // axios.post('./api/orderState', {state})
    //     .then(res => {
    //         if (res.status === 200) {
    //             dispatch('fillOrderState', state);
    //         }
    //     })
    //     .catch(error => {
    //        console.log(error);
    //     });
    dispatch('fillOrderState', state);
});

store.addAction('fillOrderState', state => updateBuilder().set('orderState', state));

store.dispatch('fillOrderState', 1);

