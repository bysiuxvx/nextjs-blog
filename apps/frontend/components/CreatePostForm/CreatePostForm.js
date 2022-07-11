import { Formik } from "formik"

import { Box, Input, Button } from "@chakra-ui/react"
import InputField from "./InputField"

import ImagePreview from "./ImagePreview"
import { useCreatePostMutation } from "../../redux/api/postsApiSlice"

const CreatePostForm = () => {
  const [createPost] = useCreatePostMutation()

  const handleSubmit = (values, actions) => {
    let data = new FormData()

    data.append("title", values.title)
    data.append("shortDescription", values.shortDescription)
    data.append("text", values.text)
    data.append("hashtags", values.hashtags)
    data.append("createdBy", values.createdBy)
    data.append("imageFile", values.imageFile)

    createPost(data)
    actions.resetForm()
  }

  return (
    <Formik
      initialValues={{
        title: "New post",
        shortDescription: "Lorem ipsum dolor sit.",
        text: "Lorem ipsum dolor sit.",
        hashtags: [],
        createdBy: "admin",
        imageFile: undefined,
      }}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Box
          as="form"
          onSubmit={formik.handleSubmit}
          encType="multipart/form-data"
        >
          <InputField
            name="title"
            // type='title'
            component="input"
            label={"Post title"}
            placeholder="What should be the title of the post?"
          />
          <InputField
            name="shortDescription"
            // type='shortDescription'
            component="textarea"
            label={"Short description"}
            placeholder="Describe this post in a few words."
          />
          <InputField
            name="text"
            component="textarea"
            label={"Text"}
            placeholder="Enter the main text of your post."
          />
          <InputField
            name="createdBy"
            component="input"
            label={"Author"}
            placeholder="Author"
          />

          <Input
            type="file"
            accept=".png, .jpg, .jpeg"
            name="imageFile"
            onChange={(event) => {
              formik.setFieldValue("imageFile", event.target.files[0])
            }}
          />
          <ImagePreview image={formik.values.imageFile} />
          <Button
            type="submit"
            // isLoading={formik.isSubmitting}

            mt={5}
          >
            Submit
          </Button>
        </Box>
      )}
    </Formik>
  )
}

export default CreatePostForm
