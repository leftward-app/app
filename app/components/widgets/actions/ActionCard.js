import React from "react";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import AppIcon from "../../AppIcon";
import WidgetContainer from "../WidgetContainer";

function ActionCard({ title, onPress, cause, horizontal }) {
  if (horizontal) {
    return (
      <WidgetContainer>
        <TouchableWithoutFeedback onPress={onPress}>
          <Layout
            level={"1"}
            style={{
              width: 140,
              height: 175,
              justifyContent: "space-around",
              alignItems: "center",
              flex: 1,
            }}
          >
            <AppIcon name={cause} size={50} />

            <Text
              category="s1"
              style={{
                fontWeight: "bold",
                marginHorizontal: 5,
                textAlign: "center",
              }}
            >
              {title}
            </Text>
          </Layout>
        </TouchableWithoutFeedback>
      </WidgetContainer>
    );
  } else {
    return (
      <WidgetContainer>
        <TouchableWithoutFeedback onPress={onPress}>
          <Layout
            level={"1"}
            style={{ flexDirection: "row", height: 115, alignItems: "center" }}
          >
            <Text
              category="h6"
              style={{ width: 230, fontWeight: "bold", marginHorizontal: 5 }}
            >
              {title}
            </Text>
            <AppIcon name={cause} size={60} />
          </Layout>
        </TouchableWithoutFeedback>
      </WidgetContainer>
    );
  }
}

export default ActionCard;
