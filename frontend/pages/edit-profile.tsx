import * as React from "react";
import { NextPage } from "next";
import Layout from "../components/main-layout";
import { useRouter } from "next/router";
//import EditProfile from "../components/editProfile";
import { Button, Card } from "antd";

import {
  GetProfileQueryComponent,
  GetProfileQueryDocument,

} from "../generated/apollo-components";

// import {getProfileQuery} from '../graphql/queries/getProfile.gql';



type Props = {
  id: number;
};



// class editProfile extends React.PureComponent<Props> {
//   componentDidMount() {

//   }
//   // static getInitialProps ({ query: { id } }) {
//   //   return { id: id }
//   // }

//   render() {
//     //const { id } = this.props;
//    // console.log(this.props);

//     return (
//       <Layout title="Blog Layout">

//         <GetProfileQueryComponent query={  GetProfileQueryDocument } variables={{ id: this.props.id }}>
//         {({ loading, error, data }) => {
//           if (loading) return <p>Loading...</p>;
//           if (error) return <p>Error</p>;
//           console.log(data);


//           return <p>No profiles found.</p>;
//         }}
//       </GetProfileQueryComponent>



//       </Layout>
//     );
//   }
// }



const editProfile = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <Layout title="Blog Layout">

      <GetProfileQueryComponent query={  GetProfileQueryDocument } variables={{ id: Number(id) }}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error</p>;
        console.log(data);


      return  <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
        <p>{data.bio}</p>
        <p>{data.website}</p>
        </Card>

      }}
    </GetProfileQueryComponent>



    </Layout>
  );
}
// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch('https://.../posts')
//   const posts = await res.json()

//   // By returning { props: posts }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//   }
// }

export default editProfile;
