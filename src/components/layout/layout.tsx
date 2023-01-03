import { PropsWithChildren, ReactNode } from "react";
import { Flex } from "@chakra-ui/react";
import { SEO } from "../seo";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <Flex
    sx={{
      flexDirection: "column",
      gap: 0,
      pb: 0,
    }}
  >
    <SEO />
    <Header />
    <Flex alignItems="stretch">{children}</Flex>

    <Footer />
  </Flex>
);
