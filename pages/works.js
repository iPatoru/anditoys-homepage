import { Box, Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-items";

import thumbAnditoys from "../public/images/works/work-1.png";
import thumbIfmusic from "../public/images/works/work-2.png";
import thumbPlayValorant from "../public/images/works/valo.jpg";
import Layout from "../components/layouts/article";
import Footer from "../components/footer";

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gaps={6}>
          <Section delay={0.1}>
            <WorkGridItem id="anditoys" title="Anditoys" thumbnail={thumbAnditoys}>
              Want to be a design programmer
            </WorkGridItem>
          </Section>

          <Section delay={0.2}>
            <WorkGridItem id="ifmusic" title="Ifmusic" thumbnail={thumbIfmusic}>
              progress on youtube channel
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
            Gaming Mode
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem id="playvalorant" thumbnail={thumbPlayValorant} title="Play Valorant">
              Riot Games presents VALORANT: a 5v5 character-based tactical FPS where precise gunplay meets unique agent abilities.
            </WorkGridItem>
          </Section>

          <Section delay={0.3}>
            <WorkGridItem id="playvalorant" thumbnail={thumbPlayValorant} title="Play Valorant">
              Riot Games presents VALORANT: a 5v5 character-based tactical FPS where precise gunplay meets unique agent abilities.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
      <Footer />
    </Layout>
  );
};

export default Works;
