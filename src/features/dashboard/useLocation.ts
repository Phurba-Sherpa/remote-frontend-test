import { useQuery } from '@tanstack/react-query'
import { fetchLocations } from '@/services/default-services'

const KEY = 'LOCATIONS'

export type Icoordinate = [number, number]

type ILocation = {
    locations: Icoordinate[]
}

export const useLocation = () => {
  const { data, status } = useQuery<ILocation, Error>({
    queryKey: [KEY],
    queryFn: fetchLocations,
    throwOnError: false,
    })
  return { data, status}
}
