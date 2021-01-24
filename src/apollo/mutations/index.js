import gql from 'graphql-tag';
import UpdatePost from './UpdatePost.graphql';
import DeletePost from './DeletePost.graphql';
import CreatePost from './CreatePost.graphql';

export const UPDATE_POST = gql`${UpdatePost}`;
export const DELETE_POST = gql`${DeletePost}`;
export const CREATE_POST = gql`${CreatePost}`;
