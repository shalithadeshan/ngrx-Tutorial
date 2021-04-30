import {createAction, props} from '@ngrx/store';
import {PostModel} from '../../models/post.model';


export const ADD_POST_ACTION = '[posts page] add post';
export const addPost = createAction(ADD_POST_ACTION, props<{ post: PostModel }>());
