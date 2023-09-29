import { useToast } from "@chakra-ui/react";

export const useAuthToast = () => {
  const toast = useToast();

  return {
    successToast: (description: string) =>
      toast({
        title: "Succesful",
        description,
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      }),
    errorToast: (description: string) =>
      toast({
        title: "Error",
        description,
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      }),
  };
};
