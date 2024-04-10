import { Stack, Tabs, useRouter } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import {
  Button,
  Form,
  Input,
  Label,
  ScrollView,
  Text,
  TextArea,
  View,
  XStack,
  YStack,
} from "tamagui";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { TicketFormModel } from "../../../models/ticket";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { SelectDropDown } from "../../../components/general/SelectDropDown";

type Props = {
  mode: string;
  ticketCode?: string;
};

export default function TicketForm({ mode = "Add", ticketCode }: Props) {
  const [modalHeader, setModalHeader] = useState("Add Ticket");
  const [actionName, setActionName] = useState("Add");
  const router = useRouter();
  const { control, register, handleSubmit } = useForm<TicketFormModel>();
  const onSubmit: SubmitHandler<TicketFormModel> = (data) => console.log(data);

  useEffect(() => {
    updateHeader();
  }, []);

  function updateHeader() {
    switch (mode) {
      case "Add": {
        setModalHeader("Add Ticket");
        setActionName("Add");
        break;
      }
      case "Edit": {
        setModalHeader(`Edit ${ticketCode}`);
        setActionName("Save");
        break;
      }
      case "View": {
        setModalHeader(`View ${ticketCode}`);
        setActionName("");
        break;
      }
    }
  }

  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerTitle: modalHeader,
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Text>Cancel</Text>
            </TouchableOpacity>
          ),
          headerRight: () =>
            mode != "View" && (
              <TouchableOpacity onPress={handleSubmit(onSubmit)}>
                <Text>{actionName}</Text>
              </TouchableOpacity>
            ),
        }}
      />
      <ScrollView marginTop="$5" paddingHorizontal="$3">
        <YStack gap="$5">
          <YStack gap="$3">
            <Text>Customer Information</Text>
            <XStack>
              <Label width={110}>
                <Text color={"red"}>*</Text> Name:
              </Label>
              <Input flex={1} {...register("customerName")} />
            </XStack>
            <XStack>
              <Label width={110}>Email:</Label>
              <Input flex={1} {...register("customerEmail")} />
            </XStack>
            <XStack>
              <Label width={110}>Phone:</Label>
              <Input flex={1} {...register("customerContactNumber")} />
            </XStack>
          </YStack>
          <YStack gap="$3">
            <Text>Case Information</Text>
            <XStack>
              <Label width={110}>
                <Text color={"red"}>*</Text> Subject:
              </Label>
              <Input flex={1} {...register("ticketSubject")} />
            </XStack>
            <XStack>
              <Label width={110}>Description:</Label>
              <TextArea flex={1} {...register("ticketDescription")} />
            </XStack>
            <XStack>
              <Label width={110}>Status:</Label>
              <SelectDropDown {...register("status")} />
            </XStack>
            <XStack>
              <Label width={110}>Priority:</Label>
              <SelectDropDown {...register("ticketPriority")} />
            </XStack>
            <XStack>
              <Label width={110}>Estimated Date:</Label>
              <Controller
                name="estimateStartDate"
                control={control}
                render={({ field: { value } }) => (
                  <RNDateTimePicker
                    style={{ flex: 1 }}
                    value={value || new Date()} // Provide a default value if value is empty
                  />
                )}
              />
              <Text alignSelf="center" marginLeft="$2">
                To
              </Text>
              <Controller
                name="estimateEndDate"
                control={control}
                render={({ field: { value } }) => (
                  <RNDateTimePicker
                    style={{ flex: 1 }}
                    value={value || new Date()} // Provide a default value if value is empty
                  />
                )}
              />
            </XStack>
            <XStack>
              <Label width={110}>Actual Date:</Label>
              <Controller
                name="actualStartDate"
                control={control}
                render={({ field: { value } }) => (
                  <RNDateTimePicker
                    style={{ flex: 1 }}
                    value={value || new Date()} // Provide a default value if value is empty
                  />
                )}
              />
              <Text alignSelf="center" marginLeft="$2">
                To
              </Text>
              <Controller
                name="actualEndDate"
                control={control}
                render={({ field: { value } }) => (
                  <RNDateTimePicker
                    style={{ flex: 1 }}
                    value={value || new Date()} // Provide a default value if value is empty
                  />
                )}
              />
            </XStack>
            <XStack>
              <Label width={110}>Remark:</Label>
              <TextArea flex={1} {...register("ticketRemark")} />
            </XStack>
          </YStack>
        </YStack>
      </ScrollView>
    </SafeAreaView>
  );
}
