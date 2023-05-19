import {axios} from '../cold-init'

export const getAllPlanets = async () => {
	const result = await axios.get(`/planets`)
	return result.data
}
