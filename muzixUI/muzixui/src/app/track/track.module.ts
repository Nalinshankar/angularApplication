import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { CardcontainerComponent } from './cardcontainer/cardcontainer.component';
import { FooterComponent } from './footer/footer.component';
import { SearchsmartComponent } from './searchsmart/searchsmart.component';
import { SearchComponent } from './search/search.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule} from '@angular/material/card';
import { from } from 'rxjs';

@NgModule({
  declarations: [HeaderComponent,
    CardComponent,
    CardcontainerComponent,
    FooterComponent,
    SearchsmartComponent,
    SearchComponent,
    WishlistComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule
  ],
  exports: [CardComponent,
    CardcontainerComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    SearchsmartComponent,
    WishlistComponent
  ]
})
export class TrackModule { }
