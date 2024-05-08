export interface IpDetailsFunction {
	getStatus: () => string;
	getContinent: () => string;
	getContinentCode: () => string;
	getCountry: () => string;
	getCountryCode: () => string;
	getRegion: () => string;
	getRegionName: () => string;
	getCity: () => string;
	getDistrict: () => string;
	getZip: () => string;
	getLat: () => number;
	getLon: () => number;
	getTimezone: () => string;
	getOffset: () => number;
	getCurrency: () => string;
	getIsp: () => string;
	getOrg: () => string;
	getAs: () => string;
	getAsname: () => string;
	getMobile: () => boolean;
	getProxy: () => boolean;
	getHosting: () => boolean;
	getQuery: () => string;
}

export interface IpDetailsData {
	status: string;
	continent: string;
	continentCode: string;
	country: string;
	countryCode: string;
	region: string;
	regionName: string;
	city: string;
	district: string;
	zip: string;
	lat: number;
	lon: number;
	timezone: string;
	offset: number;
	currency: string;
	isp: string;
	org: string;
	as: string;
	asname: string;
	mobile: boolean;
	proxy: boolean;
	hosting: boolean;
	query: string;
}
