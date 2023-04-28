import { Suspense } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function LazyImg({ alt, img }) {
  return (
    <Suspense
      fallback={
        <div
          style={{ width: "22rem", height: "22rem", background: "red" }}
        ></div>
      }
    >
      <LazyLoadImage
        alt={alt}
        height="100%"
        src={img} // use normal <img> attributes as props
        width="100%"
        effect="blur"
      />
    </Suspense>
  );
}
