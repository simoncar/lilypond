import React, { Component } from "react";
import { Ionicons, Feather } from "@expo/vector-icons";
import { Platform, StyleSheet, FlatList, Text, View } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { ListItem } from "../components/ListItem";
import Api from "../data/Api";

class JobFamilyScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    var jobFamilies = Api.getJobFamilies();
    this.setState({
      data: jobFamilies,
    });
  };

  _renderItem({ item, index }) {
    //console.log("item/index:", item, index);
    console.log("-----------");
    return (
      <RectButton
        style={[styles.option]}
        onPress={() => {
          const { navigation } = this.props;
          navigation.navigate("JobLevel", {
            jobFamily: item.jobFamily,
          });
        }}>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center", paddingHorizontal: 8 }}>
          <View>
            <Ionicons name={item.icon} size={22} color="rgba(0,0,0,0.35)" />
          </View>
          <View>
            <Text style={styles.optionText}>{item.jobFamily}</Text>
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

JobFamilyScreen.navigationOptions = {
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

export default JobFamilyScreen;
