export interface Place{
    place_id: string, 
    name: string, 
    formatted_address: string,
    phone: string, length_of_visit: string, tariff: number,
    photo: string, lat: number, lng: number, rating: number,
    monday: string, tuesday: string, wednesday: string,
    thursday: string, friday: string,
    saturday:string, sunday: string
}

export interface Pagination{
  limit: number;
  offset: number;
}

export interface Schedule{
  name: string;
  schedule: string;
}