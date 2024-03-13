import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { Logo } from "./assets/images/logo";
import { Plus } from "./assets/images/plus";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.titleView}>
        <Logo />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button}>
          <Plus />
        </TouchableOpacity>
      </View>

      <View style={styles.tasksView}>
        <View style={styles.tasksRegistered}>
          <View style={styles.tasksAndNumberView}>
            <Text style={styles.tasksCreatedText}>Criadas</Text>
            <Text style={styles.numberOfTasks}>3</Text>
          </View>
          <View style={styles.tasksAndNumberView}>
            <Text style={styles.tasksConcludedText}>Concluídas</Text>
            <Text style={styles.numberOfTasks}>3</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272727",
  },
  titleView: {
    backgroundColor: "#0D0D0D",
    width: "100%",
    height: "25%",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#262626",
    borderRadius: 5,
    color: "#FFF",
    padding: 16,
    fontSize: 16,
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#000",
  },
  button: {
    width: 55,
    height: 55,
    borderRadius: 5,
    backgroundColor: "#1F6F9F",
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    marginTop: -28,
    zIndex: 1,
  },
  tasksView: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    marginTop: -28,
    paddingTop: 28,
    paddingHorizontal: 24,
  },
  tasksRegistered: {
    flexDirection: "row",
    marginTop: 32,
    justifyContent: "space-between",
  },
  tasksCreatedText: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#4EA8DE",
  },
  tasksConcludedText: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#8284FA",
  },
  numberOfTasks: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#D9D9D9",
    backgroundColor: "#333333",
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 12,
    overflow: "hidden",
  },
  tasksAndNumberView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  teste: {
    borderRadius: 10,
  },
});
