import './Header.css'

function Header({
  onShowHome,
  onShowKnight,
  onShowGadgets,
  onShowVillains,
  onShowMedia
}) {

  return (
    <header className="hero">
      <h1>Batman - The Dark Knight of Gotham City</h1>

      <nav>
        <button onClick={onShowHome}>Home</button>
        <button onClick={onShowKnight}>The Dark Knight</button>
        <button onClick={onShowGadgets}>Gadgets & Tech</button>
        <button onClick={onShowVillains}>Villains & Allies</button>
        <button onClick={onShowMedia}>Videos & Media</button>
      </nav>
    </header>
  )
}

export default Header