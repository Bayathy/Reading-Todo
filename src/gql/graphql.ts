/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: string
}

export type Article = {
  __typename?: 'Article'
  createdAt: Scalars['DateTime']
  done: Scalars['Boolean']
  id: Scalars['ID']
  title: Scalars['String']
  url: Scalars['String']
  userId: Scalars['String']
}

export type ArticleIdInput = {
  id: Scalars['ID']
}

export type ArticleUuidInput = {
  uuid: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  createArticle?: Maybe<Article>
  createUser?: Maybe<User>
  deleteArticle?: Maybe<Article>
  updateArticle?: Maybe<Article>
}

export type MutationCreateArticleArgs = {
  input?: InputMaybe<NewArticle>
}

export type MutationCreateUserArgs = {
  input?: InputMaybe<NewUser>
}

export type MutationDeleteArticleArgs = {
  input?: InputMaybe<ArticleIdInput>
}

export type MutationUpdateArticleArgs = {
  input?: InputMaybe<UpdateArticle>
}

export type NewArticle = {
  url: Scalars['String']
  userId: Scalars['String']
}

export type NewUser = {
  uuid: Scalars['String']
}

export type Query = {
  __typename?: 'Query'
  article?: Maybe<Array<Article>>
  articles: Array<Article>
  user?: Maybe<User>
}

export type QueryArticleArgs = {
  input: ArticleUuidInput
}

export type QueryUserArgs = {
  input: UserInput
}

export type UpdateArticle = {
  done: Scalars['Boolean']
  id: Scalars['ID']
}

export type User = {
  __typename?: 'User'
  article: Array<Maybe<Article>>
  id: Scalars['ID']
  uuid: Scalars['String']
}

export type UserInput = {
  uuid: Scalars['String']
}

export type CreateArticleMutationVariables = Exact<{
  input: NewArticle
}>

export type CreateArticleMutation = {
  __typename?: 'Mutation'
  createArticle?: {
    __typename?: 'Article'
    id: string
    title: string
    userId: string
    url: string
    createdAt: string
    done: boolean
  } | null
}

export type DeleteArticleMutationVariables = Exact<{
  input?: InputMaybe<ArticleIdInput>
}>

export type DeleteArticleMutation = {
  __typename?: 'Mutation'
  deleteArticle?: { __typename?: 'Article'; id: string } | null
}

export type GetAllArticlesQueryVariables = Exact<{ [key: string]: never }>

export type GetAllArticlesQuery = {
  __typename?: 'Query'
  articles: Array<{
    __typename?: 'Article'
    id: string
    title: string
    url: string
    userId: string
    done: boolean
    createdAt: string
  }>
}

export type UpdateArticleMutationVariables = Exact<{
  input: UpdateArticle
}>

export type UpdateArticleMutation = {
  __typename?: 'Mutation'
  updateArticle?: {
    __typename?: 'Article'
    id: string
    title: string
    done: boolean
  } | null
}

export const CreateArticleDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateArticle' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NewArticle' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createArticle' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'done' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateArticleMutation,
  CreateArticleMutationVariables
>
export const DeleteArticleDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteArticle' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'ArticleIDInput' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteArticle' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteArticleMutation,
  DeleteArticleMutationVariables
>
export const GetAllArticlesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getAllArticles' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'articles' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'done' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAllArticlesQuery, GetAllArticlesQueryVariables>
export const UpdateArticleDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateArticle' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UpdateArticle' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateArticle' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'done' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateArticleMutation,
  UpdateArticleMutationVariables
>
