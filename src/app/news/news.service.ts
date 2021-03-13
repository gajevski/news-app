import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { News } from './helpers/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private readonly key = '966d540a6874483db2c09703516e3717';

  constructor(private http: HttpClient) { }

getNews(): Observable<News[]> {
  const url = `http://newsapi.org/v2/everything?q=programming&from=2021-03-13&sortBy=publishedAt&apiKey=${this.key}`;

  return this.http.get(url).pipe(
      map((response): News[] => {
          return (response as any).articles;
      })
  );
}
}
