import List from './List';
import Form from './Form';

export default [
    {
        rule: '/student',
        Component: List
    },
    {
        rule: '/student/form/:id',
        Component: Form
    }
];
