import { useParams, useSearchParams } from "@solidjs/router";
import type { Component } from "solid-js";
import { Box } from "../styled-system/jsx";
import { css } from "../styled-system/css";

const TemperingUnit: Component = () => {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  if (!searchParams.sort) {
    setSearchParams({ sort: "asc" });
  }
  return (
    <Box>
      TemperingUnit with id: {params.id}
      <Box>Queries {JSON.stringify(searchParams)}</Box>
      <button
        class={css({
          padding: 2,
          bg: "blue.50",
          cursor: "pointer",
          _hover: { background: "blue.100" },
        })}
        onClick={() => {
          setSearchParams({ sort: "asc" });
        }}
      >
        Sort ascending
      </button>
      <button
        class={css({
          padding: 2,
          bg: "blue.50",
          cursor: "pointer",
          _hover: { background: "blue.100" },
        })}
        onClick={() => {
          setSearchParams({ sort: "desc" });
        }}
      >
        Sort descending
      </button>
    </Box>
  );
};

export default TemperingUnit;
