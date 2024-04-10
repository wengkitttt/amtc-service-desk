import { Tabs } from "expo-router";
import { Ticket, LayoutDashboard } from "@tamagui/lucide-icons";

export default function AppLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "white" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ color }) => <LayoutDashboard marginTop={"$3"} size={"$2"} color={color} />,
        }}
      />
      <Tabs.Screen
        name="ticket"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ color }) => <Ticket marginTop={"$3"} size={"$2"} color={color} />,
        }}
      />
    </Tabs>
  );
}
