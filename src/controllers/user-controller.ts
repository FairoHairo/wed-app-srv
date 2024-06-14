import { getFirestore } from 'firebase-admin/firestore';
import { UserService } from './../service/user-service';
import { NextFunction, Request, Response } from "express"

class UserController {

  async registration(req: Request, res: Response, next: NextFunction) {
    try {
      const userService = new UserService(getFirestore())

      const user = await userService.registration(req.body.name, req.body.surname, req.body.password)
      console.log(user)
      res.status(200)
      res.send(JSON.stringify({user: 'User created'}))
    } catch (error) {
      console.log('ERROR ON REGISTRATION', error)
      // res.status(400)
      res.send(JSON.stringify({error: 'Такой пользователь уже существует' }))
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {
      console.log('ERROR ON Login', error)
      res.status(401)
      res.send(JSON.stringify({error: 'Такой пользователь уже существует' }))
    }
  }
 
  async logout(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {
      console.log('ERROR ON Logout', error)
      res.status(401)
    }
  }
}

export { UserController }
