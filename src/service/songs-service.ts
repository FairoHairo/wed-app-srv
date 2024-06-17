

class SongsService {
  db: FirebaseFirestore.Firestore

  constructor(db: FirebaseFirestore.Firestore) {
    this.db = db
  }

  async getSongs(password: string) {
    try {
      const user = await this.findUser(password)

      return user.songs
    } catch(err) {
      throw err
    }
  }

  async setSongs(password: string, songs: any[]) {
    try {
      const user = await this.findUser(password)

      await this.db.collection('wed-app').doc(password).update({ songs: songs })

      return user?.songs?.length
    } catch(err) {
      throw err
    }
  }

  async deleteSong(password: string, index: number) {
    try {
      const user = await this.findUser(password)
      const songs = user.songs.filter((_, ind) => ind !== index)

      
      await this.db.collection('wed-app').doc(password).update({ songs: songs })
    } catch (error) {
      throw error
    }
  } 

  async findUser(pass: string) {
    try {
      const user = await this.db.collection('wed-app').doc(pass).get()

      if (!user.data()) throw new Error('Нет пользователя с таким именем')

      return user.data() as { songs: any[]}
    } catch (error) {
      console.log(error)
      throw new Error('Ошибка получения пользователя')
    }
  }
}

export { SongsService }