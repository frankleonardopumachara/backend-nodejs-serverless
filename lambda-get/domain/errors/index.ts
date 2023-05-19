export class UserNotFoundError extends Error {
	constructor() {
		super('El usuario no existe')
		this.name = 'UserNotFoundError'
	}
}

export class PlanetNotFoundError extends Error {
	constructor() {
		super('El planeta no existe')
		this.name = 'PlanetNotFoundError'
	}
}
