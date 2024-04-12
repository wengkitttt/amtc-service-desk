import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { Input, Label, ScrollView, Text, TextArea, XStack, YStack } from "tamagui";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { TicketFormModel } from "../../../models/ticket";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { DataListModel, SelectDropDown } from "../../../components/general/SelectDropDown";

type Props = {
  mode: string;
  ticketCode?: string;
};

const statusList: DataListModel[] = [
  { id: 1, label: "Open", value: "Open" },
  { id: 2, label: "Closed", value: "Closed" },
  { id: 3, label: "On Hold", value: "On Hold" },
];

const priorityList: DataListModel[] = [
  { id: 1, label: "High", value: "High" },
  { id: 2, label: "Medium", value: "Medium" },
  { id: 3, label: "Low", value: "Low" },
];

export default function TicketForm({ mode = "Add", ticketCode }: Props) {
  const [modalHeader, setModalHeader] = useState("Add Ticket");
  const [actionName, setActionName] = useState("Add");
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TicketFormModel>();
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
              <YStack flex={1}>
                <Controller
                  control={control}
                  name="customerName"
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      flex={1}
                      placeholder="Customer Name..."
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                />
                {errors.customerName && <Text color="red">This is required.</Text>}
              </YStack>
            </XStack>
            <XStack>
              <Label width={110}>Email:</Label>
              <Controller
                control={control}
                name="customerEmail"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    flex={1}
                    placeholder="Customer Email..."
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />
            </XStack>
            <XStack>
              <Label width={110}>Phone:</Label>
              <Controller
                control={control}
                name="customerContactNumber"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    flex={1}
                    placeholder="Customer Phone..."
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />
            </XStack>
          </YStack>
          <YStack gap="$3">
            <Text>Case Information</Text>
            <XStack>
              <Label width={110}>
                <Text color={"red"}>*</Text> Subject:
              </Label>
              <YStack flex={1}>
                <Controller
                  control={control}
                  name="ticketSubject"
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      flex={1}
                      placeholder="Ticket Subject..."
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                />
                {errors.ticketSubject && <Text color="red">This is required.</Text>}
              </YStack>
            </XStack>
            <XStack>
              <Label width={110}>Description:</Label>
              <Controller
                control={control}
                name="ticketDescription"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextArea
                    flex={1}
                    placeholder="Ticket Description..."
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />
            </XStack>
            <XStack>
              <Label width={110}>Status:</Label>
              <Controller
                control={control}
                name="status"
                render={({ field: { onChange, value } }) => (
                  <SelectDropDown
                    dataList={statusList}
                    selectProps={{ onValueChange: onChange, value }}
                  />
                )}
              />
            </XStack>
            <XStack>
              <Label width={110}>Priority:</Label>
              <Controller
                control={control}
                name="ticketPriority"
                render={({ field: { onChange, value } }) => (
                  <SelectDropDown
                    dataList={priorityList}
                    selectProps={{ onValueChange: onChange, value }}
                  />
                )}
              />
            </XStack>
            <XStack>
              <Label width={110}>Estimated Date:</Label>
              <Controller
                name="estimateStartDate"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <RNDateTimePicker
                    style={{ flex: 1 }}
                    onChange={(value) => {
                      onChange(new Date(value.nativeEvent.timestamp));
                    }}
                    value={value || new Date()}
                  />
                )}
              />
              <Text alignSelf="center" marginLeft="$2">
                To
              </Text>
              <Controller
                name="estimateEndDate"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <RNDateTimePicker
                    style={{ flex: 1 }}
                    onChange={(value) => {
                      onChange(new Date(value.nativeEvent.timestamp));
                    }}
                    value={value || new Date()}
                  />
                )}
              />
            </XStack>
            <XStack>
              <Label width={110}>Actual Date:</Label>
              <Controller
                name="actualStartDate"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <RNDateTimePicker
                    style={{ flex: 1 }}
                    onChange={(value) => {
                      onChange(new Date(value.nativeEvent.timestamp));
                    }}
                    value={value || new Date()}
                  />
                )}
              />
              <Text alignSelf="center" marginLeft="$2">
                To
              </Text>
              <Controller
                name="actualEndDate"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <RNDateTimePicker
                    style={{ flex: 1 }}
                    onChange={(value) => {
                      onChange(new Date(value.nativeEvent.timestamp));
                    }}
                    value={value || new Date()}
                  />
                )}
              />
            </XStack>
            <XStack>
              <Label width={110}>Remark:</Label>
              <Controller
                control={control}
                name="ticketRemark"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextArea
                    flex={1}
                    placeholder="Ticket Remark..."
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />
            </XStack>
          </YStack>
        </YStack>
      </ScrollView>
    </SafeAreaView>
  );
}
