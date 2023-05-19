import {User} from '../domain/symbols'
import {GetItemCommand} from '@aws-sdk/client-dynamodb'
import {dbClient} from '../cold-init'

export const getUserById = async (userId: string): Promise<User | null> => {
	const command = new GetItemCommand({
		TableName: 'users',
		Key: {
			id: {S: userId},
		}
	})

	try {
		const result = await dbClient.send(command)

		if (!result.Item) return null
		return {
			id: result.Item.id.S!,
			nombre: result.Item.nombre.S!,
			correo: result.Item.correo.S!,
		}
	} catch (e) {
		console.log(e)
		return null
	}
}
