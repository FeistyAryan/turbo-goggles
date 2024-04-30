import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/FontAwesome";
import Icon3 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon5 from "react-native-vector-icons/FontAwesome5";
import Icon6 from "react-native-vector-icons/AntDesign";
import { Divider } from "react-native-paper";

export default function Help() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.head}>
          <Text style={styles.buddy}>Ghumantoo: Buddy</Text>
          <View style={styles.rightContent}>
            <Text style={styles.english}>English</Text>
            <Icon
              name="chatbubble-ellipses-outline"
              size={30}
              style={styles.icon}
            />
          </View>
        </View>
        <TouchableOpacity style={[styles.second]}>
          <Text>View all issues</Text>
          <Icon6 name="caretright" size={20} style={styles.icon2} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.second]}>
          <Text>View all bookings</Text>
          <Icon6 name="caretright" size={20} style={styles.icon2} />
        </TouchableOpacity>
        <Text style={styles.faqhead}>FAQs(Select a help topic)</Text>
        <View style={styles.faq}>
          <View style={styles.faqcontainer}>
            <Icon name="bus" size={30} style={styles.icon} />
            <TouchableOpacity style={styles.divide}>
              <View style={styles.last}>
                <Text>New bus booking help</Text>
                <Text style={styles.lightText}>
                  Bus availablity/Child fare...
                </Text>
              </View>
              <Icon6 name="caretright" size={20} style={styles.icon2} />
            </TouchableOpacity>
          </View>
          <Divider style={styles.divider} />
          <TouchableOpacity style={styles.faqcontainer}>
            <Icon6 name="exclamationcircle" size={30} style={styles.icon} />
            <View style={styles.divide}>
              <View style={styles.last}>
                <Text>Technical Issues</Text>
                <Text style={styles.lightText}>Need some technical help?</Text>
              </View>
              <Icon6 name="caretright" size={20} style={styles.icon2} />
            </View>
          </TouchableOpacity>
          <Divider style={styles.divider} />
          <TouchableOpacity style={styles.faqcontainer}>
            <Icon5 name="mobile-alt" size={40} style={styles.icon} />
            <View style={styles.divide}>
              <View style={styles.last}>
                <Text>Ghumantoo Referral Help</Text>
                <Text style={styles.lightText}>
                  Need help with ghumantoo referral...
                </Text>
              </View>
              <Icon6 name="caretright" size={20} style={styles.icon2} />
            </View>
          </TouchableOpacity>
          <Divider style={styles.divider} />
          <TouchableOpacity style={styles.faqcontainer}>
            <Icon3 name="offer" size={30} style={styles.icon} />
            <View style={styles.divide}>
              <View style={styles.last}>
                <Text>Offers</Text>
                <Text style={styles.lightText}>Need help with offers?</Text>
              </View>
              <Icon6 name="caretright" size={20} style={styles.icon2} />
            </View>
          </TouchableOpacity>
          <Divider style={styles.divider} />
          <TouchableOpacity style={styles.faqcontainer}>
            <Icon name="wallet" size={30} style={styles.icon} />
            <View style={styles.divide}>
              <View style={styles.last}>
                <Text>Ghumantoo Wallet Help</Text>
                <Text style={styles.lightText}>
                  Need any help with ghumantoo wallet...
                </Text>
              </View>
              <Icon6 name="caretright" size={20} style={styles.icon2} />
            </View>
          </TouchableOpacity>
          <Divider style={styles.divider} />
          <TouchableOpacity style={styles.faqcontainer}>
            <Icon2 name="automobile" size={30} style={styles.icon} />
            <View style={styles.divide}>
              <View style={styles.last}>
                <Text>Auto rides</Text>
                <Text style={styles.lightText}>Issue with auto ride</Text>
              </View>
              <Icon6 name="caretright" size={20} style={styles.icon2} />
            </View>
          </TouchableOpacity>
          <Divider style={styles.divider} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gainsboro",
    flex: 1,
  },
  buddy: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#ff8c00",
  },
  inner: {
    marginTop: 40,
  },
  head: {
    backgroundColor: "white",
    paddingLeft: 20,
    height: 80,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  rightContent: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  english: {
    marginRight: 10,
  },
  icon: {
    color: "#ff8c00",
    paddingRight: 8,
  },
  icon2: {},
  second: {
    marginTop: 9,
    marginRight: 4,
    backgroundColor: "white",
    paddingLeft: 20,
    height: 50,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  faq: {
    marginTop: 15,
    paddingTop: 19,
    backgroundColor: "white",
    paddingLeft: 20,
    height: 600,
    justifyContent: "space-between",
    flexDirection: "column",
  },
  faqhead: {
    fontSize: 18,
    paddingLeft: 20,
    paddingTop: 7,
    fontWeight: "bold",
  },
  faqcontainer: {
    flexDirection: "row",
    padding: 7,
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
  },
  last: {
    alignItems: "flex-start",
    width: 300,
  },
  divide: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  divider: {
    height: 1,
    backgroundColor: "grey",
    marginTop: 10,
    marginBottom: 10,
  },
  lightText: {
    color: "darkgray",
  },
});
