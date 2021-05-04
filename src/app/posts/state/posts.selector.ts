import {createFeatureSelector, createSelector, props} from '@ngrx/store';
import {PostsState} from './posts.state';


const getPostsState = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(getPostsState, (state) => {
  return state.posts;
});
export const getPostById = createSelector(
  getPostsState, (state, props) => {
    // console.log(props);
    return state.posts.find(post => post.id === props.id);
  });
  // getPostEntities,
  // getCurrentRoute,
  // (posts, route: RouterStateUrl) => {
  //   return posts ? posts[route.params['id']] : null;
  // }
