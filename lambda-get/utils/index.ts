export interface BodyResponse {
	success: boolean
	data: Record<string, any> | null
	error: Error | typeof Error | null
}

export class Response {
	private _status: number = 500
	private _body: string = ''
	private _headers: Record<string, any> = {
		'Content-Type': 'application/json'
	}

	constructor() {
	}

	public status(value: number): Response {
		this._status = value
		return this
	}

	public body(value: BodyResponse): Response {
		this._body = JSON.stringify(value)
		return this
	}

	public headers(value: Record<string, any>): Response {
		this._headers = {...this._headers, ...value}
		return this
	}

	public get() {
		return {
			statusCode: this._status,
			body: this._body,
			headers: this._headers
		}
	}
}
