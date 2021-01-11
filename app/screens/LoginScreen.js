import React, { useState, useContext } from "react";
import { RootStoreContext } from "../store/RootStoreContext";
import { StyleSheet, View } from "react-native";
import routes from "../navigation/routes";
import AuthForm from "../components/AuthForm";
import Screen from "../components/Screen";
import { Auth } from "aws-amplify";
import useAuth from "../auth/useAuth";
import { Layout, Button } from "@ui-kitten/components";

function LoginScreen({ navigation }) {
  telemetry((eventTitle = "viewLoginScreen"), (onMount = true));
  const things = useContext(RootStoreContext);
  const auth = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    try {
      const result = await Auth.signIn(userInfo.username, userInfo.password);
      Auth.currentSession().then((data) => {
        auth.logIn(data, (newUser = false));
      });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Screen
      scrolling={false}
      back={true}
      navigation={navigation}
      paddingHorizontal={20}
    >
      <AuthForm
        fields={["username", "password"]}
        onSubmit={handleSubmit}
        submitTitle={"Log In"}
        error={error}
      ></AuthForm>
      <Button
        style={styles.forgot}
        onPress={() => navigation.navigate(routes.RECOVERPASSWORD)}
      >
        Forgot Password?
      </Button>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
  },
});

export default LoginScreen;
