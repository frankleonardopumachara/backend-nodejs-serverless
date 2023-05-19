import {User} from '../domain/symbols'
import {GetItemCommand} from '@aws-sdk/client-dynamodb'
import {dbClient} from '../cold-init'
import {Result} from 'typescript-result'
import {UserNotFoundError} from '../domain/errors'

export const getUserById = async (
	userId: string
): Promise<Result<Error | UserNotFoundError, User>> => {
	const command = new GetItemCommand({
		TableName: 'users',
		Key: {
			id: {S: userId},
		}
	})

	try {
		const result = await dbClient.send(command)

		if (!result.Item) throw new UserNotFoundError()

		return Result.ok({
			id: result.Item.id.S!,
			nombre: result.Item.nombre.S!,
			correo: result.Item.correo.S!,
		})
	} catch (e) {
		return Result.error(e)
	}
}
