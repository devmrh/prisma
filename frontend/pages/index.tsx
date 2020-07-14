import * as React from 'react'
import { NextPage } from 'next'
import Layout from '../components/main-layout'
import ProfileList from '../components/profile';
import NewProfile from '../components/new-profile';

const IndexPage: NextPage = () => {
  return (
    <Layout title="Blog Layout">
      <h1>Simple Prisma 2 Blog Example</h1>
      <ProfileList />
      <hr></hr>
      <NewProfile />
    </Layout>
  )
}

export default IndexPage