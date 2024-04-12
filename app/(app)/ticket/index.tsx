import { ListFilter, Plus, Search } from "@tamagui/lucide-icons";
import { Tabs, useRouter } from "expo-router";
import { SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import { Circle, Text, View, XStack, YStack } from "tamagui";
import { TicketContainerModel } from "../../../models/ticket";

import { useState } from "react";
import { format } from "date-fns";
import { mockTicketContainers } from "../../../dummy/ticket";
import TicketDashboard from "../../../components/ticket-page/TicketDashboard";
import SearchBox from "../../../components/general/SearchBox";

export default function TicketPage() {
  const router = useRouter();
  const [masterTickets, setMasterTickets] = useState<TicketContainerModel[]>(
    mockTicketContainers as TicketContainerModel[]
  );

  const [tickets, setTickets] = useState<TicketContainerModel[]>(
    mockTicketContainers as TicketContainerModel[]
  );

  function searchTicketList(term: string) {
    if (!term) {
      setTickets(masterTickets);
      return;
    }

    const searchTerm = term.toLowerCase().replace(/\s/g, "");

    const filteredTicketList = masterTickets.filter((item) => {
      const codeMatch = item.code.toLowerCase().replace(/\s/g, "").includes(searchTerm);
      const titleMatch = item.title.toLowerCase().replace(/\s/g, "").includes(searchTerm);
      const createByMatch = item.createBy.toLowerCase().replace(/\s/g, "").includes(searchTerm);

      return codeMatch || titleMatch || createByMatch;
    });
    setTickets(filteredTicketList);
  }

  function filterTicketList(type: string) {
    const upperCaseType = type.toUpperCase();
    if (type == "ALL") {
      setTickets(masterTickets);
      return;
    }

    const filteredTicketList = masterTickets.filter(
      (item) => item.status.toUpperCase() == upperCaseType
    );
    setTickets(filteredTicketList);
  }

  function renderTicketContainer(ticket: TicketContainerModel) {
    const { id, code, status, title, createBy, createDate, urgentLevel } = ticket;
    return (
      <View
        paddingHorizontal="$1.5"
        borderColor="#E0E0E0"
        borderBottomWidth="$0.5"
        paddingTop="$4"
        paddingBottom="$4"
        key={id}>
        <XStack justifyContent="space-between">
          <XStack gap={"$3"}>
            <YStack justifyContent="center">
              {urgentLevel == "High" ? (
                <Circle size={10} backgroundColor={"$red9"} />
              ) : urgentLevel == "Medium" ? (
                <Circle size={10} backgroundColor="$orange9" />
              ) : (
                <Circle size={10} backgroundColor="$green9" />
              )}
            </YStack>
            <YStack gap={"$1.5"}>
              <XStack gap={"$2"}>
                <Text>#{code}</Text>
                <Text>|</Text>
                <Text>{status}</Text>
              </XStack>
              <XStack>
                <Text>{title}</Text>
              </XStack>
            </YStack>
          </XStack>

          <YStack gap={"$1.5"}>
            <XStack justifyContent={"flex-end"}>
              <Text>{createBy}</Text>
            </XStack>
            <XStack>
              <Text>{format(createDate, "dd/MM/yyyy hh:mmaaa")}</Text>
            </XStack>
          </YStack>
        </XStack>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tabs.Screen
        options={{
          headerTitle: "",
          headerLeft: () => (
            <Text fontSize={"$5"} marginLeft="$2">
              Ticket Management
            </Text>
          ),
          headerRight: () => (
            <XStack gap={"$2"} marginRight="$2">
              <TouchableOpacity
                style={{ padding: 10 }}
                onPress={() => router.push("/(app)/ticket/ticket-form")}>
                <Plus />
              </TouchableOpacity>
            </XStack>
          ),
        }}
      />
      <TicketDashboard filterFunction={filterTicketList} />
      <XStack gap="$4" marginBottom="$2">
        <SearchBox size="$3" searchFunction={searchTicketList} />
        <TouchableOpacity style={{ alignSelf: "center" }}>
          <ListFilter />
        </TouchableOpacity>
      </XStack>

      <ScrollView>
        <YStack gap={"$2"}>{tickets.map((item) => renderTicketContainer(item))}</YStack>
      </ScrollView>
    </SafeAreaView>
  );
}
