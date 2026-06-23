import videos from '../components/data/videos.json';

function Media() {

  return (
    <main>
        <h2>Batman Movie Trailers</h2>

        <section className="video-section">
            {videos.map((video, index) => (
                <div className="video-box" key={index}>
                    <h3>{video.title}</h3>

                    <iframe
                    src={video.link}
                    title={video.title}
                    allowFullScreen
                    ></iframe>
                </div>
            ))}
        </section>
    </main>
  )
}

export default Media