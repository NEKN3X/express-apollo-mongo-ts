import { GraphQLResolveInfo } from 'graphql'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X]
} &
  { [P in K]-?: NonNullable<T[P]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Address = {
  __typename?: 'Address'
  street: Scalars['String']
  city: Scalars['String']
}

export type Person = {
  __typename?: 'Person'
  name: Scalars['String']
  phone: Maybe<Scalars['String']>
  address: Address
  id: Scalars['ID']
}

export type Query = {
  __typename?: 'Query'
  personCount: Scalars['Int']
  allPersons: Array<Person>
  findPerson: Maybe<Person>
}

export type QueryFindPersonArgs = {
  name: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  addPerson: Maybe<Person>
}

export type MutationAddPersonArgs = {
  name: Scalars['String']
  phone: Maybe<Scalars['String']>
  street: Scalars['String']
  city: Scalars['String']
}

export type AdditionalEntityFields = {
  path: Maybe<Scalars['String']>
  type: Maybe<Scalars['String']>
}

export type WithIndex<TObject> = TObject & Record<string, any>
export type ResolversObject<TObject> = WithIndex<TObject>

export type ResolverTypeWrapper<T> = Promise<T> | T

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}> = (
  obj: T,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Address: ResolverTypeWrapper<Address>
  String: ResolverTypeWrapper<Scalars['String']>
  Person: ResolverTypeWrapper<Person>
  ID: ResolverTypeWrapper<Scalars['ID']>
  Query: ResolverTypeWrapper<{}>
  Int: ResolverTypeWrapper<Scalars['Int']>
  Mutation: ResolverTypeWrapper<{}>
  AdditionalEntityFields: AdditionalEntityFields
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
}>

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Address: Address
  String: Scalars['String']
  Person: Person
  ID: Scalars['ID']
  Query: {}
  Int: Scalars['Int']
  Mutation: {}
  AdditionalEntityFields: AdditionalEntityFields
  Boolean: Scalars['Boolean']
}>

export type UnionDirectiveArgs = {
  discriminatorField: Maybe<Scalars['String']>
  additionalFields: Maybe<Array<Maybe<AdditionalEntityFields>>>
}

export type UnionDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = UnionDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type AbstractEntityDirectiveArgs = {
  discriminatorField: Scalars['String']
  additionalFields: Maybe<Array<Maybe<AdditionalEntityFields>>>
}

export type AbstractEntityDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = AbstractEntityDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type EntityDirectiveArgs = {
  embedded: Maybe<Scalars['Boolean']>
  additionalFields: Maybe<Array<Maybe<AdditionalEntityFields>>>
}

export type EntityDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = EntityDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type ColumnDirectiveArgs = { overrideType: Maybe<Scalars['String']> }

export type ColumnDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = ColumnDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type IdDirectiveArgs = {}

export type IdDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = IdDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type LinkDirectiveArgs = { overrideType: Maybe<Scalars['String']> }

export type LinkDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = LinkDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type EmbeddedDirectiveArgs = {}

export type EmbeddedDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = EmbeddedDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type MapDirectiveArgs = { path: Scalars['String'] }

export type MapDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = MapDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type AddressResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']
> = ResolversObject<{
  street: Resolver<ResolversTypes['String'], ParentType, ContextType>
  city: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType>
}>

export type PersonResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Person'] = ResolversParentTypes['Person']
> = ResolversObject<{
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>
  phone: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  address: Resolver<ResolversTypes['Address'], ParentType, ContextType>
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType>
}>

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = ResolversObject<{
  personCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  allPersons: Resolver<Array<ResolversTypes['Person']>, ParentType, ContextType>
  findPerson: Resolver<
    Maybe<ResolversTypes['Person']>,
    ParentType,
    ContextType,
    RequireFields<QueryFindPersonArgs, 'name'>
  >
}>

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = ResolversObject<{
  addPerson: Resolver<
    Maybe<ResolversTypes['Person']>,
    ParentType,
    ContextType,
    RequireFields<MutationAddPersonArgs, 'name' | 'street' | 'city'>
  >
}>

export type Resolvers<ContextType = any> = ResolversObject<{
  Address: AddressResolvers<ContextType>
  Person: PersonResolvers<ContextType>
  Query: QueryResolvers<ContextType>
  Mutation: MutationResolvers<ContextType>
}>

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>
export type DirectiveResolvers<ContextType = any> = ResolversObject<{
  union: UnionDirectiveResolver<any, any, ContextType>
  abstractEntity: AbstractEntityDirectiveResolver<any, any, ContextType>
  entity: EntityDirectiveResolver<any, any, ContextType>
  column: ColumnDirectiveResolver<any, any, ContextType>
  id: IdDirectiveResolver<any, any, ContextType>
  link: LinkDirectiveResolver<any, any, ContextType>
  embedded: EmbeddedDirectiveResolver<any, any, ContextType>
  map: MapDirectiveResolver<any, any, ContextType>
}>

/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<
  ContextType
>
import { ObjectID } from 'mongodb'
export type AddressDbObject = {
  street: string
  city: string
}

export type PersonDbObject = {
  name: string
  phone: Maybe<string>
  address: Address
  _id: ObjectID
}
