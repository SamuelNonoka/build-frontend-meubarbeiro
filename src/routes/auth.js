const Base = () => import('@/pages/auth/Base')
const LoginUser = () => import('@/pages/auth/user/Login')
const RegisterUser = () => import('@/pages/auth/user/Register')
const BarberChangePassword = () => import('@/pages/auth/barber/ChangePassword')
const UserChangePassword = () => import('@/pages/auth/user/ChangePassword')
const	UserRecoveryPassword = () => import('@/pages/auth/user/RecoveryPassword')
const	BarberRecoveryPassword = () => import('@/pages/auth/barber/RecoveryPassword')
const BarberConfirmRegister = () => import('@/pages/auth/barber/ConfirmRegister')
const UserConfirmRegister = () => import('@/pages/auth/user/ConfirmRegister')
const LoginBarber = () => import('@/pages/auth/barber/Login')
const RegisterBarber = () => import('@/pages/auth/barber/Register')

const auth = [
  {
    path: '/autenticacao/',
    component: Base,
    meta: {
      isAdmin: false
    },
    children: [
      {
        path: '',
        redirect: '/autenticacao/login'
      },
      {
        path: 'alterar-senha/:token',
        name: 'user-change-password',
        component: UserChangePassword,
        meta: {
          isAdmin: false
        }
      },
      {
        path: 'login',
        name: 'login',
        component: LoginUser,
        meta: {
          isAdmin: false
        }
      },
      {
        path: 'cadastro',
        name: 'register',
        component: RegisterUser,
        meta: {
          isAdmin: false
        }
      },
      {
        path: 'confirmar-cadastro/:token',
        name: 'user-confirm-register',
        component: UserConfirmRegister,
        meta: {
          isAdmin: false
        }
      },
      {
        path: 'recuperar-senha',
        name: 'recovery-password',
        component: UserRecoveryPassword,
        meta: {
          isAdmin: false
        }
      },
      {
        path: 'barbeiro/confirmar-cadastro/:token',
        name: 'barber-confirm-register',
        component: BarberConfirmRegister,
        meta: {
          isAdmin: false
        }
      },
      {
        path: 'barbeiro/recuperar-senha',
        name: 'barber-recovery-password',
        component: BarberRecoveryPassword,
        meta: {
          isAdmin: false
        }
      },
      {
        path: 'barbeiro/alterar-senha/:token',
        name: 'barber-change-password',
        component: BarberChangePassword,
        meta: {
          isAdmin: false
        }
      },
      { 
        path: 'barbeiro/login',
        name: 'login-barber',
        component: LoginBarber,
        meta: {
          isAdmin: true
        }
      },
      { 
        path: 'barbeiro/cadastro',
        name: 'register-barber',
        component: RegisterBarber,
        meta: {
          isAdmin: true
        }
      }
    ]
  }
]

export default auth