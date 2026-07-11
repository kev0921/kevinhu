import * as React from "react";
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  Tooltip
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

export const ColorModeSwitcher = (props: any) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  const handleClick = () => {
    toggleColorMode();
  };

  return (
    <Tooltip
      label={text === "dark" ? "Dark mode" : "Light mode"}
      aria-label="A tooltip"
    >
      <IconButton
        size="md"
        fontSize="md"
        variant="ghost"
        color="current"
        marginLeft="2"
        onClick={handleClick}
        icon={<SwitchIcon />}
        aria-label={`Switch to ${text} mode`}
        rounded="full"
        _hover={{
          bg: useColorModeValue("rgba(255,255,255,0.5)", "rgba(255,255,255,0.1)"),
          transform: "scale(1.1) rotate(15deg)",
        }}
        transition="all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
        {...props}
      />
    </Tooltip>
  );
};
