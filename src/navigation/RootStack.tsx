import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '@screens/HomeScreen';
import {EDIT_POST, HOME, POST_DETAIL} from './constants';
import {RootStackParamList} from '@customTypes/Navigation';
import PostDetailScreen from '@screens/PostDetail';
import EditPostScreen from '@screens/EditPost';

const RootStack = (): React.ReactElement => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={HOME} component={HomeScreen} />
      <Stack.Screen name={POST_DETAIL} component={PostDetailScreen} />
      <Stack.Screen name={EDIT_POST} component={EditPostScreen} />
    </Stack.Navigator>
  );
};
export default RootStack;
