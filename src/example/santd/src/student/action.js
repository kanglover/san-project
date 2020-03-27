/**
 * @file 学生信息状态管理
 * @author 邵康
 */
import {store} from 'san-store';
import {updateBuilder} from 'san-update';
import service from './service';

store.addAction('fetchStudents', function (state, {getState, dispatch}) {
    // 考虑到分页不需要判读当前 students
    return service.fetchStudents(state).then(data => {
        dispatch('fillStudents', data);
        return data.total;
    });
});

store.addAction('findStudent', function (key, {getState, dispatch}) {
    if (key !== getState('key')) {
        return service.findStudent(key).then(data => {
            dispatch('fillStudent', data);
        });
    }
});

store.addAction('fillStudents', function (data) {
    return updateBuilder()
        .set('students', data.students);
});

store.addAction('fillStudent', function (data) {
    return updateBuilder()
        .set('key', data.key)
        .set('student', data);
});
