import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";

export default function JobsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.padding}>
        <OptionButton icon="md-school" label="Software Engineer" onPress={() => WebBrowser.openBrowserAsync("https://docs.expo.io")} />
        <Text>This is a bit of a description about the Junior Programmer</Text>
        <Text>The career track notes</Text>
        <Text>Level notes</Text>
        <OptionButton
          icon="md-compass"
          label="Junior Programmer (career track and level)"
          onPress={() => WebBrowser.openBrowserAsync("https://reactnavigation.org")}
        />

        <Text>This is a bit of a description about the Junior Programmer</Text>
        <Text>The career track notes</Text>
        <Text>Level notes</Text>

        <Text style={[styles.subHeading]}>Master the Craft (core)</Text>
        <Text>Category 1</Text>
        <Text>Category 2</Text>
        <Text>Category 3</Text>

        <Text style={[styles.subHeading]}>Master the Craft (specialisation)</Text>
        <Text>Category 1</Text>
        <Text>Category 2</Text>
        <Text>Category 3</Text>

        <Text style={[styles.subHeading]}>Leadership Capabilities (core)</Text>
        <Text>Category 1</Text>
        <Text>Category 2</Text>
        <Text>Category 3</Text>

        <Text style={[styles.subHeading]}>Leadership Capabilities (specialisation)</Text>
        <Text>Category 1</Text>
        <Text>Category 2</Text>
        <Text>Category 3</Text>
      </View>
    </ScrollView>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  padding: {
    flex: 1,
    padding: 15,
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: "#fdfdfd",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: "#ededed",
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: "flex-start",
    marginTop: 1,
  },
  subHeading: {
    fontSize: 25,
    alignSelf: "flex-start",
    marginTop: 1,
  },
});
