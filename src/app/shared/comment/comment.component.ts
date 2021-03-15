import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() avatar: string;
  @Input() name: string;
  @Input() date: Date;
  @Input() comment: string;

  constructor() { }

  ngOnInit(): void {
  }

}
