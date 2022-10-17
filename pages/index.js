import { Spacer } from "@chakra-ui/react";
import { Layout, Section } from "../components/layouts/index";
import { Navbar, Main, Footer } from "../components/sections/index";
import { Hero, ArrowDown } from "../components/utils/index";

export default function Home() {
  return (
    <Layout documentTitle="dhafagk.">
      <Section height="100vh" minH="auto" display="flex" flexDirection="column">
        <Navbar />
        <Hero />
        <Spacer />
        <ArrowDown />
      </Section>
      <Section>
        <Main />
      </Section>
      <Section>
        <Footer />
      </Section>
    </Layout>
  );
}
