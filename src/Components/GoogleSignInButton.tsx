import { FcGoogle } from "react-icons/fc";
import { Button, Center, Text } from "@chakra-ui/react";

interface ButtonProps {
  handleGoogleSignIn: () => Promise<void>;
}

export const GoogleSignInButton = ({ handleGoogleSignIn }: ButtonProps) => {
  return (
    <Center p={10}>
      <Button
        w={"30"}
        variant={"outline"}
        leftIcon={<FcGoogle />}
        onClick={handleGoogleSignIn}
        backgroundColor={"white"}
        color={"black"}
        fontSize={"xl"}
      >
        <Center>
          <Text>Sign In</Text>
        </Center>
      </Button>
    </Center>
  );
};
