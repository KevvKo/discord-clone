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

export const SET_USER_STATUS_MUTATION = gql`
  mutation SetUserStatusMutation(
    $status: Boolean!
  ) {
    setUserStatus(status: $status) {
      status
    }
  }
`;

export const CHANGE_USERNAME = gql`
  mutation ChangeUsernameMutation(
    $newUsername: String!
    $password: String!
  ) {
    changeUsername(
      newUsername: $newUsername
      password: $password
      ){
        username
      }
  }
`;

export const CHANGE_EMAIL = gql`
  mutation ChangeEmailMutation(
    $newEmail: String!
    $password: String!
  ) {
    changeEmail(
      newEmail: $newEmail
      password: $password
      ){
        email
      }
  }
`;

export const CHANGE_PASSWORD = gql`
  mutation ChangePasswordMutation(
    $newPassword: String!
    $password: String!
  ) {
    changePassword(
      newPassword: $newPassword
      password: $password
      ){
        username
      }
  }
`;