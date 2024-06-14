
class UserModel {
  db: FirebaseFirestore.Firestore
  constructor(db: FirebaseFirestore.Firestore) {
    this.db = db
  }

  async registration(name: string, surname: string, password: string) {
    try {
      const newUser = await this.db.collection('wed-app').doc(password).set({ name, surname, songs: [], food: []})

      return newUser
    } catch (error) {
      throw new Error('Ошибка создания пользователя')
    }
  }

  async findUser(name: string, password: string) {
    try {
      const a = await this.db.collection('wed-app').doc(String(password)).get()

      if (a.data()?.name === name) throw new Error('Пользователь уже существует')
  
      return true
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}

export {UserModel}