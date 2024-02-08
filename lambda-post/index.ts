import {createUser} from './services/create-user'
import {Response} from './utils'
import {Callback, Context} from 'aws-lambda'
export async function handler(event: any, context: Context, callback: Callback) {
	const newUser = JSON.parse(event.body)
	const result = await createUser(newUser)

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
		return new Response()
		.status(500)
		.body({
			success: false,
			data: null,
			error: result.error
		})
		.get()
	}
}
