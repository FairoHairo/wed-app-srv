import { getFirestore } from 'firebase-admin/firestore';
import { UserService } from './../service/user-service';
import { NextFunction, Request, Response } from "express"

class UserController {

  async registration(req: Request, res: Response, next: NextFunction) {
    try {
      const userService = new UserService(getFirestore())

      const user = await userService.registration(req.body.name, req.body.surname, req.body.password)
      res.status(200)
      res.header({
        'Content-type': 'application/json'
      })
      res.send(JSON.stringify({user: 'User created/exist'}))
    } catch (error: any) {
      console.log('ERROR ON REGISTRATION', error)
      res.header({
        'Content-type': 'application/json'
      })
      if (error.error === 'exist') {
        res.status(200)
        res.send(JSON.stringify({user: 'User created/exist'}))
        return 
      }
      
      res.status(400)
      res.send(JSON.stringify({error: 'Непредвиденная ошибка' }))
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
