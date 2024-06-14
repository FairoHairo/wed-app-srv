import expr from 'express'
import { UserController } from './controllers';

const router = expr.Router()
const UserCont = new UserController()

router.get('/songs')
router.post('/songs')

router.post('/login', UserCont.registration)
// router.post('/login', UserCont.login)
router.post('/logout', UserCont.logout)

router.get('/food')
router.post('/food')

export { router }