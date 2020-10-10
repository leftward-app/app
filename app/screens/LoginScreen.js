import React, { useState } from "react";
import { StyleSheet } from "react-native";
import routes from "../navigation/routes";
import AuthForm from "../components/AuthForm";
import Screen from "../components/Screen";
import { Auth } from "aws-amplify";
import useAuth from "../auth/useAuth";
import AppButton from "../components/AppButton";

function LoginScreen({ navigation }) {
  const auth = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    try {
      const result = await Auth.signIn(userInfo.username, userInfo.password);
      Auth.currentSession().then((data) => {
        auth.logIn(data.accessToken.jwtToken);
      });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Screen style={styles.container}>
        <AuthForm
          fields={["username", "password"]}
          onSubmit={handleSubmit}
          submitTitle={"Log In"}
          error={error}
        ></AuthForm>
        <AppButton
          title="Forgot Password?"
          onPress={() => navigation.navigate(routes.RECOVERPASSWORD)}
        ></AppButton>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default LoginScreen;
