import { Formik } from "formik"

import { Box, Input, Button } from "@chakra-ui/react"
import InputField from "./InputField"

import ImagePreview from "./ImagePreview"
import { useCreatePostMutation } from "../../redux/api/postsApiSlice"

const CreatePostForm = () => {
  const [createPost] = useCreatePostMutation()

  const handleSubmit = (values, actions) => {
    createPost(values)
    actions.resetForm()
  }

  // const handleSubmit = (values, actions) => {
  //   console.log(values)
  // }

  return (
    <Formik
      initialValues={{
        title: "",
        shortDescription: "",
        text: "",
        hashtags: [],
        createdBy: "",
        image: undefined,
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
            onChange={(event) => {
              formik.setFieldValue("imageFile", event.target.files[0])
              console.log(formik.values)
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
