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
    pu1: number;
    eou1: number;
    tr1: number;
    pe1: number;
    bi1: number;
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
