import React, { useContext } from "react";
import { RootStoreContext } from "../../store/RootStoreContext";
import { observer } from "mobx-react-lite";
import { StyleSheet, View, Modal } from "react-native";
import { Button, Layout, Text } from "@ui-kitten/components";
import AlphaWelcome from "../../assets/svg/AlphaWelcome";

function AlphaWelcomeModal() {
  const things = useContext(RootStoreContext);
  return (
    <Modal
      animationType={"none"}
      transparent={true}
      visible={things.alphaWelcomeModalVisible}
      style={{ alignItems: "center" }}
    >
      <Layout level="4" style={styles.backdrop}>
        <Layout
          level="4"
          style={{
            width: "80%",
            borderRadius: 45,
            padding: 20,
            alignItems: "center",
          }}
        >
          <Text
            category="h3"
            style={{
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: 10,
            }}
          >
            Welcome to the Leftward Alpha!
          </Text>
          {AlphaWelcome(200, 200)}
          <Text
            category="s1"
            style={{
              fontWeight: "bold",
              textAlign: "center",
              marginVertical: 10,
            }}
          >
            Thank you for being the first to use Leftward!
          </Text>
          <Text
            category="p2"
            style={{
              fontWeight: "bold",
              textAlign: "center",
              marginVertical: 10,
            }}
          >
            Your feedback will be critical as we work towards our mission:
            removing the barriers between values and action. As you use the app,
            don’t focus on detailed testing or hunting for bugs. Right now,
            we’re just trying to figure out if our idea is on track or not. Use
            the app like you would naturally!
          </Text>
          <Text
            category="p2"
            style={{
              fontWeight: "bold",
              textAlign: "center",
              marginVertical: 10,
            }}
          >
            We’ll be in touch for feedback soon. In the meantime, enjoy the app
            and make a difference!
          </Text>

          <Button
            status="success"
            onPress={() => things.updateAlphaWelcomeModalVisible(false)}
            style={{ marginTop: 20 }}
          >
            Continue
          </Button>
        </Layout>
      </Layout>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default observer(AlphaWelcomeModal);
