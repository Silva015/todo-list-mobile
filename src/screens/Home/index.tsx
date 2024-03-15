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
import { Mockup } from "../../../mockup";
import { useState } from "react";

export function Home() {
  const [idCount, setIdCount] = useState(5); // Replace with the actual number of tasks created
  const numberOfTasksCreated = 1; // Replace with the actual number of tasks created
  const [mockup, setMockup] =
    useState<{ id: string; text: string; checked: boolean }[]>(Mockup);
  const [newTask, setNewTask] = useState("");

  function handleAddTask() {
    if (newTask) {
      const newTaskObject = {
        id: String(idCount),
        text: newTask,
        checked: false,
      };

      setMockup([...mockup, newTaskObject]);
      setNewTask("");
      setIdCount(idCount + 1);
    }
  }

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
          onChangeText={(text) => setNewTask(text)}
          value={newTask}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <Plus />
        </TouchableOpacity>
      </View>

      <View style={styles.tasksView}>
        <View style={styles.tasksRegistered}>
          <View style={styles.tasksAndNumberView}>
            <Text style={styles.tasksCreatedText}>Criadas</Text>
            <Text style={styles.numberOfTasks}>{mockup.length}</Text>
          </View>
          <View style={styles.tasksAndNumberView}>
            <Text style={styles.tasksConcludedText}>Concluídas</Text>
            <Text style={styles.numberOfTasks}>
              {mockup.filter((item: any) => item.checked).length}
            </Text>
          </View>
        </View>

        {numberOfTasksCreated > 0 ? (
          <View>
            <FlatList
              data={mockup}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Task
                  id={item.id}
                  text={item.text}
                  checked={item.checked}
                  mockup={mockup}
                  setMockup={setMockup}
                />
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
