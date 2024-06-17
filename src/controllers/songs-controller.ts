import { NextFunction, Request, Response } from "express"
import { getFirestore } from 'firebase-admin/firestore';
import { SongsService } from '../service/songs-service'

class SongsController {

  async getSongs(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.query.name) throw new Error('Ошибка пользователя')

      const songsService = new SongsService(getFirestore())
      const songs = await songsService.getSongs(req.query.name as string)

      res.status(200)
      console.log(songs)
      res.send(JSON.stringify(songs))

    } catch (error) {
      console.log(error)
      res.status(400)
      res.send(JSON.stringify({userError: error || 'default' }))
    }
  }

  async setSongs(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.query.name) throw new Error('Ошибка пользователя')

      const songsService = new SongsService(getFirestore())

      const songslength = await songsService.setSongs(req.query.name as string, req.body)

      
      res.status(200)
      console.log(songslength)
      res.send(JSON.stringify({added: songslength }))
    } catch (error) {
      console.log(error)
      res.status(400)
      res.send(JSON.stringify({userError: error || 'не добавлены' }))
    }
  }

  async deleteSong(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.query.name) throw new Error('Ошибка пользователя')

        const songsService = new SongsService(getFirestore())
        console.log(123, req.body)
        await songsService.deleteSong(req.query.name as string, req.body.index)
        res.status(200)
        res.send(JSON.stringify({created: 'success' }))
    } catch (error) {
      
      console.log(error)
      res.status(400)
      res.send(JSON.stringify({userError: error || 'ошибка удаления' }))
    }
  }
}

export { SongsController }