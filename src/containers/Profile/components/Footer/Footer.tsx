import React, { FC } from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer: FC = () => {
  const headingProps = {
    fontSize: "26px",
    color: "#4A4A4A",
    fontWeight: "normal",
  };
  const textProps = {
    fontSize: "17px",
    color: "#9F9F9F",
  };
  return (
    <Flex
      w="420px"
      h="90px"
      justify="space-around"
      border="1px"
      borderColor="#9B9B9B"
      bgColor="#EFEFEF"
      borderBottomRadius="15px"
    >
      <Flex direction="column" align="center" justify="center">
        <Heading {...headingProps} as="h4">
          1,234
        </Heading>
        <Text {...textProps}>Profile Views</Text>
      </Flex>
      <Flex direction="column" align="center" justify="center">
        <Heading {...headingProps} as="h4">
          5,678
        </Heading>
        <Text {...textProps}>Website Views</Text>
      </Flex>
      <Flex direction="column" align="center" justify="center">
        <Flex align="center" h="31px">
          <FontAwesomeIcon icon={faStar} color="#4a4a4a" size="sm" />
          <FontAwesomeIcon icon={faStar} color="#4a4a4a" size="sm" />
          <FontAwesomeIcon icon={faStar} color="#4a4a4a" size="sm" />
          <FontAwesomeIcon icon={faStar} color="#4a4a4a" size="sm" />
          <FontAwesomeIcon icon={faStar} color="#4a4a4a" size="sm" />
        </Flex>
        <Text {...textProps}>Avg. Raiting</Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
