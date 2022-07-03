import { Formik } from "formik"

import { Box, Input, Image } from "@chakra-ui/react"
import InputField from "./InputField"
import { useState, useEffect } from "react"
// import ImageThumbnail from "./ImageThumbnail"

const ImageThumbnail = ({ image }) => {
  const [loading, setLoading] = useState(false)
  const [imgData, setImgData] = useState(null)

  useEffect(() => {
    if (!image) return

    console.log("zmiana")
    setLoading(true)
    let reader = new FileReader()

    reader.onloadend = () => {
      setLoading(false)
      setImgData(reader.result)
    }
    reader.readAsDataURL(image)

    // if (!image) return
    // //   if (!props.file) return
    // setLoading(true)
    // const reader = new FileReader()
    // reader.addEventListener("load", () => {
    //   setImgData(reader.result)
    //   setLoading(false)
    // })
    // reader.readAsDataURL(image)
    // //   reader.readAsDataURL(e.target.files[0])
  }, [image])

  if (loading) return <div>Loading...</div>
  if (imgData)
    return <Image src={imgData} alt="thumbnail" maxH={200} maxW={200} />
}

const CreatePostForm = () => {
  return (
    <Formik
      initialValues={{
        title: "",
        shortDescription: "",
        text: "",
        hashtags: [],
        createdBy: "",
        imageFile: null,
      }}
    >
      {(formik) => (
        <Box as="form">
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
          <InputField
            name="imageFile"
            label="Image"
            component="input"
            accept=".png, .jpg, .jpeg"
            type="file"
            onChange={(event) => {
              formik.setFieldValue("file", event.currentTarget.files[0])
            }}
          />
          <ImageThumbnail image={formik.values.imageFile} />
        </Box>
      )}
    </Formik>
  )
}

export default CreatePostForm
