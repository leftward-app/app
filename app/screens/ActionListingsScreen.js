import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import telemetry from "../analytics/telemetry";
import { Text } from "@ui-kitten/components";
import Screen from "../components/Screen";
import ActionList from "../components/widgets/actions/ActionList";
import getData from "../data/getData";

function ActionListingsScreen({ route, navigation }) {
  const [listings, setListings] = useState();

  useMountEffect(() => {
    // telemetry((eventTitle = "viewActionListingsScreen")); // update with source button
    getData("populateActionListings", { queryKey: route.params }).then((data) =>
      setListings(data.actions)
    );
  });

  return (
    <Screen
      scrolling={true}
      back={true}
      navigation={navigation}
      paddingHorizontal={20}
    >
      <Text
        category="h1"
        style={{
          textAlign: "center",
          marginVertical: 20,
          fontWeight: "bold",
        }}
      >
        {route.params}
      </Text>
      <ActionList
        itemList={listings}
        navigation={navigation}
        horizontal={false}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default ActionListingsScreen;
