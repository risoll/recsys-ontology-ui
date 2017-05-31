export interface Place{
    place_id: string, 
    name: string, 
    formatted_address: string,
    phone: string, length_of_visit: string, tariff: number,
    photo: string, lat: number, lng: number, rating: number,
    open_hours_monday: string, open_hours_tuesday: string,
    open_hours_wednesday: string, open_hours_thursday: string,
    open_hours_friday: string, open_hours_saturday: string,
    open_hours_sunday: string, close_hours_monday: string,
    close_hours_tuesday: string, close_hours_wednesday: string,
    close_hours_thursday: string, close_hours_friday: string,
    close_hours_saturday: string, close_hours_sunday: string
}

export interface Pagination{
  limit: number;
  offset: number;
}