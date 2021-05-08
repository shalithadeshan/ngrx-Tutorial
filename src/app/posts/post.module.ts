import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PostsListComponent} from './posts-list/posts-list.component';
import {AddPostsComponent} from './add-posts/add-posts.component';
import {EditPostComponent} from './edit-post/edit-post.component';
import {StoreModule} from '@ngrx/store';
import {postsReducer} from './state/posts.reducer';
import {POST_STATE_NAME} from './state/posts.selector';
import {EffectsModule} from '@ngrx/effects';
import {PostsEffects} from './state/posts.effects';
import { SinglePostComponent } from './single-post/single-post.component';

const routes: Routes = [
  { path: '', component: PostsListComponent,
    children: [
      { path: 'add', component: AddPostsComponent },
      { path: 'edit/:id', component:  EditPostComponent}
    ]
  }
];

@NgModule({
  declarations: [

    PostsListComponent,
    AddPostsComponent,
    EditPostComponent,
    SinglePostComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(POST_STATE_NAME, postsReducer),
    EffectsModule.forFeature([PostsEffects])
  ]
})
export class PostModule { }
