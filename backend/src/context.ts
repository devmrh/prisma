import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient()

export interface Context {
  prisma: PrismaClient
}



const getCurrentUser = async (request: any) => {
  //console.log(request.req.headers);
  if (!request.req.headers.token) {
    return null;
  }
  const user = await jwt.decode(
    request.req.headers.token,
    process.env.JWT_SECRET_KEY
  );
  return { ...user };
};

// const server = new GraphQLServer({
//   schema,
//   context: async ({ request }) => {
//     const me = await getCurrentUser(request);

//     return {
//       me,
//     };
//   },
// });


export async function createContext(  request:any ) {
  // return { prisma, me }
    const me = await getCurrentUser(request);
 // console.log(me);
    return {
      me,
      prisma
    };

}
