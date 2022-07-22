import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelComponent } from './Components/hotel/hotel.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';

const routes: Routes = [
{
  path:'hotels',
  component:HotelComponent
},
{
  path:'welcome',
  component:WelcomeComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
