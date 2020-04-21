import { Ionicons } from "@expo/vector-icons";

import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Switch } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";

export default function JobScreen(props) {
  const { navigation } = props;

  const { jobFamily, level } = props.route.params;

  const [showMasterSz, setShowMasterSz] = useState(false);
  const [showLeadershipSz, setShowLeadershipSz] = useState(false);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.padding}>
        <Text style={{ fontSize: 20, fontWeight: "bold", paddingBottom: 15 }}>{level}</Text>
        <View style={{ backgroundColor: "white", borderRadius: 10, padding: 15 }}>
          <Text>This is a bit of a description about the Junior Programmer, some text goes in here and we yap on a bit.</Text>
        </View>
        <Text style={{ fontSize: 20, fontWeight: "bold", paddingTop: 20, paddingBottom: 15 }}>Master the Craft</Text>
        <View style={{ backgroundColor: "white", borderRadius: 10, padding: 15 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 10 }}>Core</Text>
          <View style={{ backgroundColor: "white", borderRadius: 10, padding: 15 }}>
            <Text style={{ marginBottom: 5, fontWeight: "bold" }}>Account Payable and Receivable</Text>
            <Text style={{ marginBottom: 10 }}>
              Provides information on payables and receivables to aid in assessing the financial well-being of the business.
            </Text>
            <View style={{ borderBottomWidth: 1, borderBottomColor: "#ecf1f4" }} />
            <Text style={{ marginBottom: 5, marginTop: 10, fontWeight: "bold" }}>Accounting Principles </Text>
            <Text style={{ marginBottom: 10 }}>
              Applies knowledge of accounting practices and procedures to complete accounting assignments.
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
