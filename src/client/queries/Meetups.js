import gql from 'graphql-tag';

export default gql`
  {
    meetups {
      id
      date
      description

      speakers {
        id
        bio
        name
      }

      talks {
        title
      }
    }
  }
`;
