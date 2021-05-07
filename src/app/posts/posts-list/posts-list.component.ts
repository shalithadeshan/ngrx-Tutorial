import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.state';
import {Observable} from 'rxjs';
import {PostModel} from '../../models/post.model';
import {getPosts} from '../state/posts.selector';
import {deletePost, loadPosts} from '../state/posts.actions';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: Observable<PostModel[]>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.posts = this.store.select(getPosts);
    this.store.dispatch(loadPosts());
  }

  onDelete(id: string): void {
    if (confirm('Are you sure you want to delete')) {
      // console.log('delete the post');
      this.store.dispatch(deletePost({id}));
    }
  }
}
