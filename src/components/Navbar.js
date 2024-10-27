import { Link as ScrollLink } from 'react-scroll';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Luke Day</h1>
      <ul>
        <li><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink></li>
        <li><ScrollLink to="experience" smooth={true} duration={500}>Experience</ScrollLink></li>
        <li><ScrollLink to="projects" smooth={true} duration={500}>Projects</ScrollLink></li>
        <li><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></li>
      </ul>
    </nav>
  );
}
