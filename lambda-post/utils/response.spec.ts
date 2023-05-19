import {Response} from './index'

describe('Utils', () => {

	it('should have api gateway structure response"', () => {
		const response = new Response()
		.status(200)
		.body({
			success: true,
			data: {
				name: 'watsson'
			},
			error: null
		})
		.get()

		expect(response).toHaveProperty('statusCode', 200)
		expect(response).toHaveProperty('body')
		expect(response).toHaveProperty('headers')
	})
})
