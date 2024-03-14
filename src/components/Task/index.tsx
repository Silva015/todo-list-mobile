import { View, Text } from "react-native";
import { styles } from "./styles";
import { Check } from "../../../assets/images/check";
import { Trash } from "../../../assets/images/trash";

interface TaskProps {
  id: string;
  text: string;
  checked: boolean;
}

export function Task({ id, text, checked }: TaskProps) {
  return (
    <View style={styles.container} id={id}>
      <View style={styles.innerView}>
        {checked ? null : <Check />}
        <Text style={styles.text}>{text}</Text>
      </View>
      <Trash />
    </View>
  );
}
