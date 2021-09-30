import { gql } from '@apollo/client';

export const SET_COLOR = gql`
  mutation SetColorMutation(
    $color: String!
  ) {
    setColor( color: $color) {
      color
    }
  }
`;
