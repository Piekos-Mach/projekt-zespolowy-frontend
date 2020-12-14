export default [
    {
        path: '/offers',
        name: 'offers',
        component: () => import('../components/offers/OfferList.vue')
    },
    {
        path: '/offer/view/:id',
        name: 'offerview',
        component: () => import('../components/offers/OfferView.vue'),
    },
]