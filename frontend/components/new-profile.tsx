import React from "react";
import { Row, Col, Button, Form, Input } from "antd";
import {
  CreateProfileMutationComponent,
  ProfileQueryDocument,
  
} from "../generated/apollo-components";

type Props = {};
const initialState = { bio: "", website: "", authorEmail: "" };
type State = typeof initialState;

class NewProfile extends React.Component<Props> {


//  const [form] = Form.useForm();

  state: State = initialState;

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };


  handleFormSubmit = (values, createProfile) => {

    // e.preventDefault();]
      createProfile({
        variables: { bio: values.bio, website: values.website, authorEmail: values.authorEmail },
        refetchQueries: [{ query: ProfileQueryDocument }],
      }).then((res) => {
        console.log(res);
        this.setState({
          bio: "",
          website: "",
          authorEmail: "",
        });
      });
    }



  render() {
    return (
      <CreateProfileMutationComponent>
        {(createProfile) => (
          <Form onFinish={(values) => this.handleFormSubmit(values, createProfile)}>
            <Row>
              <Col span={6}>
                <Form.Item

                  name="bio"
                >
                  <Input placeholder="bio" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item

                  name="website"
                >
                  <Input placeholder="website" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item

                  name="authorEmail"
                >
                  <Input placeholder="authorEmail" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item>
                  <Button
                    htmlType="submit"

                  >
                    Create profile
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        )}
      </CreateProfileMutationComponent>
    );
  }
}

export default NewProfile;

// import React from "react";
// import { Row, Col, Button, Form, Input } from "antd";

// import {
//   CreatePostMutationComponent,
//   ProfileQueryDocument,
// } from "../generated/apollo-components";

// type Props = {};

// const initialState = { bio: "", website: "", authorEmail: "" };
// type State = typeof initialState;

// class NewProfile extends React.Component<Props> {
//   state: State = initialState;

//   handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//       <CreatePostMutationComponent>

//         {createProfile => (
//           <Form
//             // @ts-ignore
//             onSubmit={ e => {
//               console.log("submited");
//               e.preventDefault();
//               createProfile({
//                 // @ts-ignore
//                 variables: { ...this.state },
//                 refetchQueries: [
//                   // @ts-ignore

//                   { Query: ProfileQueryDocument },
//                 ],
//               })
//                 .then((result) => {
//                   console.log("HAAHAHAHAA", result);
//                   this.setState({ bio: "", website: "", authorEmail: "" });
//                 })
//                 .catch((err) => {
//                   console.log("ERROR", err);
//                 });
//             }}
//           >
//             <Row>
//               <Col span={6}>
//                 <Form.Item>
//                   <Input
//                     placeholder="bio"
//                     name="bio"
//                     value={this.state.bio}
//                     onChange={this.handleChange}
//                     type="text"
//                   />
//                 </Form.Item>
//               </Col>
//               <Col span={6}>
//                 <Form.Item>
//                   <Input
//                     placeholder="website"
//                     name="website"
//                     value={this.state.website}
//                     onChange={this.handleChange}
//                     type="text"
//                   />
//                 </Form.Item>
//               </Col>
//               <Col span={6}>
//                 <Form.Item>
//                   <Input
//                     placeholder="authorEmail"
//                     name="authorEmail"
//                     value={this.state.authorEmail}
//                     onChange={this.handleChange}
//                     type="text"
//                   />
//                 </Form.Item>
//               </Col>
//               <Col span={6}>
//                 <Form.Item>
//                   <Button type="primary" htmlType="submit">Create profile</Button>
//                 </Form.Item>
//               </Col>
//             </Row>
//           </Form>
//         )}
//       </CreatePostMutationComponent>
//     );
//   }
// }
// export default NewProfile;
