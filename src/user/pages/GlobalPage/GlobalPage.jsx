<<<<<<< HEAD
import { NavBar } from "../../components";
=======
import { NavBar } from "../../components"
>>>>>>> 4ba3845e8a0637920fd5f93a3dbcade827e70b37
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
