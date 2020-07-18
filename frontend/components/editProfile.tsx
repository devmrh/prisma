import React from 'react';
import { Button } from 'antd';
import Router from 'next/router';

// import {
//   ProfileQueryDocument,
//   DeleteOneProfileComponent
// } from '../generated/apollo-components';


type Props = {
  id: number
}

class EditProfile extends React.Component<Props> {

  render() {
    const { id } = this.props;
    return (

          <Button
          type="info"
          onClick={
            () => Router.push(`/edit-profile?id=${id}`)
          }>edit</Button>

    );
  }


}

export default EditProfile;