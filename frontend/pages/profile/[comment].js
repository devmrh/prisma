import { useRouter } from 'next/router'
import Layout from '../../components/main-layout'

const Comment = () => {
  const router = useRouter()
  const { id, comment } = router.query

  return(
    <Layout title="Blog Layout">
       <h1>Post: {id}</h1>
  <h1>Comment: {comment}</h1>
    </Layout>

  )
}

export default Comment
