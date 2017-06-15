import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from "../models/state.model";
export function isFormFilled(obj) {
    let tmpStatus = true;
    if (obj instanceof Object) {
        for (let attr in obj) {
            tmpStatus = objStatus(obj[attr]);
            if (!tmpStatus) return false;
        }
    }
    return true;
}

export function objStatus(obj) {
    // Handle the 3 simple types, and null or undefined
    if (obj === undefined) {
        return false;
    }

    if (obj.toString() === "NaN") return false;

    if (null == obj || "object" != typeof obj) {
        if (typeof obj == "string") {
            if (obj.length == 0) return false;
        }
        return true;
    }

    if (obj instanceof String) {
        return (obj.length > 0);
    }

    if (obj instanceof Number) {
        return true;
    }

    // Handle Array
    if (obj instanceof Array) {
        return (obj.length > 0);
    }

    // Handle Object
    if (obj instanceof Object) {
        return (isEmptyObject(obj) == false);
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
}

export function removeDuplicates(originalArray, prop) {
    var newArray = [];
    var lookupObject  = {};

    for(var i in originalArray) {
    lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for(i in lookupObject) {
        newArray.push(lookupObject[i]);
    }
    return newArray;
 }

export function isEmptyObject(obj) {
    return (Object.keys(obj).length === 0);
}

export function captureState(state$:Store<AppState>): AppState {
    let state:AppState;
    let subs = state$.select(state => state).subscribe((x) => state = x);
    subs.unsubscribe();
    return state;
}

export function appendState(state: any, data: any): any{
    let tmp = state.slice();
    tmp.push(data);
    return tmp;
}

