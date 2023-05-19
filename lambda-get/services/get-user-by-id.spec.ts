import {getUserById} from './get-user-by-id'
import {User} from '../domain/symbols'
import {GetItemCommandOutput} from '@aws-sdk/client-dynamodb'
import {dbClient} from '../cold-init'
import {UserNotFoundError} from '../domain/errors'

describe('GetUserById', () => {

	it('should success user shape"', async () => {
		const user: User = {
			id: '1231',
			nombre: 'watsson',
			correo: 'watsson@gmail.com'
		}

		const command: GetItemCommandOutput = {
			$metadata: {requestId: ''},
			Item: {
				id: {S: user.id},
				nombre: {S: user.nombre},
				correo: {S: user.correo},
			}
		}
		jest.spyOn(dbClient, 'send').mockResolvedValueOnce(command as never)

		const result = await getUserById(user.id)
		expect(result.getOrNull()).not.toBeNull()
	})

	it('should fail with UserNotFoundError"', async () => {
		const user: User = {
			id: '1231',
			nombre: 'watsson',
			correo: 'watsson@gmail.com'
		}

		const command: GetItemCommandOutput = {
			$metadata: {requestId: ''},
			Item: undefined
		}
		jest.spyOn(dbClient, 'send').mockResolvedValueOnce(command as never)

		const result = await getUserById(user.id)
		expect(result.errorOrNull()).toBeInstanceOf(UserNotFoundError)
	})
})
