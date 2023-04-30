import { graphql } from '@/gql'

export const updateArticleMutation = graphql(`
  mutation UpdateArticle($input: UpdateArticle!) {
    updateArticle(input: $input) {
      id
      title
      done
    }
  }
`)
