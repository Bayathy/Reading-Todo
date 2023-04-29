import { graphql } from '@/gql'

export const getArticlesQuery = graphql(/*GraphQL */ `
  query getAllArticles {
    articles {
      id
      title
      url
      userId
      done
      createdAt
    }
  }
`)

// export const getArticles = gql`
//   query GetAllArticles($input: ArticleUuidInput!) {
//     article(input: $input) {
//       id
//     }
//   }
// `

// export const getArticles = gql`
//   query GetAllArticles {
//     articles {
//       id
//     }
//   }
// `
