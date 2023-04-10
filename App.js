import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Button,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { useState } from "react";
export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((prev) => [
      ...prev,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    console.log(courseGoals);
  }
  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
    console.log("After deletion", courseGoals);
  }
  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Button title="Add New Goal" onPress={startAddGoalHandler} />
        {modalIsVisible && (
          <GoalInput
            visible={modalIsVisible}
            onAddGoal={addGoalHandler}
            onEndGoal={endAddGoalHandler}
          />
        )}

        <Text
          style={{
            marginTop: 30,
            width: "90%",
            color: "#fff",
            fontWeight: "bold",
            paddingHorizontal: 110,
            paddingVertical: 30,
            backgroundColor: "#5926ab",
          }}
        >
          LIST OF GOALS...
        </Text>
        <View style={styles.goalsContainer}>
          {/* {courseGoals.map((goal, id) => (
          <View style={styles.goalText}>
            <Text key={id} onPress={(id) => deleteGoalHandler(id)}>
              {id + 1} - {goal}
            </Text>
          </View>
        ))} */}
          <View>
            <FlatList
              data={courseGoals}
              renderItem={(itemData) => {
                return (
                  <GoalItem
                    text={itemData.item.text}
                    id={itemData.item.id}
                    onDelete={deleteGoalHandler}
                  />
                );
              }}
              keyExtractor={(item, index) => {
                return item.id;
              }}
              alwaysBounceVertical={false}
            />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingLeft: 24,
    backgroundColor: "#cac4f5",
    color: "#7548bd",
  },

  goalsContainer: {
    marginTop: 20,
    width: "90%",
  },
});
