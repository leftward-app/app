import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

import colors from "../config/colors";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import ActionList from "../components/ActionList"
import fetchDashboardListings from "../data/fetchDashboardListings"

import debug from "../utility/debug"


function DashboardScreen({ navigation }) {
  const [actions, setActions] = useState();
  
  useEffect(() => {
    fetchDashboardListings(setActions);
  }, []);

  return (
      <Screen style={styles.screen}>
        <AppButton
          title={"debug printer"}
          onPress={() => debug(actions)} />
        <ActionList
          itemList={actions}
          navigation={navigation}/>
      </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default DashboardScreen;
