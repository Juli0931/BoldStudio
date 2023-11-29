import './GlobalPage.css'
import { NavBar } from "../../components"
import {
  HomePage,
  AboutUsPage,
  ServicesPage,
  ValuesPage,
  WorkPage,
  // ProjectDetailPage,
  ContactUsPage
} from "..";

export function GlobalPage() {
  return (
    <>
      <NavBar />

      <section id="home">
        <HomePage />
      </section>

      <section id="about">
        <AboutUsPage />
      </section>

      <section id="services">
        <ServicesPage />
      </section>

      <ValuesPage />

      <section id="work">
        <WorkPage />
      </section>

      <section id="contact">
        <ContactUsPage />
      </section>
    </>
  );
}