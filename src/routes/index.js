import { createRouter, createWebHistory } from 'vue-router/dist/vue-router'
import ItemView from '../views/ItemView'
import UserView from '../views/UserView'
import NewsView from "@/views/NewsView";
/*import createListView from '../views/CreateListView'*/
import AskView from "@/views/AskView";
import JobsView from "@/views/JobsView";
import store from "@/store/index"
import mitt from "mitt";

const emitter = mitt();

const routes = [
    {
        path: '/',
        redirect: '/news'
    },
    {
        path: '/news',
        name: 'news',
        /*component: createListView('NewsView'), webpackPrefetch: true*/
        /*component: NewsView,*/
        component: () => import(/* webpackChunkName: "news", webpackPrefetch: true */ NewsView),
        beforeEnter: (to, from, next) => {
            console.log(to, from, next)
            emitter.emit('start:spinner')
            store.dispatch('FETCH_All_LIST', to.name)
                .then(() => {
                    emitter.emit('end:spinner')
                    next();
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    },
    {
        path: '/ask',
        name: 'ask',
        component: AskView,
        /*component: createListView('AskView')*/
        beforeEnter: (to, from, next) => {
            console.log(to, from, next)
            emitter.emit('start:spinner')
            store.dispatch('FETCH_All_LIST', to.name)
                .then(() => {
                    emitter.emit('end:spinner')
                    next();
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    },
    {
        path: '/jobs',
        name: 'jobs',
        /*component: createListView('JobsView')*/
        component: JobsView,
        beforeEnter: (to, from, next) => {
            console.log(to, from, next)
            emitter.emit('start:spinner')
            store.dispatch('FETCH_All_LIST', to.name)
                .then(() => {
                    emitter.emit('end:spinner')
                    next();
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    },
    {
        path: '/item',
        component: ItemView
    },
    {
        path: '/user/:id',
        component: UserView
    },
    {
        path: '/item/:id',
        component: ItemView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router