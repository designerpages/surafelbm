import {PostModel} from '@customTypes/Model';
import {BASE_URL} from '@env';
import axios from 'axios';

interface PostServiceType {
  fetchAllPosts(): Promise<PostModel[] | null>;
  deletePost(id: number): Promise<boolean | null>;
  editPost(data: PostModel): Promise<boolean | null>;
}

const PostService: PostServiceType = {
  fetchAllPosts: async () => {
    try {
      const response = await axios.get<PostModel[]>(`${BASE_URL}/posts`);
      return response.data;
    } catch (error) {
      console.log('ERROR : ', error);
      return null;
    }
  },
  deletePost: async (id: number) => {
    try {
      await axios.delete(`${BASE_URL}/posts/${id}`);
      return true;
    } catch (error) {
      console.log('ERROR : ', error);
      return null;
    }
  },
  editPost: async (data: PostModel) => {
    try {
      await axios.put(`${BASE_URL}/posts/${data.id}`, data);
      return true;
    } catch (error) {
      console.log('ERROR : ', error);
      return null;
    }
  },
};

export default PostService;
