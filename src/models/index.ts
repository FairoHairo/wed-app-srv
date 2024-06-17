
class UserModel {
  db: FirebaseFirestore.Firestore
  constructor(db: FirebaseFirestore.Firestore) {
    this.db = db
  }

  async registration(name: string, surname: string, password: string) {
    try {
      const newUser = await this.db.collection('wed-app').doc(`${String(password)}_${String(name)}`).set({ name, surname, songs: [], food: []})

      return newUser
    } catch (error) {
      throw new Error('Ошибка создания пользователя')
    }
  }

  async findUser(name: string, password: string) {
    try {
      const a = await this.db.collection('wed-app').doc(`${String(password)}_${String(name)}`).get()
      console.log(a.data())
      if (a.data()?.name) throw ({message: 'Пользователь уже существует', error: 'exist'})
  
      return true
    } catch (error: any) {
      throw error
    }
  }
}


export { UserModel }