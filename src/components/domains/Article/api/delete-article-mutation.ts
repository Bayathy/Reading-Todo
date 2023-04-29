import { graphql } from '@/gql'

export const deleteArticleMutation = graphql(`
  mutation DeleteArticle($input: ArticleIDInput) {
    deleteArticle(input: $input) {
      id
    }
  }
`)
