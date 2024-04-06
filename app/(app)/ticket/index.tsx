import { Plus, Search } from "@tamagui/lucide-icons";
import { Tabs } from "expo-router";
import { FlatList, SafeAreaView } from "react-native";
import { Button, Text, View, XStack } from "tamagui";
import { TicketContainer } from "../../../models/ticket";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const mockTicketContainers: TicketContainer[] = [
  {
    id: uuidv4(),
    code: "TC001",
    title: "Bug Fixing",
    status: "Open",
    urgentLevel: "High",
    createBy: "John Doe",
    createDate: new Date("2024-04-01T08:00:00"),
  },
  {
    id: uuidv4(),
    code: "TC002",
    title: "Feature Enhancement",
    status: "In Progress",
    urgentLevel: "Medium",
    createBy: "Jane Smith",
    createDate: new Date("2024-04-02T10:30:00"),
  },
  {
    id: uuidv4(),
    code: "TC003",
    title: "UI Improvement",
    status: "Closed",
    urgentLevel: "Low",
    createBy: "Alice Johnson",
    createDate: new Date("2024-04-03T14:45:00"),
  },
];

export default function TicketPage() {
  const [tickets, setTickets] = useState<TicketContainer[]>(mockTicketContainers);

  function renderTicketContainer(ticket: TicketContainer) {
    return <View></View>;
  }

  return (
    <SafeAreaView>
      <Tabs.Screen
        options={{
          headerTitle: "",
          headerLeft: () => <Text>Ticket Management</Text>,
          headerRight: () => (
            <XStack gap={"$2"}>
              <Button chromeless icon={Search}></Button>
              <Button chromeless icon={Plus}></Button>
            </XStack>
          ),
        }}
      />
      <FlatList
        data={tickets}
        renderItem={({ item }) => renderTicketContainer(item)}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
