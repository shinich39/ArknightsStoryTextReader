import { createApp } from 'vue'
import naive from 'naive-ui'
import { createRouter,createWebHashHistory } from 'vue-router'

import ASTR from './ASTRv2/ASTR.vue'
import server from './ASTRv2/server.vue'
import menupage from './ASTRv2/menupage.vue'
import eventpage from './ASTRv2/eventpage.vue'
import contentpage from './ASTRv2/contentpage.vue'
import maintheme from './ASTRv2/menupage/maintheme.vue'

const routes = [
    { 
        path: '/:server', 
        component: server,
        children: [
            { path: 'menu', component: menupage, children:[
                {path:'maintheme',component:maintheme}
            ] },
            { path: 'event/:event', component: eventpage },
            { path: 'content', component: contentpage },
            
        ]
    },
    {path:'/',redirect:'/zh_CN/menu'}
]

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
  })

const app = createApp(ASTR);
app.use(naive);
app.use(router);
app.mount('#ASTR');

