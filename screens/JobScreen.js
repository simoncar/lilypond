import { Ionicons } from "@expo/vector-icons";

import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Switch } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";

export default function JobScreen(props) {
  const { navigation } = props;

  const [showMasterSz, setShowMasterSz] = useState(false);
  const [showLeadershipSz, setShowLeadershipSz] = useState(false);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.padding}>
        <Text style={{ fontSize: 30, fontWeight: "bold", paddingBottom: 15 }}>Software Engineer</Text>
        <View style={{ backgroundColor: "white", borderRadius: 10, padding: 15 }}>
          <Text>This is a bit of a description about the Junior Programmer, some text goes in here and we yap on a bit.</Text>
        </View>
        <Text style={{ fontSize: 20, fontWeight: "bold", paddingTop: 20, paddingBottom: 15 }}>Master the Craft</Text>
        <View style={{ backgroundColor: "white", borderRadius: 10, padding: 15 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 10 }}>Core</Text>
          <View style={{ backgroundColor: "white", borderRadius: 10, padding: 15 }}>
            <Text style={{ marginBottom: 10 }}>
              Typically requires a Bachelor’s degree and a minimum of 2 years of related experience; or an advanced degree without
              experience; or equivalent work experience.
            </Text>
            <View style={{ borderBottomWidth: 1, borderBottomColor: "#ecf1f4" }} />
            <Text style={{ marginBottom: 10, marginTop: 10 }}>
              Typically requires a Bachelor’s degree and a minimum of 2 years of related experience; or an advanced degree without
              experience; or equivalent work experience.
            </Text>
            <View style={{ borderBottomWidth: 1, borderBottomColor: "#ecf1f4" }} />
            <Text style={{ marginBottom: 10, marginTop: 10 }}>
              Typically requires a Bachelor’s degree and a minimum of 2 years of related experience; or an advanced degree without
              experience; or equivalent work experience.
            </Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => {
                setShowMasterSz(!showMasterSz);
              }}>
              <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 10 }}>Specialisation</Text>
            </TouchableOpacity>
            <View style={{ marginHorizontal: 8, flex: 1, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
              <Switch
                value={showMasterSz}
                onValueChange={(v) => {
                  setShowMasterSz(!showMasterSz);
                }}
              />
            </View>
          </View>

          {_renderMasterSpecialization(showMasterSz)}
        </View>

        <Text style={{ fontSize: 20, fontWeight: "bold", paddingTop: 20, paddingBottom: 15 }}>Leadership Capabilities</Text>
        <View style={{ backgroundColor: "white", borderRadius: 10, padding: 15 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 10 }}>Core</Text>
          <View style={{ backgroundColor: "white", borderRadius: 10, padding: 15 }}>
            <Text style={{ marginBottom: 10 }}>
              Typically requires a Bachelor’s degree and a minimum of 2 years of related experience; or an advanced degree without
              experience; or equivalent work experience.
            </Text>
            <View style={{ borderBottomWidth: 1, borderBottomColor: "#ecf1f4" }} />
            <Text style={{ marginBottom: 10, marginTop: 10 }}>
              Typically requires a Bachelor’s degree and a minimum of 2 years of related experience; or an advanced degree without
              experience; or equivalent work experience.
            </Text>
            <View style={{ borderBottomWidth: 1, borderBottomColor: "#ecf1f4" }} />
            <Text style={{ marginBottom: 10, marginTop: 10 }}>
              Typically requires a Bachelor’s degree and a minimum of 2 years of related experience; or an advanced degree without
              experience; or equivalent work experience.
            </Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => {
                setShowLeadershipSz(!showLeadershipSz);
              }}>
              <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 10 }}>Specialisation</Text>
            </TouchableOpacity>
            <View style={{ marginHorizontal: 8, flex: 1, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
              <Switch
                value={showLeadershipSz}
                onValueChange={(v) => {
                  setShowLeadershipSz(!showLeadershipSz);
                }}
              />
            </View>
          </View>

          {_renderLeadershipCapabilities(showLeadershipSz)}
        </View>
      </View>
    </ScrollView>
  );
}

function _renderMasterSpecialization(show) {
  if (show) {
    return (
      <View style={{ backgroundColor: "white", borderRadius: 10, padding: 15 }}>
        <Text style={{ marginBottom: 10 }}>
          Typically requires a Bachelor’s degree and a minimum of 2 years of related experience; or an advanced degree without experience;
          or equivalent work experience.
        </Text>
        <View style={{ borderBottomWidth: 1, borderBottomColor: "#ecf1f4" }} />
        <Text style={{ marginBottom: 10, marginTop: 10 }}>
          Typically requires a Bachelor’s degree and a minimum of 2 years of related experience; or an advanced degree without experience;
          or equivalent work experience.
        </Text>
        <View style={{ borderBottomWidth: 1, borderBottomColor: "#ecf1f4" }} />
        <Text style={{ marginBottom: 10, marginTop: 10 }}>
          Typically requires a Bachelor’s degree and a minimum of 2 years of related experience; or an advanced degree without experience;
          or equivalent work experience.
        </Text>
      </View>
    );
  } else {
    return;
  }
}

function _renderLeadershipCapabilities(show) {
  if (show) {
    return (
      <View style={{ backgroundColor: "white", borderRadius: 10, padding: 15 }}>
        <Text style={{ marginBottom: 10 }}>
          Typically requires a Bachelor’s degree and a minimum of 2 years of related experience; or an advanced degree without experience;
          or equivalent work experience.
        </Text>
        <View style={{ borderBottomWidth: 1, borderBottomColor: "#ecf1f4" }} />
        <Text style={{ marginBottom: 10, marginTop: 10 }}>
          Typically requires a Bachelor’s degree and a minimum of 2 years of related experience; or an advanced degree without experience;
          or equivalent work experience.
        </Text>
        <View style={{ borderBottomWidth: 1, borderBottomColor: "#ecf1f4" }} />
        <Text style={{ marginBottom: 10, marginTop: 10 }}>
          Typically requires a Bachelor’s degree and a minimum of 2 years of related experience; or an advanced degree without experience;
          or equivalent work experience.
        </Text>
      </View>
    );
  } else {
    return;
  }
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
    backgroundColor: "#ecf1f4",
  },
  padding: {
    flex: 1,
    padding: 15,
  },
  contentContainer: {
    paddingTop: 15,
    paddingBottom: 500,
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
