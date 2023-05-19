import {NextFunction, Request, Response} from 'express'

export const globalErrorHandler = (
	error: Error | any,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	let errorMessage = 'Algo salio mal!'
	let errorName = 'Error'

	if (error instanceof Error) {
		errorMessage = error.message
		errorName = error.name
	}

	res.status(500).json({
		success: false,
		data: null,
		error: {
			message: errorMessage,
			error: errorName,
		}
	})
}
