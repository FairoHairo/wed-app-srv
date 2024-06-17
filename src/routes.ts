import expr from 'express'
import { FoodController, SongsController, UserController } from './controllers';

const router = expr.Router()
const UserCont = new UserController()
const SongsCont = new SongsController()
const FoodCont = new FoodController()

router.get('/songs', SongsCont.getSongs)
router.post('/songs', SongsCont.setSongs)
router.delete('/songs', SongsCont.deleteSong)

router.post('/login', UserCont.registration)
router.post('/logout', UserCont.logout)

router.get('/food', FoodCont.getFood)
router.post('/food', FoodCont.setFood)

export { router }