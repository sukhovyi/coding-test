import gql from 'graphql-tag';
import GetPostList from './PostList.graphql';
import GetPost from './Post.graphql';

export const GET_POST_LIST = gql`${GetPostList}`;
export const GET_POST = gql`${GetPost}`;
