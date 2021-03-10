import React, { FC } from "react";
import { Flex } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Content from "./components/Content";

const Profile: FC = () => {
  return (
    <Flex direction="column">
      <Header />
      <Content />
      <Footer />
    </Flex>
  );
};

export default Profile;
