import {PlanetLanguageAdapter, PlanetResponseEs} from '../domain/symbols'
import {Result} from 'typescript-result'
import {PlanetNotFoundError} from '../domain/errors'

export const getPlanetById = async (
	planetId: number
): Promise<Result<Error | PlanetNotFoundError, PlanetResponseEs>> => {
	try {
		const response = await fetch(`${process.env.SWAPI_URL}/planets/${planetId}`)
		if (response.status === 404) throw new PlanetNotFoundError()

		const data = await response.json()
		const res = PlanetLanguageAdapter.toSpanish(data)
		return Result.ok(res)
	} catch (e) {
		console.log(e.message)
		return Result.error(e)
	}
}
