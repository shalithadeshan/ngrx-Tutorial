import {PostModel} from '../../models/post.model';
import {createEntityAdapter, EntityState} from '@ngrx/entity';

export interface PostsState extends EntityState<PostModel> {
  // posts: PostModel[];
  count: number;
}

export const postsAdapter = createEntityAdapter<PostModel>({
  sortComparer: sortByName,
});

// export const initialState = {
//   posts: null
// };

export const initialState: PostsState = postsAdapter.getInitialState({
  count: 0,
});

export function sortByName(a: PostModel, b: PostModel): any {
  const compare = a.title.localeCompare(b.title);

  // if (compare > 0) {
  //   return -1;
  // }
  //
  // if (compare < 0) {
  //   return 1;
  // }
}
