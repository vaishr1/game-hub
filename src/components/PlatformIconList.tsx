import React from "react";
import { Platform } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  // index signature
  const iconMap: { [key: string]: IconType } = {
    // name: PlayStation
    // slug: playstation -> better to rely on
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };
  return (
    <HStack marginY={1}>
      {" "}
      // theme.space value
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={iconMap[platform.slug]}
          color={"gray.600"}
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
