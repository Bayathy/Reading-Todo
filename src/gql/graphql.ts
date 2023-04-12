/* eslint-disable */
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
  DateTime: any
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
  title: Scalars['String']
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
