// BEGIN: a9c8d7b3d9f6
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comments } from './comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) {}

  getComments(): Observable<Comments[]> {
    return this.http.get<Comments[]>(
      'https://jsonplaceholder.typicode.com/comments'
    );
  }
}
