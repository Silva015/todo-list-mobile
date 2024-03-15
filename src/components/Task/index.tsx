import { View, Text } from "react-native";
import { styles } from "./styles";
import { Check } from "../../../assets/images/check";
import { Trash } from "../../../assets/images/trash";
import { CheckConfirmed } from "../../../assets/images/check-confirmed";

interface TaskProps {
  id: string;
  text: string;
  checked: boolean;
}

export function Task({ id, text, checked }: TaskProps) {
  return (
    <View style={styles.container} id={id}>
      <View style={styles.innerView}>
        {checked ? (
          <>
            <CheckConfirmed />
            <Text style={styles.textChecked}>{text}</Text>
          </>
        ) : (
          <>
            <Check />
            <Text style={styles.text}>{text}</Text>
          </>
        )}
      </View>
      <Trash />
    </View>
  );
}
