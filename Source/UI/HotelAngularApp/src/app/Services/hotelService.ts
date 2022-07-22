import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IHotelFilter } from '../Models/hotelModel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http:HttpClient) { }

  getHotels(hotelFilter: IHotelFilter):Observable<any>{
    let params: HttpParams = new HttpParams();
    if(hotelFilter.name != undefined)
      params = params.set('name', hotelFilter.name.valueOf());
    if(hotelFilter.rating != undefined)
      params = params.set('rating', hotelFilter.rating.valueOf());
    if(hotelFilter.sortField != undefined)
      params = params.set('sortField', hotelFilter.sortField.valueOf());
    params = params.set('isSortDesc', hotelFilter.isSortDesc);
    params = params.set('pageSize', hotelFilter.pageSize);
    params = params.set('pageIndex', hotelFilter.pageIndex);

    return this.http.get("https://localhost:7233/api/Hotels",{params:params});
  }

}