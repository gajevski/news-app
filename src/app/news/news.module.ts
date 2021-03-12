import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { ListingComponent } from './listing/listing.component';
import { DetailsComponent } from './details/details.component';
import { NewsService } from './news.service';


@NgModule({
  declarations: [ListingComponent, DetailsComponent],
  imports: [
    CommonModule,
    NewsRoutingModule
  ],
  providers: [NewsService]
})
export class NewsModule { }
