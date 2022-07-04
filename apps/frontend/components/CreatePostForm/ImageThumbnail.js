import { Image } from "@chakra-ui/react"
import { useEffect, useState } from "react"

const ImageThumbnail = ({ image }) => {
  const [imgData, setImgData] = useState(null)

  useEffect(() => {
    if (!image) return

    let reader = new FileReader()

    reader.onloadend = () => {
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

  if (imgData)
    return <Image src={imgData} alt="thumbnail" maxH={200} maxW={200} />
}

export default ImageThumbnail
