import {Axios} from 'axios'
import process from 'process'
import {DynamoDBClient} from '@aws-sdk/client-dynamodb'

export const axios = new Axios({
	baseURL: process.env.SWAPI_URL!
})

export const dbClient = new DynamoDBClient({
	region: process.env.LOCATION!
})

