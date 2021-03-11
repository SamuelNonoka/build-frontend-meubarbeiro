const Barbershop = () => import('@/pages/site/Barbershop')
const Base = () => import('@/pages/site/Base')
const HomeSite = () => import('@/pages/site/Home')
const Offline = () => import('@/pages/site/Offline')
const Schedule = () => import('@/pages/site/Schedule')
const ScheduleDetail = () => import('@/pages/site/ScheduleDetail')

const site = [
  {
    path: '',
    component: Base,
    children: [
      {
        path: '/',
        component: HomeSite,
        name: 'home',
        meta: { isAdmin: false }
      },
      {
        path: 'barbearia/:id/:url',
        name: 'site-barbershop',
        component: Barbershop,
        meta: {
          isAdmin: false,
          fluid: true,
          noPadding: true,
          backButton: true,
          backButtonRouteName: 'home'
        }
      },
      { 
        path: 'meus-agendamentos',
        component: Schedule,
        name: 'site-schedule',
        meta: {
          requiresAuth: true,
          isAdmin: false,
          menuButton: true,
          alias: 'schedule',
          pageTitle: 'Meus agendamentos'  
        }
      },
      {
        path: 'agendamento/:id',
        component: ScheduleDetail,
        name: 'site-schedule-detail',
        meta: {
          requiresAuth: true,
          isAdmin: false,
          backButton: true,
          alias: 'schedule',
          pageTitle: 'Agendamento'
        }
      },
      {
        path: 'offline',
        name: 'offline',
        component: Offline,
        meta: { isAdmin: false }
      }
    ]
  }
]

export default site