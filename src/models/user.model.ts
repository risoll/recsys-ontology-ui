export interface Feedback{
    id: number;
    user_agent: string;
    platform: string;
    ip: string;
    city: string;
    name: string;
    gender: string;
    age: number;
    rating: number;
    eou: number;
    eou2: number;
    inf: number;
    etu: number;
    etu2: number;
    pe:number;
    prq: number;
    prq2: number;
    tr: number;
    tr2: number;
    mode: number;
    time: number;
}

export interface PostFeedback{
    id: number;
    user_agent: string;
    platform: string;
    ip: string;
    city: string;
    name: string;
    gender: string;
    age: number;
    more_informative: number;
    easier: number;
    more_useful: number;
    more_appropriate_result: number;
    more_helpful_interaction: number;
    overall_preference: number;
    time: number;
}

export interface IpApi{
    ip: string;
    city: string;
    region: string;
    country: string;
    country_name: string;
    postal?: string;
    latitude: number;
    longitude: number;
    timezone: string;
}

export interface Location{
    lat: number;
    lng: number;
}
