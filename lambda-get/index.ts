import {getUserById} from './services/get-user-by-id'
import {getPlanetById} from './services/get-planet-by-id'
import {PlanetNotFoundError, UserNotFoundError} from './domain/errors'
import {Response} from './utils'

export const handleGetUserById = async (userId: string) => {
	const result = await getUserById(userId)

	if (result.isSuccess()) {

		return new Response()
		.status(200)
		.body({
			success: true,
			data: result.value,
			error: null
		})
		.get()

	} else {
		let statusCode = 500
		if (result.error instanceof UserNotFoundError) {
			statusCode = 404
		}

		return new Response()
		.status(statusCode)
		.body({
			success: false,
			data: null,
			error: result.error
		})
		.get()
	}
}

export const handleGetPlanetById = async (planetId: number) => {
	const result = await getPlanetById(planetId)
	if (result.isSuccess()) {

		return new Response()
		.status(200)
		.body({
			success: true,
			data: result.value,
			error: null
		})
		.get()

	} else {
		let statusCode = 500
		if (result.error instanceof PlanetNotFoundError) {
			statusCode = 404
		}

		return new Response()
		.status(statusCode)
		.body({
			success: true,
			data: null,
			error: result.error,
		})
		.get()
	}
}
export async function handler(event, context, callback) {
	const params: null | Record<string, any> = event.pathParameters
	if (params && params.userId) {
		return handleGetUserById(params.userId)
	} else if (params && params.planetId) {
		return handleGetPlanetById(params.planetId)
	} else {
		return new Response()
		.status(404)
		.body({
			success: false,
			data: null,
			error: null
		})
		.get()
	}
}
