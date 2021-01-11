import React, { useContext } from "react";
import { RootStoreContext } from "../../store/RootStoreContext";
import { observer } from "mobx-react-lite";
import { Layout } from "@ui-kitten/components";
import SectionLinkSmall from "../widgets/SectionLinkSmall";
import SectionTitle from "../widgets/SectionTitle";
import routes from "../../navigation/routes";
import AppIcon from "../AppIcon";

function ActionsByTypeStack({ navigation, style }) {
  const things = useContext(RootStoreContext);
  async function handleSectionButtonPress(title) {
    navigation.navigate(routes.ACTIONLISTING, title);
  }
  return (
    <Layout level="4" style={style}>
      <SectionTitle>Connect with causes</SectionTitle>
      <SectionLinkSmall
        title="Environmental Justice"
        buttonTitle="Browse Actions"
        image={<AppIcon name="environment" size={70} />}
        onPress={() => handleSectionButtonPress("Environmental Justice")}
      />
      <Layout level="4" style={style} />
      <SectionLinkSmall
        title="Criminal Justice Reform"
        buttonTitle="Browse Actions"
        image={<AppIcon name="crime" size={70} />}
        onPress={() => handleSectionButtonPress("Criminal Justice Reform")}
      />
      <Layout level="4" style={style} />
      <SectionLinkSmall
        title="LGBTQ+ Justice"
        buttonTitle="Browse Actions"
        image={<AppIcon name="lgbtq" size={70} />}
        onPress={() => handleSectionButtonPress("LGBTQ+ Justice")}
      />
      <Layout level="4" style={style} />
      <SectionLinkSmall
        title="Racial Justice"
        buttonTitle="Browse Actions"
        image={<AppIcon name="race" size={70} />}
        onPress={() => handleSectionButtonPress("Racial Justice")}
      />
      <Layout level="4" style={style} />
      <SectionLinkSmall
        title="Economic Justice"
        buttonTitle="Browse Actions"
        image={<AppIcon name="economic" size={70} />}
        onPress={() => handleSectionButtonPress("Economic Justice")}
      />
    </Layout>
  );
}

export default observer(ActionsByTypeStack);
