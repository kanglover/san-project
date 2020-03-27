/**
 * @file 改变面包屑路径的状态 Store
 * @author 邵康
*/
import {store} from 'san-store';
import {updateBuilder} from 'san-update';

export const Types = {
    INIT_PATH: 'initPath',
    SET_PATH: 'setPath'
};

store.addAction(Types.SET_PATH, function (state, {getState, dispatch}) {
    if (!getState('path')) {
        dispatch(Types.INIT_PATH);
    }

    return updateBuilder().set('path', state);
});

store.addAction(Types.INIT_PATH, () => updateBuilder().set('path', []));
