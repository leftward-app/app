import React, { useRef } from "react";
import { FlatList, Animated, View } from "react-native";
import ActionCard from "./ActionCard";
import routes from "../../../navigation/routes";
import { Layout } from "@ui-kitten/components";

function ActionList({ itemList, navigation, horizontal }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  return (
    <FlatList
      style={{ flexGrow: 0 }}
      horizontal={horizontal}
      data={itemList}
      keyExtractor={(item) => item.actionId.toString()}
      renderItem={({ item }) => (
        <Animated.View style={{ opacity: fadeAnim }}>
          {fadeIn()}
          <ActionCard
            title={item.actionTitle}
            cause={item.actionCause}
            horizontal={horizontal}
            onPress={() => navigation.navigate(routes.ACTION_DETAILS, item)}
          />
        </Animated.View>
      )}
      ItemSeparatorComponent={() => (
        <Layout level="4" style={{ width: 10, height: 10 }} />
      )}
    />
  );
}

export default ActionList;
