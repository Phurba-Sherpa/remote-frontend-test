import axios from 'axios'

// ** Config
import {CONFIG} from '@/angelswing.frontend.config.ts'

// ** No auth client
export const publicAPI = axios.create({
    baseURL: CONFIG.__BASE_URL__
})

// ** auth cllient at later point