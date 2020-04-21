import React, { Component } from "react";
import { Ionicons, Feather } from "@expo/vector-icons";
import { Platform, StyleSheet, FlatList, Text, View, TouchableOpacity } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { ListItem } from "../components/ListItem";
import Api from "../data/Api";

class JobLevelScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      descriptionLines: 10,
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    const { jobFamily } = this.props.route.params;
    var jobFamilies = Api.getJobFamilies();
    var jobLevels = {};
    var description = "";

    console.log("show data for:", jobFamily, jobFamilies);
    // iterate over each element in the array
    for (var i = 0; i < jobFamilies.length; i++) {
      // look for the entry with a matching `code` value
      if (jobFamilies[i].jobFamily == jobFamily) {
        console.log("we found it"); // we found it
        jobLevels = jobFamilies[i].jobLevels; // is the matched result
        description = jobFamilies[i].description;
      }
    }
    //const jobLevels = jobFamilies.finance.jobLevels;

    this.setState({
      data: jobLevels,
      description: description,
    });
  }

  _onPress() {
    // const { navigation } = this.props;
    console.log("on press");

    //navigation.navigate("JobScreen");
  }

  _renderItem({ item, index }) {
    //navigation.navigate("BeaconListing", { purpleList: true });
    const { jobFamily } = this.props.route.params;
    return (
      <RectButton
        style={[styles.option]}
        onPress={() => {
          const { navigation } = this.props;
          navigation.navigate("Job", { level: item.level, jobFamily: jobFamily });
        }}>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center", paddingHorizontal: 8 }}>
          <View>
            <Ionicons name="ios-flower" size={22} color="rgba(0,0,0,0.35)" />
          </View>
          <View>
            <Text style={styles.optionText}>{item.level}</Text>
          </View>

          <View style={{ marginHorizontal: 8, flex: 1, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
            {<Feather name="chevron-right" size={22} color="#777777" />}
          </View>
        </View>
      </RectButton>
    );
  }

  renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  render() {
    return (
      <ScrollView>
        <View style={{ backgroundColor: "#ecf1f4", padding: 10 }}>
          <TouchableOpacity
            onPress={() => {
              if (this.state.descriptionLines == 10) {
                this.setState({ descriptionLines: 100 });
              } else {
                this.setState({ descriptionLines: 10 });
              }
            }}>
            <View style={{ backgroundColor: "white", borderRadius: 10, padding: 15 }}>
              <Text numberOfLines={this.state.descriptionLines}>{this.state.description}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.padding}>
          <View style={{ flexDirection: "row", alignItems: "center", paddingBottom: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Role</Text>
            <View style={{ marginHorizontal: 8, flex: 1, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
              <Text style={{ fontSize: 14, color: "grey" }}>Career Track and Level</Text>
            </View>
          </View>
          <FlatList
            data={this.state.data}
            renderItem={this._renderItem.bind(this)}
            keyExtractor={(_, idx) => "key" + idx}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </View>
      </ScrollView>
    );
  }
}

JobLevelScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf1f4",
    padding: 10,
  },
  padding: {
    padding: 15,
    backgroundColor: "#ecf1f4",
  },
  separator: {
    height: 1,
    backgroundColor: "#CED0CE",
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
    marginLeft: 10,
  },
});

export default JobLevelScreen;
