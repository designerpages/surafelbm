import {PostModel} from './Model';

export type RootStackParamList = {
  home: undefined;
  post_detail: {item: PostModel};
  edit_post: {item: PostModel};
};
