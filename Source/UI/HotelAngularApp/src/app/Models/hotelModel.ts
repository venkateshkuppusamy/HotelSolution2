export interface IHotel {
    name: string;
    description: string;
    location:string;
    rating:number  
}

export interface IHotelWrapper {
    currentPage: number,
  totalPages: number,
  pageSize: number,
  totalCount: number,
  count: number,
  items: Array<IHotel>
    
}

export interface IHotelFilter{
  name?:string
  rating?:number
  sortField?:string
  isSortDesc: boolean,
  pageIndex:number,
  pageSize:number,

}