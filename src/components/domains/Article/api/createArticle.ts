import { graphql } from '@/gql'

export const createArticle = graphql(`
  mutation CreateArticle($input: NewArticle!) {
    createArticle(input: $input) {
      id
      title
      userId
      url
      createdAt
      done
    }
  }
`)
