import gadgets from '../components/data/gadgets.json'
import batarang from '../media/batarang.jpg'
import batmobile from '../media/batmobile.jpg'
import grapple from '../media/grapple-gun.jpg'


function Gadgets() {
    const images = {
            "batarang.jpg": batarang,
            "batmobile.jpg": batmobile,
            "grapple-gun.jpg": grapple
        }

    return (
        <main>
            <h2>Gadgets & Technology</h2>

            <section className="gallery">
                {gadgets.map((gadget, index) => (
                    <div className="card" key={index}>
                        <img
                            src={images[gadget.image]}
                            alt={gadget.name}
                        />
                        <h3>{gadget.name}</h3>
                        <p>{gadget.description}</p>
                    </div>
                ))}
            </section>
        </main>
  )
}

export default Gadgets