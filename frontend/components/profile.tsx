import React from "react";

import { Table, Button } from "antd";

import { ProfileQueryComponent } from "../generated/apollo-components";

import DeleteProfile from '../components/deleteProfile';
import EditProfile from '../components/editProfile';



type Props = {};

class ProfileList extends React.PureComponent<Props> {
  render() {
    return (
      <ProfileQueryComponent>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;
          //console.log(data);
          if (data && data.profile.length > 0) {
            const feedData = data.profile.map(({ id,bio, website }, i) => ({
              key: i,
              bio,
              website,
              id
            }));
            const columns = [
              {
                title: "Bio",
                dataIndex: "bio",
                key: "bio",
              },
              {
                title: "Website",
                dataIndex: "website",
                key: "website",
              },
              {
                title: 'action',
                key: 'action',
                render: ({ id }: { id: number }) => {
                  return (
                    <Button.Group>
                      <DeleteProfile id={id} />
                      <EditProfile id={id} />
                    </Button.Group>
                  );
                }
              }
            ];
            return <Table columns={columns} dataSource={feedData} />;
          }

          return <p>No profiles found.</p>;
        }}
      </ProfileQueryComponent>
    );
  }
}
export default ProfileList