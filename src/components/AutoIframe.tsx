import React, { useEffect, useRef } from "react";

type Props = {
  src: string;
  title?: string;
  className?: string;
};

export default function AutoIframe({ src, title, className }: Props) {
  const ref = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const iframe = ref.current;
    if (!iframe) return;

    const setHeight = () => {
      try {
        const doc = iframe.contentDocument || iframe.contentWindow?.document;
        if (doc) {
          const height = Math.max(
            doc.documentElement.scrollHeight,
            doc.body.scrollHeight,
            doc.documentElement.offsetHeight,
            doc.body.offsetHeight
          );
          iframe.style.height = height + "px";
        }
      } catch (e) {
        // cross-origin or other access error — ignore
      }
    };

    const onLoad = () => setHeight();
    iframe.addEventListener("load", onLoad);

    // Periodically try to resize (works if inner script/layout changes)
    const interval = setInterval(setHeight, 700);

    // Try once immediately
    setTimeout(setHeight, 100);

    return () => {
      iframe.removeEventListener("load", onLoad);
      clearInterval(interval);
    };
  }, [src]);

  return (
    <iframe
      ref={ref}
      src={src}
      title={title}
      className={className}
      style={{ width: "100%", height: "auto", display: "block", overflow: "visible" }}
      loading="lazy"
    />
  );
}
