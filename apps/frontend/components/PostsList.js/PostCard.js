import { Box, Button, Heading, Text } from "@chakra-ui/react"

import moment from "moment"
import "moment/locale/en-gb"
import { useDeletePostMutation } from "../../redux/api/postsApiSlice"

const PostCard = ({ post }) => {
  moment.locale("en-gb")

  const articleText = JSON.stringify(post.text)

  const [deletePost] = useDeletePostMutation()

  return (
    <Box p={2} bg="aqua">
      {/* <Image /> */}

      <Text>{moment(post.createdAt).format("LL")}</Text>
      {articleText}
      <Heading>{post.title}</Heading>
      <Text>{post.shortDescription}</Text>
      <Button onClick={() => deletePost(post._id)}>Delete</Button>
    </Box>
  )
}

export default PostCard
