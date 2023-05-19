import {PlanetLanguageAdapter, PlanetResponseEn, PlanetResponseEs} from '../domain/symbols'
import {axios} from '../cold-init'

export const getPlanetById = async (planetId: number): Promise<PlanetResponseEs> => {
	const result = await axios.get<PlanetResponseEn>(`/planets/${planetId}`)
	return PlanetLanguageAdapter.toSpanish(result.data)
}
