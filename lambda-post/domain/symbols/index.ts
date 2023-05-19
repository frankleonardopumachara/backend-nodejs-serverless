export type CreateUser = {
	nombre: string
	correo: string
}

export interface User {
	id: string
	nombre: string
	correo: string
}


export interface SuccessUserSave {
	requestId: string
}
