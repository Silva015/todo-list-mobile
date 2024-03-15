import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { Clipboard } from "../../../assets/images/clipboard";
import { Logo } from "../../../assets/images/logo";
import { Plus } from "../../../assets/images/plus";
import { styles } from "./styles";
import { Task } from "../../components/Task";

export function Home() {
  const numberOfTasksCreated = 1; // Replace with the actual number of tasks created
  // Importando o JSON
  const mockup = require("../../../mockup.json");

  // Usando o JSON
  console.log(mockup);

  return (
    <>
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
            <Text style={styles.numberOfTasks}>{numberOfTasksCreated}</Text>
          </View>
          <View style={styles.tasksAndNumberView}>
            <Text style={styles.tasksConcludedText}>Concluídas</Text>
            <Text style={styles.numberOfTasks}>0</Text>
          </View>
        </View>

        {numberOfTasksCreated > 0 ? (
          <View>
            <FlatList
              data={mockup}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Task id={item.id} text={item.text} checked={item.checked} />
              )}
            />
          </View>
        ) : (
          <View style={styles.emptyTasksView}>
            <Clipboard />
            <Text style={styles.emptyTasksText}>
              <Text style={styles.emptyTasksTextBold}>
                Você ainda não tem tarefas cadastradas {"\n"}
              </Text>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      </View>
    </>
  );
}
