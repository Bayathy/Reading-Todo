import { gql } from '@urql/core'

// export const getArticles = gql`
//   query GetAllArticles($input: ArticleUuidInput!) {
//     article(input: $input) {
//       id
//     }
//   }
// `

export const getArticles = gql`
  query GetAllArticles {
    articles {
      id
    }
  }
`
