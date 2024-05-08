import { IpDetails } from './lib/getIpDetails';

(async () => {
	const data = (await IpDetails()).getContinent();
	console.log(data);
})();
