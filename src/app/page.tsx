"use client";

import StarIcon from "@/components/icons/star.icon";
import ThemeSwitcher from "@/components/theme.switcher";
import { Button, Center, Heading, Stack, Text } from "@chakra-ui/react";

const repoLink: string =
  "https://github.com/NobbyDeveloper/next-chakra-starter";

export default function Home() {
  return (
    <>
      <Center minH="100dvh" flexDirection={"column"} gap={2}>
        <Text>Welcome to your starter</Text>
        <Heading>Next.js + ChakraUI</Heading>

        <Stack direction={"row"} spacing={4}>
          <ThemeSwitcher />
          <Button title="Give a Star">
            <a href={repoLink}>
              <StarIcon />
            </a>
          </Button>
        </Stack>
      </Center>
    </>
  );
}
