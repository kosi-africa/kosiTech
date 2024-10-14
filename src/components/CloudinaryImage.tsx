'use client'

import { CldImage } from "next-cloudinary"

type CloudinaryImgProps={
    height:number,
    width:number,
    sizes:string,
    alt:string,
    src:string,
    priority?:boolean,
    classNames:string
}
function CloudinaryImage({height,width,sizes,alt,priority,src,classNames}:CloudinaryImgProps) {
  return (
    <CldImage
        height={height}
        width={width}
        sizes={sizes}
        priority={priority}
        alt={alt}
        src={src}
        className={classNames}

    />
  )
}

export default CloudinaryImage