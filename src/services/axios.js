import axios from 'axios'


import {CONFIG} from '@/angelswing.frontend.config.ts'
console.log(CONFIG)
// ** Public client
export default axios.create({
    baseURL: CONFIG.__BASE_URL__
})


// ** Private client