'use client';

import Image, { StaticImageData } from "next/image";

const ImageCarousel = ({ images, slidePerShow }: {
    images: (string | StaticImageData)[],
    slidePerShow: number,
}) => {
    return (
        <div>
            <div
                className="w-150 flex items-center mx-auto"
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        style={{
                            width: `${600 / slidePerShow}px`,
                            height: `${(600 / slidePerShow) - 100}px`,
                        }}
                        className="px-3"
                    >
                        <Image
                            alt={`Image-${index}`}
                            src={typeof image === "string" ? image : image.src}
                            width={200}
                            height={230}
                            className="w-full h-full object-cover block rounded-lg"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImageCarousel