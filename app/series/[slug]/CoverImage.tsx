"use client";

export default function CoverImage({
  src,
  alt,
  className,
  style,
}: {
  src?: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <img
      src={src || "/_placeholder.jpg"}
      alt={alt}
      className={className}
      style={style}
      onError={(e) => {
        const img = e.currentTarget as HTMLImageElement;
        if (!img.dataset.fb) {
          img.dataset.fb = "1";
          img.src = "/_placeholder.jpg";
        }
      }}
    />
  );
}
