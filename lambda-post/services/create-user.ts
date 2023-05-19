import {CreateUser, SuccessUserSave} from '../domain/symbols'
import {v4 as uuid} from 'uuid'
import {PutItemCommand} from '@aws-sdk/client-dynamodb'
import {dbClient} from '../cold-init'
import {Result} from 'typescript-result'

export const createUser = async ({nombre, correo}: CreateUser): Promise<Result<Error, SuccessUserSave>> => {
	const newItemCommand = {
		TableName: 'users',
		Item: {
			id: {S: uuid()},
			nombre: {S: nombre},
			correo: {S: correo},
		},
	}

	try {
		const data = await dbClient.send(new PutItemCommand(newItemCommand))
		return Result.ok({
			requestId: data.$metadata.requestId!
		})
	} catch (e) {
		console.log(e)
		return Result.error(e)
	}
}
