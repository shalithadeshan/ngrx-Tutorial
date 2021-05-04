import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CounterComponent} from './counter/counter/counter.component';
import {PostsListComponent} from './posts/posts-list/posts-list.component';
import {AddPostsComponent} from './posts/add-posts/add-posts.component';
import {EditPostComponent} from './posts/edit-post/edit-post.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'posts', component: PostsListComponent,
  children: [
    { path: 'add', component: AddPostsComponent },
    { path: 'edit/:id', component:  EditPostComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
