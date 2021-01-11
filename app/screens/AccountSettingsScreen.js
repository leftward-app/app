import React, { useState, useEffect } from "react";
import telemetry from "../analytics/telemetry";
import { StyleSheet, Alert } from "react-native";
import Screen from "../components/Screen";
import AuthForm from "../components/AuthForm";
import { Auth } from "aws-amplify";
import { Button, Layout, Text } from "@ui-kitten/components";

function AccountSettingsScreen({ navigation }) {
  telemetry((eventTitle = "viewAccountSettingsScreen"), (onMount = true));

  const [error, setError] = useState();
  const [emailVerified, setEmailVerified] = useState();
  const [cognitoUser, setCognitoUser] = useState();
  const useMountEffect = (fun) => useEffect(fun, []);
  const checkVerification = async () => {
    const response = await Auth.currentAuthenticatedUser();
    setCognitoUser(response);
    setEmailVerified(response.signInUserSession.idToken.payload.email_verified);
  };
  useMountEffect(() => {
    checkVerification();
  });

  const handleSubmit = async (userInfo) => {
    try {
      const result = await Auth.verifyCurrentUserAttributeSubmit(
        "email",
        userInfo.code
      );
      checkVerification();
      Alert.alert("Success!", "Email confirmed.", [{ text: "OK" }]);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmitPassword = async (userInfo) => {
    try {
      await Auth.changePassword(
        cognitoUser,
        userInfo.password,
        userInfo.newPassword
      );
      Alert.alert("Success!", "Password Changed.", [{ text: "OK" }]);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <Screen
      back={true}
      scrolling={false}
      navigation={navigation}
      paddingHorizontal={20}
    >
      {!emailVerified && (
        <Layout level="4" style={{ paddingBottom: 50 }}>
          <Text category="h4" style={{ paddingBottom: 10 }}>
            Verify Email
          </Text>
          <Button
            style={{ marginBottom: 10 }}
            onPress={() => Auth.verifyCurrentUserAttribute("email")}
            color="secondary"
          >
            Send Confirmation Code
          </Button>
          <AuthForm
            fields={["code"]}
            onSubmit={handleSubmit}
            submitTitle={"Confirm"}
            error={error}
          ></AuthForm>
        </Layout>
      )}
      <Layout level="4">
        <Text category="h4" style={{ paddingBottom: 10 }}>
          Change Password
        </Text>
        <AuthForm
          fields={["password", "newPassword", "newPasswordConfirmation"]}
          onSubmit={handleSubmitPassword}
          submitTitle={"Change Password"}
          error={error}
        ></AuthForm>
      </Layout>
    </Screen>
  );
}

export default AccountSettingsScreen;
