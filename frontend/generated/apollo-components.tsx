import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  post?: Maybe<Post>;
  feed: Array<Post>;
  profile: Array<Profile>;
  filterPosts: Array<Post>;
};


export type QueryPostArgs = {
  where: PostWhereUniqueInput;
};


export type QueryFilterPostsArgs = {
  searchString?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  signupUser: User;
  deleteOnePost?: Maybe<Post>;
  createDraft: Post;
  createProfile: Profile;
  deleteProfile: Profile;
  updateProfile: Profile;
  publish?: Maybe<Post>;
};


export type MutationSignupUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteOnePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationCreateDraftArgs = {
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  authorEmail?: Maybe<Scalars['String']>;
};


export type MutationCreateProfileArgs = {
  bio?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  authorEmail?: Maybe<Scalars['String']>;
};


export type MutationDeleteProfileArgs = {
  id?: Maybe<Scalars['Int']>;
};


export type MutationUpdateProfileArgs = {
  id?: Maybe<Scalars['Int']>;
  bio?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};


export type MutationPublishArgs = {
  id?: Maybe<Scalars['Int']>;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['Int'];
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  published: Scalars['Boolean'];
  author?: Maybe<User>;
  authorId?: Maybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  posts: Array<Post>;
};

export type Profile = {
  __typename?: 'Profile';
  id: Scalars['Int'];
  userId?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
  website?: Maybe<Scalars['String']>;
  bio: Scalars['String'];
};

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type UserCreateInput = {
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<PostCreateManyWithoutAuthorInput>;
  Profile?: Maybe<ProfileCreateManyWithoutUserInput>;
};

export type PostCreateManyWithoutAuthorInput = {
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>;
  connect?: Maybe<Array<PostWhereUniqueInput>>;
};

export type ProfileCreateManyWithoutUserInput = {
  create?: Maybe<Array<ProfileCreateWithoutUserInput>>;
  connect?: Maybe<Array<ProfileWhereUniqueInput>>;
};

export type PostCreateWithoutAuthorInput = {
  content?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
};

export type ProfileCreateWithoutUserInput = {
  bio: Scalars['String'];
  website?: Maybe<Scalars['String']>;
};

export type ProfileWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type PostFragmentFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'id' | 'published' | 'title' | 'content'>
);

export type ProfileFragmentFragment = (
  { __typename?: 'Profile' }
  & Pick<Profile, 'id' | 'bio' | 'website'>
);

export type UserFragmentFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'name' | 'email'>
);

export type CreatePostMutationMutationVariables = Exact<{
  title: Scalars['String'];
  content: Scalars['String'];
  authorEmail: Scalars['String'];
}>;


export type CreatePostMutationMutation = (
  { __typename?: 'Mutation' }
  & { createDraft: (
    { __typename?: 'Post' }
    & PostFragmentFragment
  ) }
);

export type CreateProfileMutationMutationVariables = Exact<{
  bio: Scalars['String'];
  website: Scalars['String'];
  authorEmail: Scalars['String'];
}>;


export type CreateProfileMutationMutation = (
  { __typename?: 'Mutation' }
  & { createProfile: (
    { __typename?: 'Profile' }
    & ProfileFragmentFragment
  ) }
);

export type SignupUserMutationMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
}>;


export type SignupUserMutationMutation = (
  { __typename?: 'Mutation' }
  & { signupUser: (
    { __typename?: 'User' }
    & UserFragmentFragment
  ) }
);

export type ProfileQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQueryQuery = (
  { __typename?: 'Query' }
  & { profile: Array<(
    { __typename?: 'Profile' }
    & ProfileFragmentFragment
  )> }
);

export const PostFragmentFragmentDoc = gql`
    fragment PostFragment on Post {
  id
  published
  title
  content
  published
}
    `;
export const ProfileFragmentFragmentDoc = gql`
    fragment ProfileFragment on Profile {
  id
  bio
  website
}
    `;
export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  id
  name
  email
}
    `;
export const CreatePostMutationDocument = gql`
    mutation createPostMutation($title: String!, $content: String!, $authorEmail: String!) {
  createDraft(title: $title, content: $content, authorEmail: $authorEmail) {
    ...PostFragment
  }
}
    ${PostFragmentFragmentDoc}`;
export type CreatePostMutationMutationFn = ApolloReactCommon.MutationFunction<CreatePostMutationMutation, CreatePostMutationMutationVariables>;
export type CreatePostMutationComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreatePostMutationMutation, CreatePostMutationMutationVariables>, 'mutation'>;

    export const CreatePostMutationComponent = (props: CreatePostMutationComponentProps) => (
      <ApolloReactComponents.Mutation<CreatePostMutationMutation, CreatePostMutationMutationVariables> mutation={CreatePostMutationDocument} {...props} />
    );
    
export type CreatePostMutationMutationResult = ApolloReactCommon.MutationResult<CreatePostMutationMutation>;
export type CreatePostMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<CreatePostMutationMutation, CreatePostMutationMutationVariables>;
export const CreateProfileMutationDocument = gql`
    mutation createProfileMutation($bio: String!, $website: String!, $authorEmail: String!) {
  createProfile(bio: $bio, website: $website, authorEmail: $authorEmail) {
    ...ProfileFragment
  }
}
    ${ProfileFragmentFragmentDoc}`;
export type CreateProfileMutationMutationFn = ApolloReactCommon.MutationFunction<CreateProfileMutationMutation, CreateProfileMutationMutationVariables>;
export type CreateProfileMutationComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateProfileMutationMutation, CreateProfileMutationMutationVariables>, 'mutation'>;

    export const CreateProfileMutationComponent = (props: CreateProfileMutationComponentProps) => (
      <ApolloReactComponents.Mutation<CreateProfileMutationMutation, CreateProfileMutationMutationVariables> mutation={CreateProfileMutationDocument} {...props} />
    );
    
export type CreateProfileMutationMutationResult = ApolloReactCommon.MutationResult<CreateProfileMutationMutation>;
export type CreateProfileMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateProfileMutationMutation, CreateProfileMutationMutationVariables>;
export const SignupUserMutationDocument = gql`
    mutation signupUserMutation($name: String!, $email: String!) {
  signupUser(data: {name: $name, email: $email}) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;
export type SignupUserMutationMutationFn = ApolloReactCommon.MutationFunction<SignupUserMutationMutation, SignupUserMutationMutationVariables>;
export type SignupUserMutationComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SignupUserMutationMutation, SignupUserMutationMutationVariables>, 'mutation'>;

    export const SignupUserMutationComponent = (props: SignupUserMutationComponentProps) => (
      <ApolloReactComponents.Mutation<SignupUserMutationMutation, SignupUserMutationMutationVariables> mutation={SignupUserMutationDocument} {...props} />
    );
    
export type SignupUserMutationMutationResult = ApolloReactCommon.MutationResult<SignupUserMutationMutation>;
export type SignupUserMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<SignupUserMutationMutation, SignupUserMutationMutationVariables>;
export const ProfileQueryDocument = gql`
    query profileQuery {
  profile {
    ...ProfileFragment
  }
}
    ${ProfileFragmentFragmentDoc}`;
export type ProfileQueryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ProfileQueryQuery, ProfileQueryQueryVariables>, 'query'>;

    export const ProfileQueryComponent = (props: ProfileQueryComponentProps) => (
      <ApolloReactComponents.Query<ProfileQueryQuery, ProfileQueryQueryVariables> query={ProfileQueryDocument} {...props} />
    );
    
export type ProfileQueryQueryResult = ApolloReactCommon.QueryResult<ProfileQueryQuery, ProfileQueryQueryVariables>;