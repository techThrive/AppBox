export interface SearchData {
    businesses:Item[]
}
export interface Item{
    id:number,
    rating: number,
    phone: String,
    review_count: number,
    name: String,
    url: String,
    coordinates: {
      latitude: number,
      longitude: number
    },
    image_url: String,
    location: {
      city: String,
      address: String
    },
    distance: number
}
