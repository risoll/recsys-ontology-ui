import { Question, NodeValues } from './recommendation.model';
export interface Question {
	name: string;
	image: string;
	value?: number;
}

export interface ColsQuestion {
	cols: Question[]
}

export interface Values {
	pref: number;
	conf: number;
}

export interface NodeValues {
	name: string,
	pref: number,
	conf: number,
	parents?: NodeValues[]
}

export interface DownPropagationResponse{
	data: NodeValues[],
	askedNodes: Question[]
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
