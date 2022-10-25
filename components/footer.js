import Section from "../components/section";
import React from "react";
import { Box, Link } from "@chakra-ui/react";

function Footer() {
  return (
    <div className="">
      <Box align="center" my={4}>
        <Section>
          <footer className="uppercase hidden md:inline-flex text-sm text-gray-400">© 2022 iPatoru Inc. All Rights Reserved.</footer>
        </Section>
        
          <i className="hidden md:inline-flex text-sm text-gray-400">Inspired by .</i>
          <Link href="https://www.youtube.com/c/devaslife" className="hidden md:inline-flex text-sm text-gray-400">
            'devaslife'
          </Link>
        
      </Box>
    </div>
  );
}

export default Footer;
