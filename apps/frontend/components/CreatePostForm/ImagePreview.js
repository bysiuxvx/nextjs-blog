import { Image } from "@chakra-ui/react"
import { useEffect, useState } from "react"

const ImagePreview = ({ image }) => {
  const [imgData, setImgData] = useState(null)

  useEffect(() => {
    if (!image) return

    let reader = new FileReader()

    reader.onloadend = () => {
      setImgData(reader.result)
    }
    reader.readAsDataURL(image)
  }, [image])

  if (imgData)
    return <Image src={imgData} alt="thumbnail" maxH={200} maxW={200} />
}

export default ImagePreview
