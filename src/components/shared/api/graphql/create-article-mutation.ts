import { graphql } from '@/gql'

export const createArticleMutation = graphql(`
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
