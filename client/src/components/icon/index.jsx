export default function Icon ({ src, alt = '', width = '25px', height = '25px', className = '', onClick = null }) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      onClick={onClick}
      className={className}
    />
  )
}
