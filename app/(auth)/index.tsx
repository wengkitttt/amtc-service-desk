import { useRouter } from "expo-router";
import { Pressable, SafeAreaView, Text } from "react-native";

export default function LoginPage() {
  const router = useRouter();
  return (
    <SafeAreaView>
      <Text>Login Page</Text>
      <Pressable onPress={() => router.navigate("/register")}>
        <Text>Go to register</Text>
      </Pressable>
      <Pressable onPress={() => router.replace("/(app)")}>
        <Text>Go to app</Text>
      </Pressable>
    </SafeAreaView>
  );
}
