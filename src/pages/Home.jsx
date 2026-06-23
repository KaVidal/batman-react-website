import stories from '../components/data/story.json'
import tragedy from '../media/the-tragedy.png'
import training from '../media/the-training.jpg'
import batman from '../media/becoming-batman.avif'

function Home() {
    const images = {
        "the-tragedy.png": tragedy,
        "the-training.jpg": training,
        "becoming-batman.avif": batman
    }
  return (
    <main>
        <h2>How Bruce Wayne Became Batman</h2>
        
        <section className="gallery">
            {stories.map((story, index) => (
                <div className="card" key={index}>
                    <img
                        src={images[story.image]}
                        alt={story.title}
                    />
                    <h3>{story.title}</h3>
                    <p>{story.description}</p>
                </div>
            ))}
        </section>
    </main>
  )
}

export default Home