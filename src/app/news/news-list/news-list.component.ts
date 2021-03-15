import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, tap } from 'rxjs/operators';
import { News } from '../helpers/news.model';
import { NewsService } from '../news.service';
@Component({
  selector: 'app-listing',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  @ViewChild('input') input: ElementRef;
  news: any;
  search: string;
  isLoading: boolean;
  searchText: any;

  constructor(private newsService: NewsService, public router: Router) { }

  ngOnInit(): void {
    this.getNews('tesla');
  }

 onSearch(): void {
  fromEvent(this.input.nativeElement, 'keyup')
  .pipe(
    debounceTime(1500),
    distinctUntilChanged(),
    tap((event: KeyboardEvent) => {
      this.getNews(this.searchText);
    })
  )
  .subscribe();
}

  getNews(searchText: string) {
    this.isLoading = true;
    this.newsService.getNews(searchText).subscribe(res => {
    this.news = res;
    this.isLoading = false;
    });
  }

  goToDetails(newsItem: any) {
    this.router.navigate(['/article'], { state: { newsItem } } );
    }
}
