import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() urlToImage: string;
  @Input() creator: string;
  @Input() publishedAt: Date;
  @Input() title: string;
  @Input() description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
