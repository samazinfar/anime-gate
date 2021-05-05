import "./About.css";
import { ReactComponent as Sam } from "./images/Sam.svg";
import { ReactComponent as Leopold } from "./images/Dumitru.svg";
import { ReactComponent as Dumitru } from "./images/Leopold.svg";
import { ReactComponent as Linkedin } from "./images/linkedin.svg";
import { ReactComponent as Github } from "./images/github.svg";
import logo from "./images/jikan.logo.png";

export default function About() {
  return (
    <div className="bodyAbout">
      <h1 className="top">Creators</h1>
      <section className="treePoeple">
        <section className="boxUser">
          <Sam className="imageUser" />
          <section className="underUser">
            <section className="underUserText">
              <p className="prenom">Anzifar Sam</p>
              <p className="paragraphe">Developer</p>
            </section>
            <section className="About_logo">
              <Github className="logoUnder" />
              <Linkedin className="logoUnder" />
            </section>
          </section>
        </section>
        <section className="boxUser">
          <Dumitru className="imageUser" />
          <section className="underUser">
            <section className="underUserText">
              <p className="prenom">Zgherea Dumitru</p>
              <p className="paragraphe">Developer</p>
            </section>
            <section className="About_logo">
              <Github className="logoUnder" />
              <Linkedin className="logoUnder" />
            </section>
          </section>
        </section>
        <section className="boxUser">
          <Leopold className="imageUser" />
          <section className="underUser">
            <section className="underUserText">
              <p className="prenom">van der Elst Léopold</p>
              <p className="paragraphe">Developer</p>
            </section>
            <section className="About_logo">
              <Linkedin className="logoUnder" />
              <Github className="logoUnder" />
            </section>
          </section>
        </section>
      </section>
      <section className="sectionTitle">
        <h2 className="title22">API</h2>
      </section>
      <section className="underMainBox">
        <section className="AboutBoxApi">
          <img className="jikanLogo" src={logo} alt="img" />
          <p className="textBoxApi">jikan.moe</p>
        </section>
      </section>
    </div>
  );
}
