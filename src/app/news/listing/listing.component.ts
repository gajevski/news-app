import { Component, OnInit } from '@angular/core';
import { News } from '../helpers/news.model';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  news: News[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe(res => {
      this.news = res;
    });
  }

}
