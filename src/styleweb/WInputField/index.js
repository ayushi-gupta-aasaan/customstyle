import React from "react";
import { View, TextInput, Text } from "react-native-web";

function UselessTextInput(props) {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={40}
    />
  );
}
export default function UselessTextInputMultiline() {
  const [value, onChangeText] = React.useState("");
  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
    <View
      style={{
        backgroundColor: value,
        borderBottomColor: "#000000",
        borderBottomWidth: 1
      }}
    >
      <UselessTextInput
        multiline
        numberOfLines={4}
        onChangeText={text => onChangeText(text)}
        value={value}
        placeholder={"enter your name"}
      />
      <Text>{value}</Text>
    </View>
  );
}
