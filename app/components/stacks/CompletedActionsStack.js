import React, { useContext } from "react";
import { RootStoreContext } from "../../store/RootStoreContext";
import { observer } from "mobx-react-lite";
import { Layout, Text } from "@ui-kitten/components";
import ActionList from "../widgets/actions/ActionList";
import SectionTitle from "../widgets/SectionTitle";
import AppIcon from "../AppIcon";

function CompletedActionsStack({ navigation, style }) {
  const things = useContext(RootStoreContext);
  const actionsByCause = JSON.parse(things.progression.actionsByCause);
  return (
    <Layout level="4" style={style}>
      <SectionTitle>Completed Actions</SectionTitle>
      <Layout
        level="4"
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          marginRight: 40,
        }}
      >
        <Text category="h5" style={{ marginRight: 20, fontWeight: "bold" }}>
          Total Actions
        </Text>
        <Text category="h3">
          {things.progression.totalActionsCompletedCount}
        </Text>
      </Layout>
      <Layout
        level="2"
        style={{
          width: "80%",
          height: 1,
          alignSelf: "center",
        }}
      ></Layout>
      <Layout
        level="4"
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          marginRight: 40,
        }}
      >
        <Text category="h5" style={{ marginRight: 20 }}>
          Environmental Justice
        </Text>
        <AppIcon name="environment" size={20} style={{ marginRight: 20 }} />
        <Text category="h3">
          {actionsByCause["Environmental Justice"].count}
        </Text>
      </Layout>
      <Layout
        level="4"
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          marginRight: 40,
        }}
      >
        <Text category="h5" style={{ marginRight: 20 }}>
          Criminal Justice Reform
        </Text>
        <AppIcon name="crime" size={24} style={{ marginRight: 20 }} />
        <Text category="h3">{actionsByCause["Legal Justice"].count}</Text>
      </Layout>
      <Layout
        level="4"
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          marginRight: 40,
        }}
      >
        <Text category="h5" style={{ marginRight: 20 }}>
          LGBTQ+ Justice
        </Text>
        <AppIcon name="lgbtq" size={24} style={{ marginRight: 20 }} />
        <Text category="h3">
          {actionsByCause["Gender and LGBTQ+ Justice"].count}
        </Text>
      </Layout>
      <Layout
        level="4"
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          marginRight: 40,
        }}
      >
        <Text category="h5" style={{ marginRight: 20 }}>
          Racial Justice
        </Text>
        <AppIcon name="race" size={24} style={{ marginRight: 20 }} />
        <Text category="h3">{actionsByCause["Racial Justice"].count}</Text>
      </Layout>
      <Layout
        level="4"
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          marginRight: 40,
        }}
      >
        <Text category="h5" style={{ marginRight: 20 }}>
          Economic Justice
        </Text>
        <AppIcon name="economic" size={24} style={{ marginRight: 17 }} />
        <Text category="h3">{actionsByCause["Economic Justice"].count}</Text>
      </Layout>
      <ActionList
        itemList={things.completed}
        navigation={navigation}
        horizontal={false}
      />
    </Layout>
  );
}

export default observer(CompletedActionsStack);
