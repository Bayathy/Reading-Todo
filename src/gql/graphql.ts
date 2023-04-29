/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Article = {
  __typename?: 'Article';
  createdAt: Scalars['DateTime'];
  done: Scalars['Boolean'];
  id: Scalars['ID'];
  title: Scalars['String'];
  url: Scalars['String'];
  userId: Scalars['String'];
};

export type ArticleIdInput = {
  id: Scalars['ID'];
};

export type ArticleUuidInput = {
  uuid: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createArticle?: Maybe<Article>;
  createUser?: Maybe<User>;
  deleteArticle?: Maybe<Article>;
  updateArticle?: Maybe<Article>;
};


export type MutationCreateArticleArgs = {
  input?: InputMaybe<NewArticle>;
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<NewUser>;
};


export type MutationDeleteArticleArgs = {
  input?: InputMaybe<ArticleIdInput>;
};


export type MutationUpdateArticleArgs = {
  input?: InputMaybe<UpdateArticle>;
};

export type NewArticle = {
  url: Scalars['String'];
  userId: Scalars['String'];
};

export type NewUser = {
  uuid: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  article?: Maybe<Array<Article>>;
  articles: Array<Article>;
  user?: Maybe<User>;
};


export type QueryArticleArgs = {
  input: ArticleUuidInput;
};


export type QueryUserArgs = {
  input: UserInput;
};

export type UpdateArticle = {
  done: Scalars['Boolean'];
  id: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  article: Array<Maybe<Article>>;
  id: Scalars['ID'];
  uuid: Scalars['String'];
};

export type UserInput = {
  uuid: Scalars['String'];
};

export type CreateArticleMutationVariables = Exact<{
  input: NewArticle;
}>;


export type CreateArticleMutation = { __typename?: 'Mutation', createArticle?: { __typename?: 'Article', id: string, userId: string, url: string, createdAt: any, done: boolean } | null };

export type GetAllArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllArticlesQuery = { __typename?: 'Query', articles: Array<{ __typename?: 'Article', url: string }> };


export const CreateArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateArticle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NewArticle"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createArticle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"done"}}]}}]}}]} as unknown as DocumentNode<CreateArticleMutation, CreateArticleMutationVariables>;
export const GetAllArticlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllArticles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<GetAllArticlesQuery, GetAllArticlesQueryVariables>;