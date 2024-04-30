import { StyleSheet, Dimensions, StatusBar, Platform } from "react-native";
import { PrimaryColor } from "./colors";

export const { width, height } = Dimensions.get('screen')
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 6,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        paddingHorizontal: 16
    },
    titleText: {
        fontSize: 28,
        fontWeight: 'bold',
        textTransform: "capitalize",
        marginVertical: 12
    },
    buttonTextPimary: {
        fontSize: 24,
        textTransform: 'capitalize',
        fontWeight: "600",
        paddingHorizontal: 8,
        color: '#fff',

    },
    buttonPrimary: {
        backgroundColor: PrimaryColor,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 48,
        padding: 4,
        borderRadius: 12,
        marginVertical: 12
    },
    locationContainer: {
        borderRadius: 12,
        padding: 10,
        borderWidth: 1,
        borderColor: '#c7c7c7',
        height: 200
    },
    imaginaryBox: {
        borderWidth: 1,
        borderColor: '#c7c7c7',
        height: 180,
        borderRadius: 2,
        padding: 4
    },
    pickDropSelector: {
        flexDirection: 'row',
        padding: 6,
        height: 60,
        borderBottomColor: '#c7c7c7',
        borderBottomWidth: 1,
        alignItems: 'center',
    },
    labelStyle: {
        fontSize: 12,
        color: '#777',
    },
    cityTextInput: {
        width: width - 140,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000'
    },
    modalContainerStyle: {
        backgroundColor: "#fff",
        marginHorizontal: 8,
        borderRadius: 8
    },
    tabContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 4
    },
    tab: {
        width: width / 2.5,
        padding: 8,
    },
    tabLink: {
        textAlign: 'center',
        fontSize: 20,
        textTransform: 'uppercase'
    },
    ticketCard: {
        backgroundColor: '#fff',
        marginVertical: 4,
        borderRadius: 8,
        height: 360
    },
    ticketCardHeader: {
        backgroundColor: PrimaryColor,
        height: 160,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        padding: 8,
        marginBottom: 0,
    },
    ticketCardFooter: {
        height: 224,
        // backgroundColor: '#A3A3A3',
        padding: 8,
        paddingTop: 40,
        marginTop: -2,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8
    },
    cardDivider: {
        position: 'relative',
        width: width,
        left: -20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    circle: {
        height: 36,
        width: 36,
        backgroundColor: '#ededed',
        borderRadius: 18
    },
    noBookings: {
        padding: 4,
        justifyContent: 'center',
        height: 60,
        backgroundColor: '#fff'
    },
    btnPhone: {
        height: 50,
        width: width - 40,
        // borderColor: "black",
        // borderWidth: 1,
        // backgroundColor: "#fff",
        borderRadius: 8,
        // alignItems: "center",
        flexDirection: "row",
        // justifyContent: "space-evenly",
        marginVertical: 5,
    },
    phoneTextInputStyle: { fontSize: 18, position: "absolute", top: 10, left: "25%" },
    phoneCodeTextStyle: { fontSize: 18, fontWeight: 'normal', position: "absolute", top: 10, left: 4 },
    bottomTextButtons: { flex: 1, justifyContent: 'flex-end', alignItems: 'center' },
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
        flexWrap: 'wrap',
        maxWidth: width - 60
    },
    image: {
        width: "100%",
        height: 200,
    },
    heading: {
        fontSize: 20,
        textAlign: "center",
        marginVertical: 20,
        fontWeight: "bold",
    },
    phone: {
        alignItems: "center",
        marginTop: 20,
        paddingVertical: 10,
        height: height - 400
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
        marginHorizontal: 10
    },
    bottomContainer: {
        minHeight: 100,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bottomText: {
        paddingBottom: 8,
        fontWeight: 'bold',
        fontSize: 16
    }
})