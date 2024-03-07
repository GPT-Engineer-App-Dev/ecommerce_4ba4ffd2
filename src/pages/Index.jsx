import { Box, Button, Container, Heading, Text, Image, Stack, Flex, useToast } from "@chakra-ui/react";
import { FaCartPlus } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleAddToCart = () => {
    // Placeholder for add to cart functionality
    toast({
      title: "Added to cart!",
      description: "The item has been added to your shopping cart.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={8}>
      <Stack spacing={6}>
        <Image src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0fGVufDB8fHx8MTcwOTgxNjgyOHww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" alt="Product Image" />
        <Heading as="h1">Product Title</Heading>
        <Text fontSize="2xl" color="green.500">
          $49.99
        </Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec iaculis mauris. Curabitur sodales dui nec ante dictum, eu consectetur quam bibendum. Maecenas rhoncus consequat magna, eget egestas elit. Donec non lorem sed odio condimentum auctor. Aenean aliquet urna non vulputate porta.</Text>
        <Flex justifyContent="flex-end">
          <Button leftIcon={<FaCartPlus />} colorScheme="teal" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </Flex>
      </Stack>
    </Container>
  );
};

export default Index;
