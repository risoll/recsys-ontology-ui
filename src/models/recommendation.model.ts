import { Question } from './recommendation.model';
export interface Question{
    name: string;
    image: string;
}

export interface ColsQuestion{
    cols: Question[]
}