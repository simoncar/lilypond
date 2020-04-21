import React, { Component } from "react";
import { Ionicons, Feather } from "@expo/vector-icons";
import { Platform, StyleSheet, FlatList, Text, View } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { ListItem } from "../components/ListItem";
import Api from "../data/Api";

class JobLevelScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      loadingMessage: "Search...",
      data: [],
      fullData: [],
      error: null,
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    const { jobFamily } = this.props.route.params;
    var jobFamilies = Api.getJobFamilies();
    var jobLevels = {};
    console.log("show data for:", jobFamily, jobFamilies);
    // iterate over each element in the array
    for (var i = 0; i < jobFamilies.length; i++) {
      // look for the entry with a matching `code` value
      if (jobFamilies[i].jobFamily == jobFamily) {
        console.log("we found it"); // we found it
        jobLevels = jobFamilies[i].jobLevels; // is the matched result
      }
    }
    //const jobLevels = jobFamilies.finance.jobLevels;

    this.setState({
      data: jobLevels,
    });
  }

  _onPress() {
    // const { navigation } = this.props;
    console.log("on press");

    //navigation.navigate("JobScreen");
  }

  _renderItem({ item, index }) {
    //navigation.navigate("BeaconListing", { purpleList: true });

    return (
      <RectButton
        style={[styles.option]}
        onPress={() => {
          const { navigation } = this.props;
          navigation.navigate("Job", {});
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
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.data}
          renderItem={this._renderItem.bind(this)}
          keyExtractor={(_, idx) => "key" + idx}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}

JobLevelScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginLeft: 10,
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
