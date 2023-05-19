import {createUser} from './services/create-user'
import {SuccessUserSave} from './domain/symbols'

export async function handler(event, context, callback) {
	console.log('event', event)
	console.log('context', context)
	console.log('callback', callback)
	const result = await createUser(event)

	const success = result.isSuccess()
	const data: SuccessUserSave | null = result.getOrNull()
	const error: Error | null = result.errorOrNull()

	const response = {
		statusCode: 200,
		success,
		data,
		error,
	}
	callback(null, response)
}
