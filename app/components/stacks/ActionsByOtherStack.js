import React, { useContext } from "react";
import { RootStoreContext } from "../../store/RootStoreContext";
import { observer } from "mobx-react-lite";
import { Layout } from "@ui-kitten/components";
import SectionLinkSmall from "../widgets/SectionLinkSmall";
import SectionLink from "../widgets/SectionLink";
import SectionTitle from "../widgets/SectionTitle";
import routes from "../../navigation/routes";
import Engagements from "../../assets/svg/Engagements";
import AppIcon from "../../components/AppIcon";

function ActionsByTypeStack({ navigation, style }) {
  const things = useContext(RootStoreContext);
  async function handleSectionButtonPress(title) {
    navigation.navigate(routes.ACTIONLISTING, title);
  }
  return (
    <Layout level="4" style={style}>
      <SectionTitle>More ways to get involved</SectionTitle>
      <SectionLink
        title="Engagements"
        buttonTitle="Get deeply involved"
        image={Engagements(200, 150)}
        onPress={() => handleSectionButtonPress("Engagements")}
      />
      <Layout level="4" style={style} />
      <SectionLinkSmall
        title="Browse all actions"
        buttonTitle="See all actions"
        image={<AppIcon name="browseAllActions" size={70} />}
        onPress={() => handleSectionButtonPress("All actions")}
      />
    </Layout>
  );
}

export default observer(ActionsByTypeStack);
