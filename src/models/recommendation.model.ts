import { Question } from './recommendation.model';
export interface Question{
    name: string;
    image: string;
    value?: number;
}

export interface ColsQuestion{
    cols: Question[]
}

export interface Values{
  pref: number;
  conf: number;
}

export interface NodeValues{
  rute?: Values;
  rekreasi?: Values;
  olahraga?: Values;
  kuliner?: Values;
  budaya?: Values;
  alam?: Values;
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
