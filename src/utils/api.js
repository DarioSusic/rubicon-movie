import axios from 'axios';
import config from '../config';

axios.defaults.params = {};
axios.defaults.params['api_key'] = config.API_KEY;

export default {
	request: axios.create({
		baseURL: config.API_ROOT
	}),
	requestWOL: axios.create({
		baseURL: config.API_ROOT,
		params: {
			language: 'null',
			api_key: config.API_KEY
		}
	})
};