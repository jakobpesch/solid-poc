import { Accordion, Pressable } from "@ark-ui/solid";
import { A, AnchorProps, useMatch } from "@solidjs/router";
import {
  ChevronDown,
  ChevronUp,
  CloudLightning,
  Cog,
  Gauge,
  Grid,
  LayoutDashboard,
  LogOut,
  Router,
  User,
  Wand,
  Zap,
} from "lucide-solid";
import { JSX, ParentProps, createEffect } from "solid-js";
import { css } from "../styled-system/css";
import { Box, HStack, Stack } from "../styled-system/jsx";
import { box, divider, hstack, spacer, stack } from "../styled-system/patterns";
import { token } from "../styled-system/tokens";
import logo from "./assets/industrifai-small.svg";
import { Button } from "../ui/components/Button";

const NavigationItem = (props: ParentProps<AnchorProps>) => {
  return (
    <A
      class={hstack({
        cursor: "pointer",
        padding: "2",
        color: "gray.800",
        _hover: { background: "blue.50" },
      })}
      activeClass={css({
        cursor: "pointer",
        bg: "blue.50",
        color: "primary",
        borderRightWidth: "4px",
        borderRightColor: "primary",
      })}
      {...props}
    >
      {props.children}
    </A>
  );
};

const Navigation = () => {
  const isTemperingUnitsRoute = useMatch(() => "/tempering-units");
  const isMachinesRoute = useMatch(() => "/machines");
  createEffect(() => {
    console.log(isTemperingUnitsRoute());
    console.log(isMachinesRoute());
  });
  const iconStyles = { size: "20" };
  return (
    <nav
      class={stack({
        gap: "0",
        height: "100%",
        borderRightWidth: "1px",
        borderColor: "gray.200",
        width: "250px",
        minWidth: "250px",
      })}
    >
      <A href="/dashboard">
        <img src={logo} class={css({ padding: 2 })} />
      </A>
      <div class={divider({ height: "1px", color: "gray.200" })} />
      <Stack overflowY="auto" paddingTop="3">
        <NavigationItem href="/dashboard">
          <Gauge {...iconStyles} />
          Dashboard
        </NavigationItem>
        <NavigationItem href="/wizard">
          <Zap {...iconStyles} />
          Einrichtassistent
        </NavigationItem>
        <NavigationItem href="/production-cells">
          <Grid {...iconStyles} />
          Produktionszellen
        </NavigationItem>
        <Accordion.Root collapsible value={["Geräte"]}>
          <Accordion.Item value="Geräte">
            {(api) => (
              <>
                <Accordion.Trigger
                  class={css({
                    textAlign: "left",
                    width: "100%",
                    cursor: "pointer",
                    padding: "2",
                    _hover: { background: "blue.50" },
                  })}
                >
                  <HStack justifyContent="space-between">
                    <HStack>
                      <Router {...iconStyles} />
                      <Box>Geräte</Box>
                    </HStack>
                    {api().isOpen ? (
                      <ChevronUp size={24} color={token("colors.primary")} />
                    ) : (
                      <ChevronDown size={24} color={token("colors.primary")} />
                    )}
                  </HStack>
                </Accordion.Trigger>
                <Accordion.Content
                  class={css({
                    height: "100%",
                    borderRightWidth: "1px",
                    borderColor: "gray.200",
                    width: "250px",
                    minWidth: "250px",
                    marginTop: "3",
                  })}
                >
                  <Stack>
                    <NavigationItem href="/machines">
                      <Box paddingLeft="8">Spritzgießmaschine</Box>
                    </NavigationItem>
                    <NavigationItem href="/tempering-units">
                      <Box paddingLeft="8">Temperiereinheit</Box>
                    </NavigationItem>
                  </Stack>
                </Accordion.Content>
              </>
            )}
          </Accordion.Item>
        </Accordion.Root>
      </Stack>

      <div class={spacer()} />
      <div class={divider({ height: "1px", color: "gray.200" })} />
      <HStack paddingY="2" paddingX="4" justifyContent="space-between">
        <Pressable asChild>
          <Box
            class={css({
              borderRadius: "4px",
              padding: "2",
              cursor: "pointer",
              color: "gray.500",
              _hover: { bg: "gray.50" },
            })}
            onClick={() => {
              console.log("test");
            }}
          >
            <User size={24} />
          </Box>
        </Pressable>
        <Pressable asChild>
          <Box
            class={css({
              borderRadius: "4px",
              padding: "2",
              cursor: "pointer",
              color: "gray.500",
              _hover: { bg: "gray.50" },
            })}
            onClick={() => {
              console.log("test");
            }}
          >
            <Cog size={24} />
          </Box>
        </Pressable>
        <Pressable
          class={css({
            borderRadius: "4px",
            padding: "2",
            cursor: "pointer",
            color: "gray.500",
            _hover: { color: "red.500", bg: "red.50" },
          })}
          onClick={() => {
            console.log("test");
          }}
        >
          <LogOut size={24} />
        </Pressable>
      </HStack>
    </nav>
  );
};

export default Navigation;
