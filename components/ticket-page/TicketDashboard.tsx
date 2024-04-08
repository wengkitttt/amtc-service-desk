import { View, XStack, YStack, Text } from "tamagui";
import { TicketNumberBoxModel } from "../../models/ticket";
import { TouchableOpacity } from "react-native";

function TicketNumberBox({ count, title }: TicketNumberBoxModel) {
  return (
    <View borderRadius={"$2"} backgroundColor={"#E5E7E9"} width={"$9"} padding={"$4"}>
      <YStack>
        <View paddingVertical="$1">
          <Text color={"black"} fontSize="$7" textAlign="center">
            {count > 999 ? "999+" : count.toString()}
          </Text>
        </View>
        <View>
          <Text color={"black"} fontSize="$4" textAlign="center">
            {title}
          </Text>
        </View>
      </YStack>
    </View>
  );
}

function TicketDashboard(props: { filterFunction: (arg0: string) => void }) {
  const total: TicketNumberBoxModel = {
    count: 100,
    title: "All",
  };

  const open: TicketNumberBoxModel = {
    count: 50,
    title: "Open",
  };

  const closed: TicketNumberBoxModel = {
    count: 20,
    title: "Closed",
  };

  const onHold: TicketNumberBoxModel = {
    count: 30,
    title: "On Hold",
  };
  return (
    <View paddingTop="$5" paddingBottom="$5">
      <XStack justifyContent="space-evenly">
        <TouchableOpacity onPress={() => props.filterFunction("ALL")}>
          <TicketNumberBox {...total} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.filterFunction("OPEN")}>
          <TicketNumberBox {...open} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.filterFunction("CLOSED")}>
          <TicketNumberBox {...closed} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.filterFunction("ONHOLD")}>
          <TicketNumberBox {...onHold} />
        </TouchableOpacity>
      </XStack>
    </View>
  );
}

export default TicketDashboard;
