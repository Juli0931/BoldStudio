<<<<<<< HEAD
import "./GlobalPage.css";
import { NavBar } from "../../components";
=======
import { NavBar } from "../../components"
>>>>>>> eaeb78ed7a40919793ac897f9f046bc98a8cae87
import {
  HomePage,
  AboutUsPage,
  ServicesPage,
  ValuesPage,
  WorkPage,
  ContactUsPage,
} from "..";

export function GlobalPage() {
  return (
    <>
      <NavBar />

      <div className="scroll">
        <section id="home">
          <HomePage />
        </section>

        <section id="about">
          <AboutUsPage />
        </section>

        <section id="services">
          <ServicesPage />
        </section>

        <section>
          <ValuesPage />
        </section>

        <section id="work">
          <WorkPage />
        </section>

        <section id="contact">
          <ContactUsPage />
        </section>
      </div>
    </>
  );
}
