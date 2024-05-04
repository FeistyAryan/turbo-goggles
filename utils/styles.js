import { StyleSheet, Dimensions, StatusBar, Platform } from "react-native";
import { PrimaryColor } from "./colors";

export const { width, height } = Dimensions.get("screen");
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 6,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 16,
  },
  titleText: {
    fontSize: 28,
    fontWeight: "bold",
    textTransform: "capitalize",
    marginVertical: 12,
  },
  buttonTextPimary: {
    fontSize: 20,
    textTransform: "capitalize",
    fontWeight: "600",
    paddingHorizontal: 8,
    color: "#fff",
  },
  buttonPrimary: {
    backgroundColor: PrimaryColor,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 48,
    padding: 4,
    borderRadius: 12,
    marginVertical: 12,
  },
  locationContainer: {
    borderRadius: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: "#c7c7c7",
    height: 200,
  },
  imaginaryBox: {
    borderWidth: 1,
    borderColor: "#c7c7c7",
    height: 180,
    borderRadius: 2,
    padding: 4,
  },
  pickDropSelector: {
    flexDirection: "row",
    padding: 6,
    height: 60,
    borderBottomColor: "#c7c7c7",
    borderBottomWidth: 1,
    alignItems: "center",
  },
  labelStyle: {
    fontSize: 12,
    color: "#777",
  },
  cityTextInput: {
    width: width - 140,
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  modalContainerStyle: {
    backgroundColor: "#fff",
    marginHorizontal: 8,
    borderRadius: 8,
  },
  tabContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 4,
  },
  tab: {
    width: width / 2.5,
    padding: 8,
  },
  tabLink: {
    textAlign: "center",
    fontSize: 20,
    textTransform: "uppercase",
  },
  ticketCard: {
    backgroundColor: "#fff",
    marginVertical: 12,
    borderRadius: 8,
    height: 410,
  },
  ticketCardHeader: {
    backgroundColor: PrimaryColor,
    height: 230,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: 8,
    marginBottom: 0,
  },
  ticketCardFooter: {
    height: 224,
    // backgroundColor: '#A3A3A3',
    padding: 8,
    marginBottom: 10,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  BusType: {
    color: "#E1D9D1",
    fontWeight: "bold",
  },
  ticketDivider: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "75%",
    paddingBottom: 4,
  },
  dividerInTicket: {
    color: "#E1D9D1",
    height: 2,
  },
  ticketDivider2: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 10,
  },
  ticketRowAlign: {
    flexDirection: "row",
  },
  ticketColumnAlign: {
    width: "50%",
    flexDirection: "row",
    alignItems: "flex-end", // Aligns its children to the end
  },
  PickUpPoint: {
    color: "#E1D9D1",
    fontWeight: "600",
    fontSize: 12,
  },
  DropPoint: {
    color: "#E1D9D1",
    marginLeft: 19,
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flexDirection: "row",
    fontWeight: "600",
    fontSize: 12,
  },
  BusProvider: {
    color: "#E1D9D1",
    fontWeight: "bold",
  },
  cardDivider: {
    position: "relative",
    width: width,
    left: -20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  circle: {
    height: 30,
    width: 36,
    backgroundColor: "#ededed",
    borderRadius: 18,
    marginTop: -14,
  },
  noBookings: {
    padding: 4,
    justifyContent: "center",
    height: 60,
    backgroundColor: "#fff",
  },
  // Start of phone text input
  inputStyle: {
    height: 48,
    width: width - 40,
    borderRadius: 8,
    marginVertical: 5,
    backgroundColor: "#fff"
  },
  phoneTextContainerStyle: {
    borderColor: '#fff',
    height: 44,
    marginVertical: 2,
    maxWidth: 260,
    textAlignVertical: 'center',
    backgroundColor: "#fff"
  },
  phoneTextInputStyle: {
    fontSize: 18,
    position: "absolute",
    top: 10,
    left: "5%",
    width: width - 60
  },
  phoneCodeTextStyle: {
    fontSize: 18
  },


  bottomTextButtons: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  roundedTextInput: {
    height: 40,
    width: 40,
    borderRadius: 6,
    backgroundColor: "#fff",
    borderWidth: 1,
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  termsCondition: {
    color: "#777",
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
    flexWrap: "wrap",
    maxWidth: width - 60,
  },
  image: {
    width: "100%",
    height: 200,
  },
  headingSignIn: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 20,
    fontWeight: "bold",
  },
  phone: {
    alignItems: "center",
    marginTop: 20,
    paddingVertical: 10,
    height: height - 400,
  },
  orLine: {
    borderBottomColor: "#c7c7c7",
    borderBottomWidth: 1,
    width: width / 2.6,
    alignSelf: "center",
  },
  orText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginHorizontal: 10,
  },
  bottomContainer: {
    minHeight: 100,
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottomText: {
    paddingBottom: 8,
    fontWeight: "bold",
    fontSize: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 25,
    marginTop: 39,
  },
  dividerRateUs: {
    flexDirection: "row",
    alignItems: "center", // Align items vertically
    paddingHorizontal: 20, // Added horizontal padding
    paddingBottom: 20, // Added bottom padding
  },
  imageRateUs: {
    height: 100,
    width: 100,
    marginTop: 40,
  },
  textContainer: {
    flex: 1, // Allow text to take remaining space
    marginLeft: 20, // Added left margin for separation
  },
  text: {
    marginTop: 15,
    marginBottom: 4, // Added bottom margin for separation
    fontWeight: "bold",
    fontSize: 19,
  },
  text2: {
    color: "darkgray",
    paddingTop: 10,
  },
  buttonContainer: {
    alignItems: "center",
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#ff8c00",
    paddingHorizontal: 20,
    paddingVertical: 9,
    borderRadius: 15,
    color: "white",
    fontWeight: "bold",
    width: 270,
    textAlign: "center",
    fontSize: 18,
  },
  box: {
    borderRadius: 12,
    margin: 20, // Added margin around the box
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 0.2,
    },
    shadowOpacity: 0.01, // Reduced shadow opacity for a very light effect
    shadowRadius: 2.0,
    elevation: 4, // Adjusted elevation for a subtle lift
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  headingText: {
    fontSize: 14,
    marginLeft: 2,
    marginTop: 2,
  },
  scroll: {
    height: "25%",
    width: "100%",
  },
  card: {
    backgroundColor: "white",
    height: 100,
    width: 140,
    borderRadius: 8,
    marginTop: 0,
    padding: 12,
    shadowColor: "#000", // Black shadow
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.27,
    shadowRadius: 2.62,
    elevation: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 2,
  },
  availability: {
    marginTop: 0,
    textAlign: "center",
    borderRadius: 2,
    padding: 2,
    fontWeight: "bold",
    width: "100%",
    fontSize: 15,
  },
  bold: {
    fontWeight: "bold",
    fontSize: 18,
  },
  extra: {
    marginTop: 20,
    height: 130,
    width: 140,
    borderRadius: 8,
    margin: 4,
  },
  offers: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 25,
    marginTop: 39,
  },
  subtitle: {
    color: "darkgray",
    fontSize: 14,
    marginLeft: 25,
  },
  main: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 340,
    height: 200,
    shadowColor: "#000", // Black shadow
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.27,
    shadowRadius: 2.62,
    elevation: 8,
    marginRight: 4,
    borderColor: "gray",
    alignItems: "center",
    backgroundColor: "orange",
    borderRadius: 20,
    margin: 8,
  },
  imageDiv: {
    width: 100,
    height: 200,
    borderRadius: 4,
  },
  imageOffers: {
    height: "100%",
    width: "100%",
    borderRadius: 4,
  },
  savings: {
    fontWeight: "700",
    marginBottom: 8,
  },

  couponCode: {
    backgroundColor: "red",
    marginTop: 25,
    marginRight: 100,
    marginLeft: 19,
    textAlign: "center",
    height: 40,
    borderStyle: "dotted",
    borderWidth: 3,
    paddingTop: 9,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontWeight: "bold",
    borderRadius: 3,
    width: 100,
  },
  title1: {
    backgroundColor: "white",
    height: 100,
    paddingTop: 50,
    paddingLeft: 19,
  },
  titleTextAccountJS: {
    fontSize: 20,
  },
  personalPortfolio: {
    backgroundColor: "white",
    margin: 8,
    height: 100,
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  portfolioInfo: {
    paddingLeft: 8,
    paddingTop: 4,
    alignItems: "flex-start",
    width: "80%",
  },
  icon: {
    paddingTop: 4,
  },
  arrow: {},
  item: {
    marginHorizontal: 8,
    height: 50,
    backgroundColor: "white",
    paddingLeft: 4,
    justifyContent: "center",
  },
  arrowContainer: {
    position: "absolute",
    right: 16,
    alignSelf: "center",
    top: 25,
  },
  sections: {
    color: "gray",
    paddingLeft: 8,
  },
  logout: {
    height: 50,
    backgroundColor: "white",
    margin: 8,
    justifyContent: "center",
    paddingLeft: 8,
  },
  logoutText: {
    color: "gray",
  },
  tickets: {
    height: 180,
    backgroundColor: "white",
    marginTop: 20,
    marginHorizontal: 12,
    borderRadius: 16,
    padding: 18,
  },
  horizontal: {
    flexDirection: "row",
  },
  vertical: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  busOfferContainer: {
    backgroundColor: "#ff9c00",
    alignItems: "center",
    borderRadius: 8,
    marginVertical: 20,
    paddingVertical: 5,
  },
  second: {
    marginTop: 20,
  },
  right: {
    position: "absolute",
    right: 0,
  },
  departureTime: {
    fontWeight: "bold",
  },
  journeyTime: {
    color: "gray",
  },
  seats: {
    color: "gray",
  },
  startingFrom: {
    fontWeight: "bold",
  },
  busProvider: {
    fontWeight: "bold",
  },
  busType: {
    color: "gray",
  },
  arrivalTime: {
    fontWeight: "bold",
  },
  ratings: {
    fontWeight: "bold",
    color: "white",
  },
  iconDiv: {
    flexDirection: "row",
    backgroundColor: "limegreen",
    alignItems: "center",
    width: 50,
    borderRadius: 6,
    justifyContent: "center",
  },
  middle: {
    position: "absolute",
    left: 140,
  },
  filter: {
    maxHeight: 50,
    backgroundColor: "white",
  },
  items: {
    paddingHorizontal: 8,
    borderColor: "lightgray",
    borderWidth: 1,
    height: 40,
    marginLeft: 16,
    justifyContent: "center",
    borderRadius: 8,
    flexDirection: "row",
  },
  filterButton: {
    padding: 4,
    borderColor: "#c7c7c7",
    borderWidth: 1,
    height: 40,
    minWidth: 80,
    marginHorizontal: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
    borderRadius: 8,
  },
  filterIcon: {
    marginRight: 5,
  },
  filterText: {
    fontWeight: "bold",
  },
  paymentOption: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    marginTop: 15,
    paddingBottom: 25,
    width: 310,
  },

  optionName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  optionMethods: {
    flexWrap: "wrap",
    textAlign: "center",
    opacity: 0.6,
  },
  payButton: {
    backgroundColor: "#f99333",
    paddingVertical: 8,
    paddingHorizontal: 8,
    textAlign: "center",
    borderRadius: 5,
  },
  payButtonText: {
    fontSize: 15,
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
  headerText: {
    fontSize: 16,
    marginLeft: 10,
  },
  passengerItem: {
    marginBottom: 20,
    backgroundColor: "#ffffff",
    padding: 25,
    borderRadius: 12,
  },
  passengerHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    height: 55,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 18,
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfInput: {
    width: "48%",
  },
  continueButton: {
    backgroundColor: "#f99333",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 5,
  },
  continueButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  radioButton: {
    flexDirection: "row",
    width: "48%",
    borderColor: "#ccc",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 30,
    height: 48,
    marginTop: 10,
    paddingLeft: 10,
  },
  Traveldate: {
    color: "#E1D9D1",
    fontWeight: "bold",
  },
  Travelday: {
    color: "#E1D9D1",
    fontWeight: "bold",
  },
  transportName: {
    color: "#E1D9D1",
    fontWeight: "bold",
    marginLeft: 170,
    marginTop: -25,
    marginBottom: 25,
  },
  DepartureTime: {
    color: "#E1D9D1",
    fontWeight: "bold",
    fontSize: 20,
  },
  DepartureAddress: {
    color: "#E1D9D1",
    fontWeight: "bold",
    fontSize: 18,
    fontSize: 14,
    marginTop: 8,
  },
  TimeDuration: {
    color: "#E1D9D1",
    fontWeight: "bold",
    fontSize: 14,
    textDecorationLine: "underline",
    paddingLeft: 40,
  },
  ArrivalTime: {
    color: "#E1D9D1",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 10,
  },
  ArrivalAddress: {
    color: "#E1D9D1",
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 8,
  },
  Seatno: {
    color: "black",
    fontWeight: "bold",
    marginTop: -15,
  },

  TicketNo: {
    color: "black",
    fontWeight: "bold",
    marginTop: -5,
  },
  PNR: {
    color: "black",
    fontWeight: "bold",
  },
  Fare: {
    color: "black",
    fontWeight: "bold",
  },
  external: {
    paddingTop: 12,
    alignItems: "flex-start",
    marginBottom: 2,
  },
  dividerthin: {
    height: 1,
    color: "#d5dcde",
  },
  confirmation: {
    fontSize: 20,
    color: "green",
    fontWeight: "bold",
    textAlign: "center",
    margin: 12,
  },
  share: {
    height: 66,
    backgroundColor: "white",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    color: "black",
    marginTop: 12,
    padding: 20,
  },
  cancel: {
    fontWeight: "bold",
    fontSize: 12,
  },
  check: {
    color: "green",
  },
  checkDiv: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  down: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  lottie: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    pointerEvents: "none",
  },

  row: {
    flexDirection: "row",
    justifyContent: 'space-between',
    padding: 4
  },

  roundedTable: {
    borderWidth: 1,
    borderColor: "#c7c7c7",
    borderTopLeftRadius: 12,
    padding: 8,
    borderTopRightRadius: 12
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: "#c7c7c7",
    padding: 4
  },
  tableDivision: {
    fontWeight: '600',
    marginHorizontal: 12,
    textAlign: 'center',
    flexWrap: 'wrap',
    maxWidth: 140
  },
  tableHeading: {
    fontWeight: '400',
    margin: 4,
    textAlign: 'center'
  }

});
