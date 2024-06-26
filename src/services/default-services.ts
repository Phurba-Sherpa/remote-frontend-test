import {publicAPI} from './axios'

// ** Idea is to store all the no-auth api in this file 
// ** For auth api, we can create private-services.ts file
export const fetchLocations = async () => {
  const url = '/locations'
    const response = await publicAPI.get(url)
    return response.data
  }
  