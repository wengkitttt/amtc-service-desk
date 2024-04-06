import { Tabs, useRouter } from "expo-router";
import { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { Text } from "tamagui";

export default function AppPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/ticket/");
  }, []);

  return (
    <SafeAreaView>
      <Text>App Page</Text>
    </SafeAreaView>
  );
}
