'use strict'

import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import apiLimiter from '../src/middlewares/validar-cant-peticiones.js'
import authRoutes from '../src/auth/auth.routes.js'
import channelRoutes from '../src/channel/channel.routes.js'
import channelSettingsRoutes from '../src/settingsChannel/settings.routes.js'
import { dbConnection } from './mongo.js'

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.authPath = '/twitch/v1/auth'
        this.channelPath = '/twitch/v1/channels'
        this.settingChannelPath = '/twitch/v1/settings'

        this.middlewares()
        this.conectarDB()
        this.routes()
    }

    async conectarDB(){
        await dbConnection()
    }

    middlewares(){
        this.app.use(express.urlencoded({extended: false}))
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(helmet())
        this.app.use(morgan('dev'))
        this.app.use(apiLimiter)
    }

    routes(){
        this.app.use(this.authPath , authRoutes);
        this.app.use(this.channelPath, channelRoutes)
        this.app.use(this.settingChannelPath, channelSettingsRoutes)
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Server running on port ', this.port)
        })
    }
}

export default Server