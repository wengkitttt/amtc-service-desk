import { Search } from "@tamagui/lucide-icons";
import {} from "react-native";
import { XStack, Input, SizeTokens } from "tamagui";

function SearchBox(props: { size: SizeTokens; searchFunction: (arg0: string) => void }) {
  return (
    <XStack
      flexGrow={1}
      padding="$2"
      borderWidth="$1"
      borderColor={"white"}
      borderRadius={"$6"}
      alignItems="center"
      gap="$2">
      <Search size={"$1"} />
      <Input
        borderWidth="$0"
        onChangeText={(text) => props.searchFunction(text)}
        flex={1}
        size={props.size}
        placeholder={`Search...`}
      />
    </XStack>
  );
}

export default SearchBox;
