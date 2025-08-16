import { lazy } from 'react'

const routers = [
    {
        path: '/',
        component: lazy(() => import('@components/HomePage/HomePage'))
    },
    {
        path: '/blogs',
        component: lazy(() => import('@components/Blogs/Blogs'))
    }
]

export default routers