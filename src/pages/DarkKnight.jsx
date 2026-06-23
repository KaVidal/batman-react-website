import characters from '../components/data/characters.json'
import batman from '../media/batman.jpg'
import robin from '../media/robin.jpg'
import alfred from '../media/alfred.jpg'

function DarkKnight() {
    const images = {
        "batman.jpg": batman,
        "robin.jpg": robin,
        "alfred.jpg": alfred
    }

    return (
        <main>
            <h2>Character Profiles</h2>

            <section className="gallery">
                {characters.map((character, index) => (
                    <div className="card" key={index}>
                        <img
                            src={images[character.image]}
                            alt={character.name}
                        />
                        <h3>{character.name}</h3>
                        <p>Real Name: {character.realName}</p>
                        <p>{character.role}</p>
                    </div>
                ))}
            </section>
        </main>
    )
}

export default DarkKnight