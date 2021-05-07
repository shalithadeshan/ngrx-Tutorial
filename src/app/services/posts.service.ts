import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {PostModel} from '../models/post.model';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<PostModel[]> {
    return this.http
      .get<PostModel[]>(`https://angular-project-1540e-default-rtdb.firebaseio.com/posts.json`)
      .pipe(
        map((data) => {
          const posts: PostModel[] = [];
          for (let key in data) {
            posts.push({ ...data[key], id: key });
          }
          return posts;
        })
      );
  }
  addPost(post: PostModel): Observable<{ name: string }> {
    return this.http.post<{ name: string }>(
      `https://angular-project-1540e-default-rtdb.firebaseio.com/posts.json`,
      post
    );
  }

  updatePost(post: PostModel): any {
    const postData = {
      [post.id]: { title: post.title, description: post.description },
    };
    return this.http.patch(
      `https://angular-project-1540e-default-rtdb.firebaseio.com/posts.json`,
      postData
    );
  }

  deletePost(id: string): any {
    return this.http.delete(
      `https://angular-project-1540e-default-rtdb.firebaseio.com/posts/${id}.json`
    );
  }
}
