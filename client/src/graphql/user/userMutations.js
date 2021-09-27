import { gql } from '@apollo/client';

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
        name
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
        name
      }
  }
`;

export const CHANGE_ACTIVE= gql`
  mutation ChangeActiveMutation(
    $active: Boolean!
  ) {
    changeActive(
      active: $active
      ){
        name
      }
  }
`;

export const DELETE_ACCOUNT= gql`
  mutation DeleteAccountMutation(
    $password: String!
  ) {
    deleteAccount(
      password: $password
      ){
        name
        email
      }
  }
`;

export const ADD_PHONE_NUMBER=gql`
  mutation AddPhoneNumberMutation(
    $phoneNumber: String!
  ){
    addPhoneNumber(
      phoneNumber: $phoneNumber
    ){
      name
      phoneNumber
    }
  }
`;