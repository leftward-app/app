import React, { useEffect, useState } from "react";
import { View } from "react-native";
import callApi from "../data/callApi";
import Screen from "../components/Screen";
import ActionList from "../components/ActionList"
import BadgesWidget from "../components/widgets/BadgesWidget";
import logAmplitudeEventOnMount from "../utility/logAmplitudeEventOnMount"

function MyActionsScreen({ navigation }) {
  logAmplitudeEventOnMount('ViewMyActions')
  const [actionsInProgress, setActionsInProgress] = useState([]);
  const [actionsCompleted, setActionsCompleted] = useState([]);

  async function refreshActions(){
    const listingsInProgress = await callApi("fetchMyActions");
    const listingsCompleted = await callApi("fetchCompletedActions");
    setActionsInProgress(listingsInProgress);
    setActionsCompleted(listingsCompleted);}

  useEffect(() => {
    const refresh = navigation.addListener("focus", () =>{
      refreshActions()
      return refresh
    });
  }, [navigation]);

  return (
      <Screen>
        <ActionList
          itemList={actionsInProgress}
          navigation={navigation}
          doOnRefresh={() => refreshActions()}
          height={200}
          title={"In Progress"}
          icon={"clock-outline"}/>
        <View style={{height:20}}></View>
        <ActionList
          itemList={actionsCompleted}
          navigation={navigation}
          doOnRefresh={() => refreshActions()}
          height={200}
          title={"Completed"}
          icon={"check-bold"}/>
          <View style={{height:20}}></View>
          <BadgesWidget badgesData={[]}></BadgesWidget>
      </Screen>
  );
}

export default MyActionsScreen;
