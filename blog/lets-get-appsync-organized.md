---
title: Let's get AWS AppSync organized!
date: '2021-05-15'
language: en
meta:
  description: Organizing AWS AppSync in modules
  image: /images/lets-get-appsync-organized.png
image: /images/lets-get-appsync-organized.png
tags:
  - Amazon Web Services
  - AWS
  - AWS AppSync
  - Pulumi
  - Infrastructure as Code
---

**Bjerk is a proud member of the Open Source community. We love and invest in
Open Source. We build open-source products, sharing our experience and
contributing back to engineers alike. **

About a year ago, we released the first version of Pulumi AppSync Modules
(PASM). We've released this tool under the Apache 2.0 license (Open
Source-license). It is a combination of GraphQL Modules and Pulumi, a component
dedicated to creating reusable and maintainable modules.

Since the very beginning of AWS AppSync, we've been searching for a way to
organize the APIs. I started with CloudFormation code in early 2018, making a
hacky resolver upload script to S3. I later combined it with Terraform,
eventually migrating to Terraform. At the time when the `schema` field became
available. Terraform served well for Bjerk for many years; however we had a few
issues with it. The lack of a packaging solution is a huge one. We want to
standardize and divide parts of our infrastructure as packages, and the way that
stuff worked in Terraform wasn't great. Our team never liked Terraform either,
mostly because people had to learn Hashicorp Configuration Language.

## We ❤️ Pulumi

Searching for better solutions, we found Pulumi. Pulumi, having many advantages
that made handling infrastructure code so much easier, quickly became standard
for all projects. We had this big infrastructure codebase in one of the
projects, with over 100+ files, each containing multiple Kubernetes resources,
and ugly hacks to make Ingress work. It was all rewritten using Pulumi in just
about three hours – a real testament to what Pulumi offers.

We have also been using AWS AppSync since the very beginning of the service.
It's a great tool, but one huge thing about Appsync is organization. [Uri
Goldshtein][uri-goldshtein] maintains a great tool called [GraphQL
Modules][graphql-modules].

## Pulumi AppSync Modules

PASM contains four components. `GraphQLApi` represents an AppSync API. This
component has mostly the same attributes as a bare-bone AWS AppSync Resource
(`aws.appsync.GraphQLApi`), except that it also takes `modules` (array of
`GraphQLModule`) and `datasources` (array of `GraphQLDataSource`). The
`GraphQLModule` also has a simple API. To define a schema for the module, you'll
use `typeDefs`, `datasources` and `resolvers` to define what resolvers there
are.

If you've used AWS AppSync Resource before, you know that you have a `schema`
field. With PASM, you can use the `schema` field, `typeDefs` in a module or even
in the resolver, and they'll be stitched together. Like magic!

To get started, you'll need `@pulumi/aws` and `pulumi-appsync-modules`.

```shell
▶ yarn add @pulumi/aws pulumi-appsync-modules
```

You can also fork my [sample repository][sample]. It features an opinionated
project structure and a few modules to get started.

Currently, PASM only supports Javascript and Typescript. Other languages are in
the works! The package are already used in multiple large-scale AppSync APIs and
we are dedicated to maintain and improve the package for years to come

### GraphQLApi

This component defines the reference to a collection of `modules`. We wanted the
components to be as simple and familiar as possible, so other arguments consists
of the same as `aws.appsync.GraphQLApi`.

```typescript
import { GraphQLApi } from 'pulumi-appsync-modules';
import TodoModule from './modules/todo/TodoModule';
import PostModule from './modules/post/PostModule';

export default new GraphQLApi('api', {
  name: 'PAM API',
  authenticationType: 'API_KEY',
  modules: [TodoModule, PostModule],
});
```

### GraphQLModule

The `GraphQLModule` features a simple interface with three arguments. Having one
GraphQL schema file for a module, you set that using `typeDefs` as string. In
the example below, I've defined it using `fs.readFileSync`.

```typescript
import { GraphQLModule } from 'pulumi-appsync-modules';
import * as fs from 'fs';

import AddPostResolver from './resolvers/AddPostResolver';
import PostDatasource from './datasources/PostDatasource';

export default new GraphQLModule('post', {
  typeDefs: fs.readFileSync(`${__dirname}/post.graphql`, 'utf-8'),
  resolvers: [AddPostResolver],
  datasources: [PostDatasource],
});
```

### GraphQLResolver

The `GraphQLResolver` component has nearly the same attributes as
`aws.appsync.Resolver`. The only difference being that you can add `typeDefs` to
the resolver as well, making it very flexible where you add the schema.

```typescript
import { GraphQLResolver } from 'pulumi-appsync-modules';

export default new GraphQLResolver('add-post-resolver', {
  dataSource: PostDatasource.name,
  type: 'Mutation',
  field: 'addPost',
  requestTemplate: `{
    "version": "2017-02-28",
    "payload": {}
}`,
  responseTemplate: `$util.toJson($ctx.result)`,
});
```

### GraphQLDataSource

The arguments of GraphQLDataSource are inherited from its parent resource
`aws.appsync.DataSource`.

```typescript
import { GraphQLDataSource } from 'pulumi-appsync-modules';
export default new GraphQLDataSource('post-datasource', {
  name: 'PostNone',
  type: 'NONE',
});
```

[graphql-modules]: https://www.graphql-modules.com/
[uri-goldshtein]: https://twitter.com/UriGoldshtein
[sample]: https://github.com/cobraz/todo-pulumi-appsync-modules
