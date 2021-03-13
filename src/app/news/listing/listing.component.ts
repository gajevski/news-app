import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../helpers/news.model';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  news: Observable<News[]> = this.newsService.getNews();

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
  }

}
