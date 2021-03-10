import React, { FC, useState } from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartBold } from "@fortawesome/free-solid-svg-icons";

const Header: FC = () => {
  const [isFav, setIsFav] = useState(false);
  const toggleIsFav = () => {
    setIsFav((prevState) => !prevState);
  };

  return (
    <Flex
      w="420px"
      h="90px"
      bgColor="#EFEFEF"
      align="center"
      justify="space-between"
      paddingX="30px"
      border="1px"
      borderColor="#9B9B9B"
      borderTopRadius="15px"
    >
      <Heading as="h2" fontSize="27" color="#4A4A4A" fontWeight="normal">
        Developer Profile
      </Heading>
      <button
        type="button"
        style={{ width: "24px", height: "22px", outline: "none" }}
        onClick={toggleIsFav}
      >
        <FontAwesomeIcon
          icon={isFav ? faHeartBold : faHeartRegular}
          color={isFav ? "#D0021B" : "#979797"}
          size="lg"
        />
      </button>
    </Flex>
  );
};

export default Header;
