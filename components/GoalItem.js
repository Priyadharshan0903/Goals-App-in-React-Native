import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = (props) => {
  function deleteHandler() {
    props.onDelete();
  }
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#5926ab" }}
        onPress={props.onDelete.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <View style={styles.goalText}>
          <Text>{props.text}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    borderColor: "#5926ab",
  },
  pressedItem: {
    opacity: 0.7,
  },
  goalText: {
    color: "#5926ab",
    paddingLeft: 30,
    paddingVertical: 10,
    padding: 8,

    // marginVertical: 1,rrrrR
    backgroundColor: "#fff",
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#5926ab",
  },
});

export default GoalItem;
