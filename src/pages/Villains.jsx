import villains from '../components/data/villains.json'
import joker from '../media/joker.jpg'
import riddler from '../media/riddler.jpeg'
import freeze from '../media/freeze.jpg'

function Villains() {
    const images = {

        "joker.jpg": joker,
        "riddler.jpeg": riddler,
        "freeze.jpg": freeze
    }

    return (
        <main>
            <h2>Villains & Allies</h2>

            <section className="gallery">
                {villains.map((character, index) => (
                    <div className="card" key={index}>
                        <img
                            src={images[character.image]}
                            alt={character.name}
                        />
                        <h3>{character.name}</h3>
                        <p>Type: {character.type}</p>
                        <p>{character.description}</p>
                    </div>
                ))}
            </section>
        </main>
    )
}

export default Villains