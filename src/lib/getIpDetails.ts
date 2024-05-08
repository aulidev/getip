import axios from 'axios';
import type { IpDetailsData, IpDetailsFunction } from '~/@types/types';

export async function IpDetails(ip?: string): Promise<IpDetailsFunction> {
	let url = 'http://ip-api.com/json?fields=66842623&lang=en';
	if (ip) {
		url = `http://ip-api.com/json/${ip}?fields=66842623&lang=en`;
	}
	const { data }: { data: IpDetailsData } = await axios.get(url);

	const getStatus = () => data.status;
	const getContinent = () => data.continent;
	const getContinentCode = () => data.continentCode;
	const getCountry = () => data.country;
	const getCountryCode = () => data.countryCode;
	const getRegion = () => data.region;
	const getRegionName = () => data.regionName;
	const getCity = () => data.city;
	const getDistrict = () => data.district;
	const getZip = () => data.zip;
	const getLat = () => data.lat;
	const getLon = () => data.lon;
	const getTimezone = () => data.timezone;
	const getOffset = () => data.offset;
	const getCurrency = () => data.currency;
	const getIsp = () => data.isp;
	const getOrg = () => data.org;
	const getAs = () => data.as;
	const getAsname = () => data.asname;
	const getMobile = () => data.mobile;
	const getProxy = () => data.proxy;
	const getHosting = () => data.hosting;
	const getQuery = () => data.query;

	return {
		getStatus,
		getContinent,
		getContinentCode,
		getCountry,
		getCountryCode,
		getRegion,
		getRegionName,
		getCity,
		getDistrict,
		getZip,
		getLat,
		getLon,
		getTimezone,
		getOffset,
		getCurrency,
		getIsp,
		getOrg,
		getAs,
		getAsname,
		getMobile,
		getProxy,
		getHosting,
		getQuery,
	};
}
