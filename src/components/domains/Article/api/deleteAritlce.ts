import { graphql } from '@/gql'

export const deleteArticle = graphql(`
  mutation DeleteArticle($input: ArticleIDInput) {
    deleteArticle(input: $input) {
      id
    }
  }
`)
