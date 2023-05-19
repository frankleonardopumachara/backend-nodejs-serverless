import {getPlanetById} from './services/get-planet-by-id'
import {getUserById} from './services/get-user-by-id'

exports.handler = async function (event, context) {
	if (event.path === 'users:userId') {
		const result = await getUserById(event.userId)
		return
	}

	if (event.path === 'swapi') {
		const planetId: number = +event.param
		const result = await getPlanetById(planetId)
	}
}
