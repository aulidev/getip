import axios from 'axios';
export const getIp = async () => {
	const { data } = await axios.get('https://api.ipify.org?format=json');
	console.log(data.ip);
};
