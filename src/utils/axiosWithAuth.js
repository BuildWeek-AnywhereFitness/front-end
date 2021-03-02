import axios from 'axios';

const axiosWithAuth = () => {
	const token = localStorage.getItem('token')
	
	return axios.create({
		headers: {
			authorization: token,
		},
		baseURL: 'https://anytime-fitness.herokuapp.com/api/auth'
	});
};

export default axiosWithAuth;