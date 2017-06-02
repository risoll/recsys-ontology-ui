import { IpApi } from './../models/user.model';
import {Injectable} from '@angular/core';  
import {Action} from '@ngrx/store';


@Injectable()
export class UserActions {
    static SET_IP_API = '[User] Set IP API';
    setIpApi(ipApi: IpApi){
        return{
            type: UserActions.SET_IP_API,
            payload: ipApi
        }
    }
}