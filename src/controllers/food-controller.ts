import { NextFunction, Request, Response } from "express"
import { getFirestore } from 'firebase-admin/firestore';
import { FoodService } from '../service/food-service'

class FoodController {

  async getFood(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.query.name) throw new Error('Ошибка пользователя')
        const food = new FoodService(getFirestore())

        const userFood = await food.getFood(req.query.name as string)

        if (!userFood?.length) {
          res.status(205)
          return
        }
  
        res.status(200)
        res.send(JSON.stringify(userFood))
    
    
    } catch (error) {
      console.log(2, error)
      res.status(400)
      res.send(JSON.stringify({error: 'Ошибка получения меню'}))      
    }
  }

  async setFood(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.query.name) throw new Error('Ошибка пользователя')
        const food = new FoodService(getFirestore())

        await food.setFood(req.query.name as string, req.body)
        res.status(200)
        res.send(JSON.stringify({food: 'Food created'}))
    } catch (error) {
      res.status(400)
      res.send(JSON.stringify({error: 'Ошибка обновления меню'}))  
    }
  }
}

export { FoodController }