export default function VideoBackground ({ src }) {
  return (
      <div className="video-background">
        <iframe
          width="853"
          height="480"
          src="https://www.youtube.com/embed/YLFVD8xaD3U"
          title="Introducing Our New 2023 F1 Opening Titles!"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </div>
  )
}
