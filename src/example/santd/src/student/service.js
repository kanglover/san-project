/**
 * @file 服务
 * @author 邵康
 */

import studentData from './data';

export default {
    fetchStudents(params) {
        let data = studentData.list;
        let start = (params.current - 1) * params.pageSize;
        let end = (start + params.pageSize) < data.length ? params.pageSize : data.length;
        let studentsMap = {
            students: [],
            current: params.current,
            total: data.length
        };
        for (let i = start; i < end; i++) {
            studentsMap.students.push(data[i]);
        }
        return new Promise(function (resolve) {
            resolve(studentsMap);
        });
    },
    findStudent(key) {
        let data = studentData.list;
        let student = {};
        for (let i = 0, length = data.length; i < length; i++) {
            if (data[i].key === key) {
                student = data[i];
                break;
            }
        }
        return new Promise(function (resolve) {
            resolve(student);
        });
    }
};



