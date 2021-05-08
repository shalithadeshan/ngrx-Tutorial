import {createReducer, on} from '@ngrx/store';
import {initialState, postsAdapter} from './posts.state';
import {addPostSuccess, deletePost, deletePostSuccess, loadPostsSuccess, updatePost, updatePostSuccess} from './posts.actions';

const _postsReducer = createReducer(initialState,
  on(addPostSuccess, (state, action) => {
  // const post = {...action.post};
  // return {
  //   ...state,
  //   posts: [...state.posts, post]
  // };
    return postsAdapter.addOne(action.post, state);
}),
  on(updatePostSuccess, (state, action) => {
      // const updatedPosts = state.posts.map((post) => {
      //   return action.post.id === post.id ? action.post : post;
      // });
      // return {
      //   ...state,
      //   posts: updatedPosts,
      // };
    return postsAdapter.updateOne(action.post, state);
    }),
  on(deletePostSuccess, (state, {id}) => {
    // const updatedPosts = state.posts.filter(post => {
    //   return post.id !== id;
    // });
    // return {
    //   ...state,
    //   posts: updatedPosts,
    // };
    return postsAdapter.removeOne(id, state);
  }),
  on(loadPostsSuccess, (state, action) => {
    // return{
    //   ...state,
    //  posts: action.posts,
    // };
    return postsAdapter.setAll(action.posts, state);
  })
);

export function postsReducer(state, action) {
  return _postsReducer(state, action);
}
