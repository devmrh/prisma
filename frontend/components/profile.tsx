import React from "react";

import { Table } from "antd";

import { ProfileQueryComponent } from "../generated/apollo-components";

type Props = {};

class ProfileList extends React.PureComponent<Props> {
  render() {
    return (
      <ProfileQueryComponent>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;
          console.log(data);
          if (data && data.profile.length > 0) {
            const feedData = data.profile.map(({ bio, website }, i) => ({
              key: i,
              bio,
              website,
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