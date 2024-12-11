import { KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import React, { PropsWithChildren } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
export default function KeyboardAwareScrollView({
  children,
}: PropsWithChildren) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: "white" }}
      keyboardVerticalOffset={110}
    >
      <ScrollView
        style={{ backgroundColor: "white" }}
        contentContainerStyle={{
          flexGrow: 1,
          padding: 10,
          gap: 5,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <SafeAreaView edges={["bottom"]} style={{flex: 1}}>{children}</SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
