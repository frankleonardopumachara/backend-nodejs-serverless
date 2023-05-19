export interface User {
	id: string
	nombre: string
	correo: string
}

export interface Page<T> {
	data: T[]
	count: number
}

export interface PlanetResponseEn {
	name: string
	rotation_period: string
	orbital_period: string
	diameter: string
	climate: string
	gravity: string
	terrain: string
	surface_water: string
	population: string
	residents: string[]
	films: string[]
	created: string
	edited: string
	url: string
}

export interface PlanetResponseEs {
	nombre: string
	periodoDeRotacion: string
	periodoOrbital: string
	diametro: string
	clima: string
	gravedad: string
	terreno: string
	superficioDelAgua: string
	poblacion: string
	residentes: string[]
	peliculas: string[]
	creadoEn: string
	editadoEn: string
	url: string
}

export class PlanetLanguageAdapter {
	static toSpanish(param: PlanetResponseEn): PlanetResponseEs {
		return {
			clima: param.climate,
			creadoEn: param.created,
			diametro: param.diameter,
			editadoEn: param.edited,
			gravedad: param.gravity,
			nombre: param.name,
			peliculas: param.films,
			periodoDeRotacion: param.rotation_period,
			periodoOrbital: param.orbital_period,
			poblacion: param.population,
			residentes: param.residents,
			superficioDelAgua: param.surface_water,
			terreno: param.terrain,
			url: param.url,
		}
	}
}
