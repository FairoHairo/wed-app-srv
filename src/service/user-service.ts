import { UserModel } from '../models'

class UserService {
  db: FirebaseFirestore.Firestore

  constructor(db: FirebaseFirestore.Firestore) {
    this.db = db
  }

  async registration(name: string, surname: string, password: string) {
    try {
      const userModel = new UserModel(this.db)
      await userModel.findUser(name, password)
      console.log("NOT")
      const register = await userModel.registration(name, surname, password)
    
      // return register
    } catch (error) {
      throw error
    }
  }

  async login(name: string, password: string) {
  
  }

  async logout() {
  
  }
}

export { UserService }