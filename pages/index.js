import { Layout, Section } from "../components/layouts/index";
import { Navbar, Main } from "../components/sections/index";
import ArrowDown from "../components/utils/ArrowDown";
import { Hero } from "../components/utils/index";

export default function Home() {
  return (
    <Layout documentTitle="Document page">
      <Section height="100vh" minH="auto">
        <Navbar />
        <Hero />
        <ArrowDown />
      </Section>
      <Section>
        <Main />
        {/* <Footer /> */}
      </Section>
    </Layout>
  );
}
