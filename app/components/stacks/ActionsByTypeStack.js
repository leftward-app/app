import React, { useContext } from "react";
import { RootStoreContext } from "../../store/RootStoreContext";
import { observer } from "mobx-react-lite";
import { Layout } from "@ui-kitten/components";
import SectionLink from "../widgets/SectionLink";
import routes from "../../navigation/routes";
import QuickActions from "../../assets/svg/QuickActions";
import Projects from "../../assets/svg/Projects";

function ActionsByTypeStack({ navigation, style }) {
  const things = useContext(RootStoreContext);
  async function handleSectionButtonPress(title) {
    navigation.navigate(routes.ACTIONLISTING, title);
  }
  return (
    <Layout level="4" style={style}>
      <SectionLink
        title="Quick Actions"
        buttonTitle="Make a difference now"
        image={QuickActions(150, 300)}
        onPress={() => handleSectionButtonPress("Quick Actions")}
      />
      <Layout level="4" style={style} />
      <SectionLink
        title="Projects"
        buttonTitle="See powerful actions"
        image={Projects(150, 150)}
        onPress={() => handleSectionButtonPress("Projects")}
      />
    </Layout>
  );
}

export default observer(ActionsByTypeStack);
