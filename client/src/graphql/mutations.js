import { gql } from '@apollo/client';

export const SIGNUP_MUTATION = gql`
  mutation SignupMutation(
    $email: String!
    $password: String!
    $username: String!
    $status: Boolean!
  ) {
    signup(
      email: $email
      password: $password
      username: $username
      status: $status
    ) {
      token
    }
  }
`;


export const LOGIN_MUTATION = gql`
  mutation LoginMutation(
    $email: String!
    $password: String!
  ) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const SET_USER_STATUS = gql`
  mutation SetUserStatus(
    $status: Boolean!
  ){
    setUserStatus( status: $status){
      user
    }
  }
`;