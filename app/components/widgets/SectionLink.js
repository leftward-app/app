import React from "react";
import { Layout, Text, Button } from "@ui-kitten/components";
import WidgetContainer from "./WidgetContainer";
import AppIcon from "../AppIcon";

function SectionLink({ image, title, buttonTitle, onPress }) {
  return (
    <WidgetContainer>
      <Layout level="1" style={{ alignItems: "center", height: 295 }}>
        <Layout level="1">{image}</Layout>
        <Text
          category="h1"
          style={{
            textAlign: "center",
            marginVertical: 20,
            fontWeight: "bold",
          }}
        >
          {title}
        </Text>
        <Button onPress={() => onPress()}>{buttonTitle}</Button>
      </Layout>
    </WidgetContainer>
  );
}

export default SectionLink;
