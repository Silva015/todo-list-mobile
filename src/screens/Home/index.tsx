import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Clipboard } from "../../../assets/images/clipboard";
import { Logo } from "../../../assets/images/logo";
import { Plus } from "../../../assets/images/plus";
import { styles } from "./styles";
import { Task } from "../../components/Task";

export function Home() {
  const numberOfTasksCreated = 1; // Replace with the actual number of tasks created

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
          <Task id="1" text="Eita pourran" checked={false} />
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
