import "./Margin.css";
import { ReactComponent as Sam } from "./images/Sam.svg";
import { ReactComponent as Leopold } from "./images/Dumitru.svg";
import { ReactComponent as Dumitru } from "./images/Leopold.svg";
import { ReactComponent as Linkedin } from "./images/linkedin.svg";
import { ReactComponent as Github } from "./images/github.svg";

export default function About() {
  return (
    <div className="bodyAbout">
      <section className="tittle">
        <h1 className="top">Creators</h1>
      </section>
      <section className="treePoeple">
        <section className="boxSam">
          <Sam className="sam" />
          <section className="underSam">
            <Linkedin className="logoUnder" />
            <Github className="logoUnder" />
          </section>
        </section>
        <section className="boxDumitru">
          <Dumitru className="dumitru" />
          <section className="underDumitru">
            <Linkedin className="logoUnder" />
            <Github className="logoUnder" />
          </section>
        </section>
        <section className="boxLeopold">
          <Leopold className="leopold" />
          <section className="underLeopold">
            <Linkedin className="logoUnder" />
            <Github className="logoUnder" />
          </section>
        </section>
      </section>
    </div>
  );
}
