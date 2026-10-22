export default function ProjectPreview({ image, label, ratio = "aspect-[16/10]" }) {
  return (
    <div className={`relative w-full overflow-hidden bg-sand ${ratio}`}>
      <img
        src={image}
        alt={label}
        width="1280"
        height="800"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}
