import { darken } from "@theme-ui/color";
import { Link } from "next-theme-ui";
import React from "react";
import { Box, Container, Text, jsx } from "theme-ui";

export type HeaderNoteFragment = {
  link: {
    text: string;
    to: string;
  };
  message: string;
  show: boolean;
};
export const HeaderNote: React.FC<{ data: HeaderNoteFragment }> = ({
  data,
}) => {
  return (
    <Container variant="centered" sx={{ my: 4 }}>
      <Box
        sx={{
          backgroundColor: "yelloooo",
          p: 3,
          pb: 2,
          lineHeight: "2rem",
          display: "inline-block",
          fontWeight: 500,
          mr: [5, 0],
        }}
      >
        <Text>{data.message}</Text>{" "}
        <Link
          sx={{ ml: 3, color: darken("yelloooo", 0.6) }}
          href={data.link.to}
        >
          {data.link.text}
        </Link>
      </Box>
    </Container>
  );
};
