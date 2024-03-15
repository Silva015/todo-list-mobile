import { View, Text, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import { Check } from "../../../assets/images/check";
import { Trash } from "../../../assets/images/trash";
import { CheckConfirmed } from "../../../assets/images/check-confirmed";
import { useState } from "react";

interface TaskProps {
  id: string;
  text: string;
  checked: boolean;
  mockup: { id: string; text: string; checked: boolean }[];
  setMockup: React.Dispatch<
    React.SetStateAction<{ id: string; text: string; checked: boolean }[]>
  >;
}

export function Task({ id, text, checked, mockup, setMockup }: TaskProps) {
  const [isChecked, setIsChecked] = useState(checked);

  function handleCheckTask() {
    setIsChecked(!isChecked);

    const updatedMockup = mockup.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          checked: !isChecked,
        };
      }
      return item;
    });

    setMockup(updatedMockup);
  }

  function handleDeleteTask() {
    const updatedMockup = mockup.filter((item) => item.id !== id);
    Alert.alert("Remover tarefa", `Deseja remover a tarefa ${text}?`, [
      {
        text: "Sim",
        onPress: () => setMockup(updatedMockup),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerView}>
        {isChecked ? (
          <>
            <TouchableOpacity onPress={() => handleCheckTask()}>
              <CheckConfirmed />
            </TouchableOpacity>
            <Text style={styles.textChecked}>{text}</Text>
          </>
        ) : (
          <>
            <TouchableOpacity onPress={() => handleCheckTask()}>
              <Check />
            </TouchableOpacity>
            <Text style={styles.text}>{text}</Text>
          </>
        )}
      </View>
      <TouchableOpacity onPress={handleDeleteTask}>
        <Trash />
      </TouchableOpacity>
    </View>
  );
}
