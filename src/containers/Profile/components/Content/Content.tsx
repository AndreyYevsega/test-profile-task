import React, { FC } from "react";
import { Avatar, Flex, Heading, Text } from "@chakra-ui/react";
import photo from "../../../../assets/img/photo.png";

const Content: FC = () => (
  <Flex
    height="267px"
    justifyContent="center"
    align="center"
    direction="column"
    border="1px"
    borderColor="#9B9B9B"
  >
    <Avatar name="Andrey Yevsega" src={photo} size="lg" />
    <Heading as="h3" fontSize="24" color="#3E4D57" fontWeight="normal">
      Andrey Yevsega
    </Heading>
    <Text fontSize="17px" color="#707070">
      Front End Developer
    </Text>
    <Text fontSize="17px" color="#707070">
      Dnepr, Ukraine
    </Text>
  </Flex>
);

export default Content;
