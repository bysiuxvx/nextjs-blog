import { Image } from "@chakra-ui/react"
import { useEffect, useState } from "react"

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

export default ImageThumbnail
