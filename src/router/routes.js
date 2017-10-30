import Index from '@/components/Index'
import Login from '@/components/Auth/Login'

import QrReader from '@/components/Qr/QrReader'
import QrList from '@/components/Qr/QrList'
import QrWriter from '@/components/Qr/QrWriter'

import PalestraList from '@/components/Palestras/PalestraList'
import PalestraCreate from '@/components/Palestras/PalestraCreate'



const routes = [
    // Core
    { path: '/', name: 'Index', component: Index, meta: {requireAuth: true} },
    { path: '/login', name: 'Login', component: Login } ,
    // QRCrud
    { path: '/qrcode/reader', name: 'QrReader', component: QrReader },
    { path: '/qrcode/list', name: 'QrList', component: QrList, meta: {requireAuth: true} },
    { path: '/qrcode/writer/', name: 'QrWriter', component: QrWriter, meta: {requireAuth: true} },
    { path: '/qrcode/writer/:id', name: 'QrWriter', component: QrWriter, meta: {requireAuth: true} },
    // PalestraCrud
    {path: '/palestra/create' , name : 'PalestraCreate', component: PalestraCreate},
    {path: '/palestra/list' , name : 'PalestraCreate', component: PalestraList}
]

export default routes;