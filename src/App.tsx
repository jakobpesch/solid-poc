import { Outlet } from "@solidjs/router";
import type { Component } from "solid-js";
import { HStack } from "../styled-system/jsx";
import Navigation from "./Navigation";

const App: Component = () => {
  return (
    <HStack gap="0" alignItems="flex-start" height="100vh" overflow="hidden">
      <Navigation />
      <Outlet />
    </HStack>
  );
};

export default App;
