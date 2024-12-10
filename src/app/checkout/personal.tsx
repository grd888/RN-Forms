import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import CustomTextInput from "../../components/CustomTextInput";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";

export default function PersonalDetailsForm() {
  const [fullname, setFullname] = useState("");

  const onNext = () => {
    console.log(fullname);
    router.push("/checkout/payment");
  };
  return (
    <KeyboardAwareScrollView>
      <Text>Personal Details</Text>

      <CustomTextInput
        placeholder="Full name"
        label="Full name"
      />
      <CustomTextInput
        placeholder="Full name"
        label="Full name"
      />
      <CustomTextInput
        placeholder="Full name"
        label="Full name"
      />
      <CustomTextInput
        placeholder="Full name"
        label="Full name"
      />
      <CustomTextInput
        placeholder="Full name"
        label="Full name"
      />
      <CustomTextInput
        placeholder="Address"
        label="Address"
      />

      <View style={{ flexDirection: "row", gap: 5 }}>
        <CustomTextInput
          placeholder="City"
          label="City"
          containerStyle={{ flex: 1 }}
        />
        <CustomTextInput
          placeholder="1234"
          label="Post code"
          containerStyle={{ flex: 1 }}
        />
      </View>

      <CustomTextInput
        placeholder="2321234567"
        label="Phone number"
        inputMode="tel"
      />

      <CustomButton
        title="Next"
        style={styles.button}
        onPress={onNext}
      />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    gap: 5,
  },
  button: { marginTop: "auto" },
});
