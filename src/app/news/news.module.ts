import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsListComponent } from './news-list/news-list.component';
import { ArticleComponent } from './article/article.component';
import { NewsService } from './news.service';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [NewsListComponent, ArticleComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [NewsService]
})
export class NewsModule { }
