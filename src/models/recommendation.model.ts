import { Location } from './user.model';
import { Question, NodeValues } from './recommendation.model';
import {Place} from "./place.model";
export interface Question {
	name: string;
	image: string;
	value?: number;
	description?: string;
	root?: string;
	showDesc?: boolean;
}

export interface ColsQuestion {
	cols: Question[]
}

export interface Values {
	pref: number;
	conf: number;
}

export interface DistanceMatrix{
	text: string;
	value: number;
}

export interface NodeValues {
	name: string,
	distance?: DistanceMatrix,
	duration?: DistanceMatrix,
	activation?: number,
	pref: number,
	conf: number,
	image?: string,
	parents?: NodeValues[]
}

export interface DownPropagationResponse{
	data: NodeValues[],
	askedNodes: Question[]
}


export interface UpPropagationV2Response{
  places: Place[],
  old: NodeValues[],
  askedNodes: Question[]
}

export interface UpPropagationParams{
	old: NodeValues[],
	assigned: NodeValues[],
	userLocation: Location,
	distance: number
}

export interface BacktrackClass {
	name: string;
	parents: Parent[];
}

export interface Parent {
	child: string;
	image: string;
	parents: string[];
}
