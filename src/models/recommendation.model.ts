import { Question } from './recommendation.model';
export interface Question{
    name: string;
    image: string;
}

export interface ColsQuestion{
    cols: Question[]
}

export interface BacktrackClass{
    name: string;
    parents: Parent[];
}

export interface Parent{
    child: string;
    image: string;
    parents: string[];
}