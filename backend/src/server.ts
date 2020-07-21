import { ApolloServer } from 'apollo-server'
import { schema } from './schema'
import { createContext } from './context'
import { GraphQLServer } from "graphql-yoga";


import "dotenv/config";




// const getCurrentUser = async (request:any) => {
//   if (!request.headers.token) {
//     return null;
//   }
//   const user = await jwt.decode(
//     request.headers.token,
//     process.env.JWT_SECRET_KEY
//   );
//   return { ...user };
// };

// const server = new GraphQLServer({
//   schema,
//   context: async ({ request }) => {
//     const me = await getCurrentUser(request);

//     return {
//       me,
//     };
//   },
// });

// server.start({ port: 4400 }, () => {
//   console.log("App running on http://localhost:4400");
// });



new ApolloServer({ schema, context: createContext }).listen(
  { port: 4000 },
  () =>
    console.log(
      `🚀 Server ready at: http://localhost:4000\n⭐️ See sample queries: http://pris.ly/e/ts/graphql-apollo-server#using-the-graphql-api`,
    ),
)
