import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardcontainerComponent } from './track/cardcontainer/cardcontainer.component';
import { WishlistComponent } from './track/wishlist/wishlist.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: CardComponent ,
  //   data: {country: 'India'}
  // },
  // {
  //   path: '',
  //   component: ViewCardComponent,
  //   data: {country: 'Australia'}
  // }
  { path: '', redirectTo: '/track', pathMatch: 'full' },
  { path: 'track', component: CardcontainerComponent },
  { path: 'wishlist', component: WishlistComponent },
  // {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
