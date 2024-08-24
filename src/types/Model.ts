export interface PostModel {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type RouteParams = {
  post_detail: {
    item: PostModel;
  };
};
