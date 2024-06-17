import { NextFunction, Request, Response } from "express"

class FoodService {
  db: FirebaseFirestore.Firestore;

  constructor(db: FirebaseFirestore.Firestore) {
    this.db = db
  }

  async findUser(pass: string) {
    try {
      const user = await this.db.collection('wed-app').doc(pass).get()

      if (!user.data()) throw new Error('Нет пользователя с таким именем')

      return user.data() as { food: Record<string, any>}
    } catch (error) {
      console.log(error)
      throw new Error('Ошибка получения пользователя')
    }
  }

  async getFood(pass: string) {
    try {
      const user = await this.findUser(pass)

      return user.food
    } catch (error) {
      throw error 
    }
  }

  async setFood(pass: string, food: Record<string, any>) {
    try {
      const user = await this.findUser(pass)
      console.log(food)
      await this.db.collection('wed-app').doc(pass).update({ food })
      
    } catch (error) {
      throw error
    }
  }
}

export { FoodService }