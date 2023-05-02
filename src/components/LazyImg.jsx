import { LazyLoadImage } from "react-lazy-load-image-component";

export default function LazyImg({ alt, img, style }) {
  return (
    <LazyLoadImage
      alt={alt}
      // height=""
      src={img} // use normal <img> attributes as props
      // width="100%"
      effect="blur"
      // placeholderSrc="/fallback.jpg"
      visibleByDefault={true}
      wrapperClassName={style}
    />
  );
}
