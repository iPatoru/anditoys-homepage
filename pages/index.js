import NextLink from "next/link";
import { Container, Box, Button, Heading, Image, Icon, Link, List, ListItem, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import Footer from "../components/footer";
import { BioSection, BioYear } from "../components/bio";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { GridItem } from "../components/grid-items";
import { IoLogoTwitter, IoLogoInstagram, IoLogoTiktok, IoLogoWhatsapp } from "react-icons/io5";
import thumbTiktok from "../public/images/game/mobilelegends.jpg";
import thumbDiscord from "../public/images/game/valo.jpg";

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box borderRadius="lg" bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")} p={3} mb={6} align="center">
          Hello, I&apos;m a web developer based in Indonesia!
        </Box>
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Andi Pratama
            </Heading>
            <p>Digital Craftzman ( Artist / Developer / Designer ) </p>
          </Box>
          <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
            <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/andi.jpg" alt="Profile Image" />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Andi is a freelance and a web developer based in Surabaya with passion for building digital services/stuff he wants. He has a knack for all things launching product, from planning and designing all the way to solving real-life
            problems with code. When not online, he loves hanging out with his camera. Check this out{""} <Link href="https://www.instagram.com/mangpatol/">Instagram</Link>.
          </Paragraph>
          <Box align="center" my={4}>
            <Link href="https://ipatoru.github.io/">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portofolio
              </Button>
            </Link>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1998</BioYear>
            Born in Jombang (East Java), Indonesia.
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            Graduated high school in SMK Negeri 1 Surabaya
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Completed the Informatic Engineering in University Doctoral Nugroho Magetan
          </BioSection>
          <BioSection>
            <BioYear>2023 to present</BioYear>
            Works as a freelance
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ❤
          </Heading>
          <Paragraph>
            Art, Music, {""}
            <Link href="https://www.instagram.com/mangpatol/">Photograpy</Link>, Billiard , {""} <Link href="https://www.netflix.com/">Netflix and chill</Link>, Machine Learning
          </Paragraph>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://twitter.com/iPatoruuu" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitter} />}>
                  @ipatoru
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://instagram.com/mangpatol" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram} />}>
                  @mangpatol
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://tiktok.com/mangpatol" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTiktok} />}>
                  @mangpatol
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://wa.me/6285808724983" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoWhatsapp} />}>
                  Contact me
                </Button>
              </Link>
            </ListItem>
          </List>

          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem href="https://www.tiktok.com/@mangpatol/video/7148905810695916802?is_from_webapp=1&sender_device=pc&web_id=7147043931006764546" title="Mobile Legends" thumbnail={thumbTiktok}>
              My Tiktok channel
            </GridItem>
            <GridItem href="https://discordapp.com/users/iPatoru#9264" title="Discord" thumbnail={thumbDiscord}>
              Mabar with me on discord
            </GridItem>
          </SimpleGrid>

          <Box align="center" my={4}>
            <NextLink href="/posts" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Popular posts
              </Button>
            </NextLink>
          </Box>
        </Section>
      </Container>
      <Footer />
    </Layout>
  );
};

export default Page;
