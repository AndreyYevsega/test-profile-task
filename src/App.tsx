import { Center, Flex } from "@chakra-ui/react";
import React from "react";
import Profile from "./containers/Profile";

function App() {
  return (
    <div className="app">
      <Flex color="white" w="500px" h="500px" align="center" justify="center">
        <Center w="420px" h="450px">
          <Profile />
        </Center>
      </Flex>
    </div>
  );
}

export default App;
