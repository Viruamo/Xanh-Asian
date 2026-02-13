// Main Application Entry Point
import { Header } from './header.js';
import { Hero } from './hero.js';
import { Benefits } from './benefits.js';
import { About } from './about.js';
import { Contact } from './contact.js';
import { Footer } from './footer.js';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  
  // Mount all components in order
  root.appendChild(Header());
  root.appendChild(Hero());
  root.appendChild(Benefits());
  root.appendChild(About());
  root.appendChild(Contact());
  root.appendChild(Footer());
});
