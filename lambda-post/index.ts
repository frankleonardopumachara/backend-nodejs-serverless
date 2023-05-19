import {getUserById} from '../lambda-get/services/get-user-by-id'

exports.handler = async function (event, context) {
	if (event.path === 'create user') {
		const result = await getUserById(event.userId)
		return
	}
}
