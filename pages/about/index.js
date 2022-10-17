import { Box } from "@chakra-ui/react";
import { Layout, Section } from "../../components/layouts";
import { Footer, Navbar } from "../../components/sections";
import { Main } from "../../components/sections/About";

export default function About() {
  return (
    <>
      <Layout documentTitle="dhafagk. - About">
        <Section>
          <Navbar />
        </Section>
        <Section>
          <Main />
        </Section>
        <Section>
          <Footer />
        </Section>
      </Layout>
    </>
  );
}
