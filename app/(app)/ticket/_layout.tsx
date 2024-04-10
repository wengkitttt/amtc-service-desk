import { Stack } from "expo-router";
export default function TicketLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="ticket-form" />
    </Stack>
  );
}
