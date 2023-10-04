import { useNavigate } from "@solidjs/router";
import { For, type Component } from "solid-js";
import { css } from "../styled-system/css";
import { Box, Container, HStack } from "../styled-system/jsx";

const ProductionCells: Component = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Box>ProductionCells</Box>
      <HStack>
        <For each={["1", "2", "3"]}>
          {(item) => (
            <button
              class={css({ paddingX: "2", bg: "gray.200" })}
              onClick={() => {
                navigate(item);
              }}
            >
              Cell {item}
            </button>
          )}
        </For>
      </HStack>
    </Container>
  );
};

export default ProductionCells;
