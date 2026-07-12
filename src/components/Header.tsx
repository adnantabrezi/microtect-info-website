export function Header() {
  return (
    <nav>
      <a href="#" className="nav-logo">
        <img src="/logo.svg" className="logo-svg" alt="Microtech India logo" />
      </a>
      <div className="nav-links">
        <a href="#particle-size">Particle Sizes</a>
        <a href="#technology">Features</a>
        <a href="#benefits">Benefits</a>
        <a href="#process">Facility</a>
      </div>
      <a href="#contact" className="nav-cta">Contact Us</a>
    </nav>
  );
}

export default Header;
