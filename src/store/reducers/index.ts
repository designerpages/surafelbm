import {Post} from '@customTypes/State';
import {combineReducers} from 'redux';
import postReducer from '@store/reducers/post.reducer';

const rootReducer = combineReducers({
  post: postReducer,
});
export interface RootState {
  post: Post;
}

export default rootReducer;
