import { FcGoogle } from "react-icons/fc";
import { Button, Center, Text } from "@chakra-ui/react";

interface ButtonProps {
  handleGoogleSignOut: () => Promise<void>;
}

export const GoogleSignOutButton = ({ handleGoogleSignOut }: ButtonProps) => {
  return (
    <Center p={10}>
      <Button
        w={"30"}
        variant={"outline"}
        leftIcon={<FcGoogle />}
        onClick={handleGoogleSignOut}
        backgroundColor={"white"}
        fontSize={"xl"}
        color={"black"}
      >
        <Center>
          <Text>Sign Out</Text>
        </Center>
      </Button>
    </Center>
  );
};
