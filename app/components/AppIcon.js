import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

// Size categories to change it all here in one spot.
// Name/Size/Color-primary? contrast?
function AppIcon({ name, size, style = {} }) {
  switch (name) {
    case "no-image":
      return (
        <MaterialCommunityIcons
          name="image-size-select-large"
          size={size}
          color="black"
          style={style}
        />
      );
    case "star":
      return (
        <MaterialCommunityIcons
          name="star"
          size={size}
          color="black"
          style={style}
        />
      );
    case "star-outline":
      return (
        <MaterialCommunityIcons
          name="star-outline"
          size={size}
          color="black"
          style={style}
        />
      );
    case "people":
      return (
        <Ionicons name="md-people" size={size} color="black" style={style} />
      );
    case "browseAllActions":
      return (
        <FontAwesome5 name="list-ul" size={size} color="black" style={style} />
      );
    case "environment":
    case "Environmental Justice":
      return (
        <FontAwesome5 name="leaf" size={size} color="black" style={style} />
      );
    case "crime":
    case "Legal Justice":
    case "Criminal Justice Reform":
      return (
        <FontAwesome5 name="gavel" size={size} color="black" style={style} />
      );
    case "lgbtq":
      return (
        <FontAwesome5 name="equals" size={size} color="black" style={style} />
      );
    case "race":
      return (
        <FontAwesome5
          name="fist-raised"
          size={size}
          color="black"
          style={style}
        />
      );
    case "economic":
      return (
        <FontAwesome5 name="hard-hat" size={size} color="black" style={style} />
      );
  }
}

export default AppIcon;
