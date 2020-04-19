import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Platform, StyleSheet, FlatList, Text, View } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import Api from "../data/Api";

class HomeScreen extends React.Component {
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

  loadData = () => {
    var roleProfiles = Api.getRoleProfiles();
    console.log(roleProfiles);
    this.setState({
      data: roleProfiles,
    });
  };

  _onPress() {
    const { navigation } = this.props;
    console.log("on press");
    //navigation.navigate("JobScreen");
  }

  _renderItem({ item, index }) {
    //navigation.navigate("BeaconListing", { purpleList: true });
    return (
      <RectButton style={[styles.option]} onPress={this._onPress}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.optionIconContainer}>
            <Ionicons name={item.icon} size={22} color="rgba(0,0,0,0.35)" />
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>{item.title}</Text>
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
        <FlatList data={this.state.data} renderItem={this._renderItem.bind(this)} ItemSeparatorComponent={this.renderSeparator} />
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
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
  },
});

export default HomeScreen;
