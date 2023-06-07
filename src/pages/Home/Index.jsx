import { Container, Section } from "./style";
import { SectionSlide } from "../../components/SectionSlide";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";

// import img banner //
import imgBanner from "../../assets/image-banner.png";

export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <Section className="banner">
          <div>
            <img src={imgBanner} alt="" />
          </div>
          <div>
            <h1>Sabores inigual</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </Section>

        <p>Refeições</p>
        <SectionSlide>
          <Card />
          <Card />
          <Card />
          <Card />
        </SectionSlide>

        <p>Sobremesas</p>
        <SectionSlide>
          <Card />
          <Card />
          <Card />
          <Card />
        </SectionSlide>

        <p>Bebidas</p>
        <SectionSlide>
          <Card />
          <Card />
          <Card />
          <Card />
        </SectionSlide>
      </main>
    </Container>
  );
}
