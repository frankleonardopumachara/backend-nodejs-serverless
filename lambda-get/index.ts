import {getPlanetById} from './services/get-planet-by-id'
import {getUserById} from './services/get-user-by-id'

export async function handler(event, context, callback) {
	const result = await getPlanetById(planetId)
	const result = await getUserById(event.userId)
}
