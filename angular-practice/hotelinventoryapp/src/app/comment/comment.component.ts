import { Component } from '@angular/core';
import { CommentService } from './comment.service';
import { Observable, map, pluck } from 'rxjs';
import { Comments } from './comment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent {
  comments$: Observable<Comments[]> = this.commentService.getComments();

  comment$ = this.activatedRoute.data.pipe(pluck('comments'));

  constructor(
    private commentService: CommentService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}
}
