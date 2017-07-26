import { IpApi, Location } from './../models/user.model';
import { Injectable } from '@angular/core';


@Injectable()
export class UserActions {
	static SET_IP_API = '[User] Set IP API';
	setIpApi(ipApi: IpApi) {
		return {
			type: UserActions.SET_IP_API,
			payload: ipApi
		}
	}

	static SET_LOCATION = '[User] Set Location';
	setLocation(location: Location) {
		return {
			type: UserActions.SET_LOCATION,
			payload: location
		}
	}
}
