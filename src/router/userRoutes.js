export default [
    {
        path: '/users/view/:id',
        name: 'UserView',
        component: () => import('../components/users/UserView.vue')
    },
    {
        path: '/users/edit/:id',
        name: 'UserEdit',
        component: () => import('../components/users/UserForm.vue')
    }
]