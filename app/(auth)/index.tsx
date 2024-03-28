import { useRouter } from "expo-router";
import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { Button, Image, Input, Text, XStack, YStack } from "tamagui";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default function LoginPage() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <YStack>
        <Image
          alignSelf="center"
          source={{
            width: 256,
            height: 256,
            uri: "https://hnsmwaqjfwhfavfdpdao.supabase.co/storage/v1/object/public/general/logo.png",
          }}
        />
        <YStack marginTop={"$8"}>
          <XStack>
            <Input flex={1} placeholder="Email" />
          </XStack>
          <XStack>
            <Input flex={1} placeholder="Password" secureTextEntry={true} />
          </XStack>
          <Button marginTop={"$5"}>Login</Button>
        </YStack>
        <YStack marginTop={"$5"} gap="$3" alignItems="center">
          <Text>
            Don't have an account yet?{" "}
            <TouchableOpacity>
              <Text>Sign Up</Text>
            </TouchableOpacity>
          </Text>
          <TouchableOpacity>
            <Text>Forget Password</Text>
          </TouchableOpacity>
        </YStack>
      </YStack>
    </SafeAreaView>
  );
}
