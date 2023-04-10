import {
  Button,
  TextInput,
  View,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";
import { Pressable } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
    props.onEndGoal();
  }
  function goalInputHandler(enteredText) {
    console.log(enteredText);
    setEnteredGoalText(enteredText);
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require("../assets/goal.png")} style={styles.image} />
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goals..."
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="white" />
          </View>
          <View style={styles.cancelButton}>
            <Button title="Cancel" onPress={props.onEndGoal} color="white" />
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#cac4f5",
  },
  // textContainer: {
  //   flexDirection: "row",
  //   borderBottomColor: "#7548bd",
  //   borderBottomWidth: 2,
  //   paddingBottom: 24,
  //   paddingLeft: 20,
  //   height: 100,
  //   width: "90%",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  image: {
    height: 100,
    width: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#5926ab",
    borderRadius: 5,
    width: "100%",
    marginRight: 2,
    padding: 8,
    marginLeft: 8,
    color: "#5926ab",
  },
  button: {
    backgroundColor: "#5926ab",
    borderRadius: 5,
    marginTop: 8,
    marginHorizontal: 8,
    width: 140,
  },
  cancelButton: {
    backgroundColor: "#f31282",
    borderRadius: 5,
    marginTop: 8,
    marginHorizontal: 8,
    width: 140,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 14,
  },
  // input: {
  //   borderWidth: 2,
  //   borderRadius: 2,
  //   borderStyle: "dashed",
  //   borderColor: "white",
  //   padding: 8,
  //   marginRight: 8,
  //   width: "80%",
  // },
});
export default GoalInput;
