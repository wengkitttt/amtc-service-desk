import { Tabs } from "expo-router";
import { Ticket, LayoutDashboard } from "@tamagui/lucide-icons";

export default function AppLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <LayoutDashboard size={"$2"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ticket/index"
        options={{
          headerShown: true,
          tabBarIcon: ({ color }) => <Ticket size={"$2"} color={color} />,
        }}
      />
    </Tabs>
  );
}
