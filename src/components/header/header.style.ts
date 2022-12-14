import * as React from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const BoxDiv = styled('div')({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  "& .OptionsHeader": {
    cursor: "pointer",
  },
});
export const HeaderDiv = styled('div')({
  height: 80,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  "& .product": {
    marginRight: 36,
    marginLeft: 36,
  },
  "& .cart": {
    height: 32, 
    width: 30,
    marginRight: 20,
    marginLeft: 30,
  },
  "& .photoUser": {
    width: 60,
    height: 60,
    marginRight: 15,
  },
  "& .ImgLogo": {
    width: 124.28,
    height: 45.41,
  },
});
export const CartGo = styled(Typography)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});
export const TextHeader = styled(Typography)({
  fontSize: 12,
  fontWeight: 600,
  lineHeight: ("19px"),
  color: "#000000",
});
export const NumberCart = styled(Typography)({
  fontSize: 18,
  fontWeight: 600,
  color: "red",
  marginRight: 15,
});
