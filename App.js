import React from "react";
import { StatusBar } from "react-native";

StatusBar.setBarStyle("dark-content");

import Routes from "./src/routes";

export default function App() {
  return <Routes />;
}
