import { gql } from '@apollo/client';

export const SIGNUP_MUTATION = gql`
  mutation SignupMutation(
    $signUpData: signUpData!
  ) {
    signup(
      signUpData: $signUpData
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