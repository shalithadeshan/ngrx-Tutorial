import {PostModel} from '../../models/post.model';
import {createEntityAdapter, EntityState} from '@ngrx/entity';

export interface PostsState extends EntityState<PostModel> {
  // posts: PostModel[];
}

export const postsAdapter = createEntityAdapter<PostModel>();

// export const initialState = {
//   posts: null
// };

export const initialState: PostsState = postsAdapter.getInitialState();
