import React from "react";

// Components
import Image, { type ImageProps } from "next/image";

const ImageWrapper: React.FC<ImageProps> = ({
  src,
  alt,
  width = 30,
  height = 30,
  className,
  ...otherProps
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      {...otherProps}
    />
  );
};

export default ImageWrapper;
