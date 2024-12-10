import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";

export default function PaymentDetailsForm() {
  const onNext = () => {
    router.push("/checkout/confirm");
  };
  return (
    <KeyboardAwareScrollView>
        <Text>Payment Details</Text>
        <CustomButton
          title="Submit"
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
