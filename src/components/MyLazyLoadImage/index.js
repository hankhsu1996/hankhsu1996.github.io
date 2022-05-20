import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "./style.scss";

const MyLazyLoadImage = (props) => {
  const ref = React.useRef(null);
  const className = `${props.className} lazyload`;
  const startTime = new Date();
  return (
    <div ref={ref}>
      <LazyLoadImage
        className={className}
        src={props.src}
        alt={props.alt}
        afterLoad={() => {
          const endTime = new Date();
          const time = endTime - startTime;
          const minDelay = props.minDelay || 0;
          const delay = Math.max(minDelay - time, 0);
          setTimeout(() => {
            const img = ref.current.children[0];
            img.classList.remove("lazyload");
            img.classList.add("lazyloaded");
          }, delay);
        }}
      />
    </div>
  );
};

export default MyLazyLoadImage;
