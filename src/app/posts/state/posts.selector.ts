import {createFeatureSelector, createSelector, props} from '@ngrx/store';
import {postsAdapter, PostsState} from './posts.state';
import {getCurrentRoute} from '../../store/router/router.selector';
import {RouterStateUrl} from '../../store/router/custom-serializer';

export const POST_STATE_NAME = 'posts';
const getPostsState = createFeatureSelector<PostsState>(POST_STATE_NAME);
export const postsSelectors = postsAdapter.getSelectors();

// export const getPosts = createSelector(getPostsState, (state) => {
//   return state.posts;
// });
export const getPosts = createSelector(getPostsState, postsSelectors.selectAll);
export const getPostEntities = createSelector(
  getPostsState,
  postsSelectors.selectEntities
);
export const getPostById = createSelector(
  // getPostsState, (state, props) => {
  //   // console.log(props);
  //   return state.posts.find(post => post.id === props.id);
  // });

  // getPostEntities,
  getPostEntities,
  getCurrentRoute,
  // (posts, route: RouterStateUrl) => {
  //   return posts ? posts.find((post) => post.id === route.params['id']) : null;
  // }
  (posts, route: RouterStateUrl) => {
    return posts ? posts[route.params['id']] : null;
  }
);
