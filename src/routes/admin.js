const Admin = () => import('@/components/admin/Admin')
const Barbershop = () => import('@/pages/admin/Barbershop')
const Barber = () => import('@/pages/admin/Barber')
const Help = () => import('@/pages/admin/Help')
const Plans = () => import('@/pages/admin/Plans')
const Profile = () => import('@/pages/admin/Profile')
const Service = () => import('@/pages/admin/Service')
const Approval = () => import('@/pages/admin/Approval')
const Dashboard = () => import('@/pages/admin/Dashboard')

const admin = [
  {
    path: '/admin',
    component: Admin,
    children: [
      {
        path: '',
        name: 'admin',
        redirect: { name: 'admin-dashboard' }
      },
      {
        path: 'dashboard',
        component: Dashboard,
        name: 'admin-dashboard',
        meta: {
          requiresAuth: true,
          isAdmin: true,
          requiresAdminProfile: true,
          pageName: 'Dashboard',
          alias: 'dashboard',
          css: 'pa-0'
        }
      },
      {
        path: 'minha-barbearia',
        component: Barbershop,
        name: 'admin-barbershop',
        meta: {
          requiresAuth: true,
          requiresAdmin: true,
          isAdmin: true,
          pageName: 'Minha Barbearia',
          alias: 'barbershop',
          css: 'pa-0 mb-8'
        }
      },
      {
        path: 'aguardando-aprovacao',
        component: Approval,
        name: 'admin-approval',
        meta: {
          requiresAuth: true,
          isAdmin: true,
          pageName: 'Aguardando aprovação',
          alias: 'approval',
          breadcrumb: [
            { text: "Dashboard", disabled: false, href: "/admin" },
            { text: "Aguardando aprovação", disabled: true }
          ]
        }
      },
      {
        path: 'barbeiros',
        component: Barber,
        name: 'admin-barber',
        meta: {
          requiresAuth: true,
          requiresAdmin: true,
          isAdmin: true,
          pageName: 'Barbeiros',
          alias: 'barber',
          breadcrumb: [
            { text: "Dashboard", disabled: false, href: "/admin" },
            { text: "Barbeiros", disabled: true, href: "/admin/barber" }
          ]
        }
      },
      {
        path: 'meus-servicos',
        component: Service,
        name: 'admin-service',
        meta: {
          requiresAuth: true,
          requiresAdmin: true,
          isAdmin: true,
          pageName: 'Preços e Serviços',
          alias: 'service',
          css: 'services',
          breadcrumb: [
            { text: "Dashboard", disabled: false, href: "/admin" },
            { text: "Meus Serviços", disabled: true, href: "/admin/meus-servicos" }
          ]
        }
      },
      {
        path: 'planos',
        component: Plans,
        name: 'admin-plans',
        meta: {
          requiresAuth: true,
          requiresAdmin: true,
          isAdmin: true,
          pageName: 'Planos',
          alias: 'plans',
          breadcrumb: [
            { text: "Dashboard", disabled: false, href: "/admin/dashboard" },
            { text: "Planos", disabled: true }
          ]
        }
      },
      {
        path: 'ajuda',
        component: Help,
        name: 'admin-help',
        meta: {
          requiresAuth: true,
          isAdmin: true,
          pageName: 'Ajuda',
          alias: 'help',
          breadcrumb: [
            { text: "Dashboard", disabled: false, href: "/admin" },
            { text: "Ajuda", disabled: true, href: "/admin/ajuda" }
          ]
        }
      },
      {
        path: 'meu-perfil',
        component: Profile,
        name: 'admin-profile',
        meta: {
          requiresAuth: true,
          isAdmin: true,
          pageName: 'Meu Perfil',
          alias: 'profile',
          css: 'pa-0',
          breadcrumb: [
            { text: "Dashboard", disabled: false, href: "/admin/dashboard" },
            { text: "Planos", disabled: true }
          ]
        }
      }
    ]
  }
]

export default admin