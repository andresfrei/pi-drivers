export default function Icon ({ src, alt = '', width = '25px', height = '25px' }) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  )
}
