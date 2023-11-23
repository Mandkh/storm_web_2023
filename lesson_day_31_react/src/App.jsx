import "./App.css"
import ImageContainer from "./components/ImageContainer";


export default function App () {
  return (
    <div>
        <h1>Image Gallery</h1>
        <ImageContainer imgSrc={"./public/images/image1.jpg"} altText={"Image1"} containerId={1} />
        <ImageContainer imgSrc={"./public/images/image2.jpg"} altText={"Image2"} containerId={2} />
        <ImageContainer imgSrc={"./public/images/image3.jpg"} altText={"Image3"} containerId={3} />
    </div>
  )
}