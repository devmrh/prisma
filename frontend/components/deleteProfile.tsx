import React from 'react';
import { Button } from 'antd';


import {
  ProfileQueryDocument,
  DeleteOneProfileComponent
} from '../generated/apollo-components';

type Props = {
  id: number
}

class DeleteProfile extends React.Component<Props> {

  render() {
    const { id } = this.props;

    return (

      <DeleteOneProfileComponent>
        {deleteOneProfile => (
          <Button
          type="danger"
          onClick={
            () => {
              deleteOneProfile({
                variables: { id },
                refetchQueries: [
                  {query: ProfileQueryDocument}
                ]
              })
            }
          }>delete</Button>
        )}
      </DeleteOneProfileComponent>
    );
  }


}

export default DeleteProfile;