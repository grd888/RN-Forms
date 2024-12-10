import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";

export default function ConfirmForm() {
  const onNext = () => {
    router.dismissAll();
    router.back();
  };
  return (
    <KeyboardAwareScrollView>
      <Text>Confirm form submission</Text>
      <CustomButton
        title="Next"
        style={styles.button}
        onPress={onNext}
      />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "white", flex: 1, padding: 10 },
  button: { marginTop: "auto", marginBottom: 25 },
});
