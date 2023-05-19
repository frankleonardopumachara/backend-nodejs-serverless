import {CreateUser} from '../domain/symbols'
import {v4 as uuid} from 'uuid'
import {DynamoDB, PutItemCommand} from '@aws-sdk/client-dynamodb'
import {dbClient} from '../cold-init'

export const createUser = async ({nombre, correo}: CreateUser) => {
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
		console.log(data)
	} catch (e) {
		console.log(e)
	}
}
