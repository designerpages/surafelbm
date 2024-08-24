import {PostModel} from './Model';

export type PostItemProps = {
  item: PostModel;
  onPostPress: (item: PostModel) => void;
};

export type ButtonProps = {
  title: string;
  onPress: () => void;
  loading?: boolean;
};
export type InputFieldProps = {
  value: string;
  placeholder: string;
  onChange: (text: string) => void;
  multiline?: boolean;
};
export type SearchHeaderProps = {
  onSearchType: (text: string) => void;
  searchText: string;
};
