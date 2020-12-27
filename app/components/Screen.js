import React from "react";
import Constants from "expo-constants";
import { StyleSheet, ScrollView, RefreshControl } from "react-native";
import { Layout } from "@ui-kitten/components";
import wait from "../utility/wait";
import { Ionicons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function Screen({
  children,
  style,
  doOnRefresh = () => {},
  scrolling,
  back,
  navigation,
}) {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    doOnRefresh();
    wait(2000).then(() => setRefreshing(false));
  }, []);
  if (scrolling == true) {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Layout level={"4"} style={[styles.screen, style]}>
          {back && (
            <TouchableWithoutFeedback
              onPress={() => navigation.goBack()}
              style={styles.back}
            >
              <Ionicons name="ios-arrow-back" size={24} color="black" />
            </TouchableWithoutFeedback>
          )}
          {children}
        </Layout>
      </ScrollView>
    );
  } else {
    return (
      <Layout level={"4"} style={[styles.screen, style]}>
        {back && (
          <TouchableWithoutFeedback
            onPress={() => navigation.goBack()}
            style={styles.back}
          >
            <Ionicons name="ios-arrow-back" size={24} color="black" />
          </TouchableWithoutFeedback>
        )}
        {children}
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 20,
    flex: 1,
  },
});

export default Screen;
