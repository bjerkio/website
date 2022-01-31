import { Box, Text, Button, Container } from "@theme-ui/components";
import React from "react";
import { openPopupWidget } from "react-calendly";

export const Booking: React.FC = () => {
  const onClick = () =>
    openPopupWidget({ url: "https://calendly.com/simen-a-w-olsen" });
  return (
    <Box sx={{ bg: "iron", color: "background" }}>
      <Container
        variant="centered"
        sx={{ textAlign: "center", py: [5, 6], maxWidth: "660px" }}
      >
        <Box
          sx={{
            fontSize: [5, 8],
            fontWeight: 600,
            lineHeight: ["", "5rem"],
            mb: 4,
          }}
        >
          <Text>Let’s connect!</Text>
        </Box>
        <Button sx={{ color: "iron" }} onClick={onClick}>
          Schedule a meeting →
        </Button>
      </Container>
    </Box>
  );
};
