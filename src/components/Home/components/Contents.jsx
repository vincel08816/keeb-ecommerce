import { Card, Container, Grid } from "@mui/material/";
import React from "react";

export default function Contents() {
  return (
    <Container sx={{ p: 5 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {["Live Group Buys", "Ready to ship"].map((text, index) => (
          <Grid item xs={2} sm={4} md={6} key={index}>
            <Card sx={{ p: 2, height: "275px" }}>{text}</Card>
          </Grid>
        ))}
        {[
          "Fully Assembled",
          "Keyboards",
          "Keycaps",
          "Switches",
          "Accessories",
          "Services",
        ].map((text, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Card sx={{ p: 2, height: "250px" }}>{text}</Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
