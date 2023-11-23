const ImageContainer = ({imgSrc, altText, containerId}) => {
    console.log("Image source", imgSrc);
    return (
        <div>

            <div className="image-container" id={containerId}>
                <img src={imgSrc} alt={altText} />
            </div>

        </div>
    );
}

export default ImageContainer