import { Component, OnInit,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IHotel } from 'src/app/Models/hotelModel';
import { IHotelWrapper } from 'src/app/Models/hotelModel';
import { HotelService } from 'src/app/Services/hotelService';
import { IHotelFilter } from 'src/app/Models/hotelModel';
import { FormsModule } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  hotelObject: IHotel;
  hotelWrapper: IHotelWrapper;
  hotelFilter : IHotelFilter;
  ratings: any[]=[];
  sortColumns: any[]=[];
  sortOrder:any[]=[];
  gridData: any[] = [];
  constructor(private masterSrv: HotelService) {
    this.hotelObject = {
      name: 'hotel1',
      description: 'hotel 1 description',
      location: 'london',
      rating:5
    }
    this.hotelWrapper = {
      currentPage: 1,
      count: 10,
      pageSize: 10,
      totalCount:25,
      totalPages:3,
      items:[]
    }
    this.hotelFilter ={
      isSortDesc: false,
      pageIndex:1,
      pageSize:25
    };
    
   
  }

  ngOnInit(): void {
   this.ratings = [1,2,3,4,5];
   this.sortColumns=["Name","Description","Rating","Location"]
   this.sortOrder = [{"key":"DESC","value":true},{"key":"ASC","value":false}];
    this.loadGrid();
  }
  
  loadGrid() {
    this.masterSrv.getHotels(this.hotelFilter).subscribe((res: any) => {
      this.gridData = res.items;
    })
  }
  searchClickEvent()
  {
    this.masterSrv.getHotels(this.hotelFilter).subscribe((res: any) => {
      this.gridData = res.items;
      this.hotelWrapper = res;
    })
  }

  resetEvent()
  {
    this.hotelFilter.name = undefined;
    this.hotelFilter.rating= undefined;
    this.hotelFilter.isSortDesc= false;
    this.hotelFilter.sortField= undefined;
    this.masterSrv.getHotels(this.hotelFilter).subscribe((res: any) => {
      this.gridData = res.items;
      this.hotelObject =res;
    })
  }

  handlePage(e:PageEvent)
  {
     console.log(e.pageIndex);
     console.log(e.pageSize);
    this.hotelFilter.pageIndex = e.pageIndex+1;
    this.hotelFilter.pageSize = e.pageSize;
    this.masterSrv.getHotels(this.hotelFilter).subscribe((res: any) => {
      this.gridData = res.items;
      this.hotelObject =res;
    })
  }
}
