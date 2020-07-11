import { nexusPrismaPlugin } from 'nexus-prisma'
import { intArg, makeSchema, objectType, stringArg } from '@nexus/schema'

const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.email()
    t.model.posts({
      pagination: false,
    })
  },
})

const Post = objectType({
  name: 'Post',
  definition(t) {
    t.model.id()
    t.model.title()
    t.model.content()
    t.model.published()
    t.model.author()
    t.model.authorId()
  },
})

const Profile = objectType({
  name: 'Profile',
  definition(t) {
    t.model.id()
    t.model.userId()
    t.model.user()
    t.model.website()
    t.model.bio()
  },
})



const Query = objectType({
  name: 'Query',
  definition(t) {
    t.crud.post()

    t.list.field('feed', {
      type: 'Post',
      resolve: (_, args, ctx) => {
        return ctx.prisma.post.findMany({
          where: { published: true },
        })
      },
    })

    t.list.field('profile', {
      type: 'Profile',
      resolve: (_, args, ctx) => {
        return ctx.prisma.profile.findMany({
        })
      },
    })

    t.list.field('filterPosts', {
      type: 'Post',
      args: {
        searchString: stringArg({ nullable: true }),
      },
      resolve: (_, { searchString }, ctx) => {
        return ctx.prisma.post.findMany({
          where: {
            OR: [
              { title: { contains: searchString } },
              { content: { contains: searchString } },
            ],
          },
        })
      },
    })
  },
})

const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.crud.createOneUser({ alias: 'signupUser' })
    t.crud.deleteOnePost()

    t.field('createDraft', {
      type: 'Post',
      args: {
        title: stringArg({ nullable: false }),
        content: stringArg(),
        authorEmail: stringArg(),
      },
      resolve: (_, { title, content, authorEmail }, ctx) => {
        return ctx.prisma.post.create({
          data: {
            title,
            content,
            published: false,
            author: {
              connect: { email: authorEmail },
            },
          },
        })
      },
    })
    // t.field('createProfile', {
    //   type: 'Profile',
    //   args: {
    //     bio: stringArg({ nullable: false }),
    //     website: stringArg(),
    //     authorEmail: stringArg(),
    //   },
    //   resolve: (_, { bio, website, authorEmail }, ctx) => {
    //     return ctx.prisma.profile.create({
    //       data: {
    //         bio,
    //         website,
    //         user: {
    //           connect: { email: authorEmail },
    //         },
    //       },
    //     })
    //   },
    // })

    t.field('createProfile', {
      type: 'Profile',
      args: {
        bio: stringArg(),
        website: stringArg(),
        authorEmail: stringArg(),

      },
      resolve: (_, { bio, website,authorEmail }, ctx) => {
        return ctx.prisma.profile.create({
          data: {
            bio,
            website,
            user: {
              connect: {email: authorEmail},
            }
          }
        })
      }
    });

    t.field('deleteProfile', {
      type: 'Profile',
      args: {
        id: intArg(),
      },
      resolve: (_, {id}, ctx) => {
        return ctx.prisma.profile.delete({
          where: {id: Number(id)}
        })
      }
    })

    t.field('updateProfile', {
      type: 'Profile',
      args: {
        id: intArg(),
        bio: stringArg({ nullable: true }),
        website: stringArg({ nullable: true })
      },
      resolve: (_, { id, bio, website }, ctx) => {
        return ctx.prisma.profile.update({
          where: { id },
          data: {
            bio,
            website
          }

        })
      }
    });

    t.field('publish', {
      type: 'Post',
      nullable: true,
      args: {
        id: intArg(),
      },
      resolve: (_, { id }, ctx) => {
        return ctx.prisma.post.update({
          where: { id: Number(id) },
          data: { published: true },
        })
      },
    })
  },
})

export const schema = makeSchema({
  types: [Query, Mutation, Post, User, Profile],
  plugins: [nexusPrismaPlugin()],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma',
      },
      {
        source: require.resolve('./context'),
        alias: 'Context',
      },
    ],
  },
})
