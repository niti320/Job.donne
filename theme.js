import { StyleSheet } from "react-native";


export const darkTheme = StyleSheet.create({
    statusbar: {
        backgroundColor: "#13131eff"
    },
    statusbartext:{
        style:"light",
    },
    container: {
        // padding:5,
        overflow: 'hidden',
        flex: 1,
        backgroundColor: "#14141c",
        alignItems: 'center',
        // paddingTop: 50,
        justifyContent: 'space-between',
    },
    width_margin: {
        width:"100%",
        zIndex: 5,
        // width: "90%",
        marginTop: 10,
        alignItems: "center",
        // paddingHorizontal: 15,
        gap: 15,
        // paddingVertical: 10,
        flex: 1,
    },
    bigfont: {

        color: "#ffffff",
        fontSize: 15,
        fontWeight: "bold"
    },
    topcontainer: {
        borderColor: "#ffffff0f",
        shadowColor: "#1c14667d",
        backgroundColor: "#1a1a26",
        borderWidth: 1,
        elevation: 20,
        width:"95%",
        // shadowOpacity:0.1,
        // height: 340,
        marginTop:35,
        // paddingTop: 50,
        borderRadius:20,
        paddingVertical:10,
        paddingHorizontal: 10,
        marginBottom: 5,
       

        // height:150,
        justifyContent: "center",

        gap: 8,
        // width: "100%",

    },
    about: {
        flex: 1,
        flexDirection: "row",
        gap: 10,
        borderRadius: 13,
        padding: 12,
        backgroundColor: "#1c1c2b",

    },
    headerbar: {
        gap: 5,
        width: "100%",
        flexDirection: "row",
        // gap: 7,
        justifyContent: "space-between",
        alignItems: "center",
        height: 50,
    },
    user_info: {
        justifyContent: "flex-start",
        alignItems: "center",
        flex: 1,
        paddingHorizontal:5,
        flexDirection: "row",
        // backgroundColor: "#1c1c2ba9",
        // borderWidth:1,
    },
    user_name: {
        // backgroundColor: "#ffffff05",
        // elevation:10,
        borderWidth:1,
        overflow:"hidden",
        borderColor:"#ffffff24",
        maxWidth: "100%",
        paddingLeft: 0,
        paddingRight:15,
        flexDirection:"row",
        justifyContent: "flex-start",
        alignItems: "center",
        height: 50,
        // width:"60%"
        // paddingHorizontal: 15,
        borderRadius: 20,

    },

    userimage: {
        backgroundColor: "#1c1c2b",
        borderRadius: 100,
        overflow: "hidden",
        height: 50,
        width: 40,
    },
    buttonback: {
        backgroundColor: "#1c1c2b",
    },
    buttonback2: {
        backgroundColor: "#1a1a26",
    },


    emptytext: {
        color: "white",
        fontSize: 18,
        fontFamily: 'sans-serif-light'
    },
    sort_section: {

        // paddingHorizontal:20,
        flexDirection: "row",
        height: 50,
        // marginBottom:10,

        gap: 10,
        paddingHorizontal: 5,
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center"

    },
    sort_bar: {

        // paddingHorizontal:20,
        flexDirection: "row",
        height: 50,
        // marginBottom:10,

        gap: 10,
        // paddingHorizontal: 5,
        width: "93%",
        justifyContent: "space-between",
        alignItems: "center"

    },
    sortButton: {
        // width:"50%",
        // width:150,
        // backgroundColor: "#1b1b2a",
        // elevation: 10,
        shadowColor: "#179ebc88",
        // borderWidth: 1,
        borderColor: "#ffffff33",

        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        // height:"100%",
        borderRadius: 10,
        padding: 10,
        // backgroundColor: "#0a326700",
    },
    navButton2: {
        marginTop: 30,
        height: 40,
        // width: 200,
        // marginBottom:10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 20,
        gap: 10,
        borderRadius: 20,
        // width: "50%",
        height: 50,
        backgroundColor: "#1c1c2b",

    },

    task_input: {
        flexDirection: "row",
        // gap: 10,
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: 60,

    },
    task_adder: {
        justifyContent: "center",
        alignItems: "center",
        //   width: "20%"
    },

    inputbox:
    {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 15,
        borderRadius: 20,
        backgroundColor: "#242436",

        height: "100%",
        width: "85%",
        //   maxWidth: 1000,
    },
    priority_menu: {
        alignItems: "center",
        justifyContent: "center",
        height: 90,
        borderRadius: 13,

        width: "100%",
        backgroundColor: "#242436",


    },
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center"
    },
    radioLabel: {
        color: 'white',
        // marginHorizontal: 10,
        padding: 10,
    },
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    radioButtonWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        // Background color for the wrapper
        borderRadius: 20,
        // padding: 10,
        margin: 5,
    },
    motiv: {
        // flexDirection: "row",
        padding: 5,
        // height:50,
        justifyContent: "center",
        alignItems: "center",
        // elevation:10,
        borderRadius: 13,
        // borderWidthTop: 1,
        borderColor: "#d6d6d62c",
        // flex: 1,
        // backgroundColor: "#1c1c2b",


    },
    motivshowcase: {
        flex: 1,
        // flexDirection: "row",
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 13,

        // flex: 1,
        // backgroundColor: "#ffffff11",

    },

    main_container: {
        // paddingHorizontal: 5,
        flexGrow: 1,
        paddingBottom: 90,
        alignItems: "center",
        gap: 4,
        width: "93%",
        // borderColor: "white"
    },
    task_box: {

        // elevation:15,
        overflow: "hidden",
        flexDirection: "row",
        // justifyContent: "cen",
        // elevation: 10,
        shadowColor:"#3e2292c9",
        width: "100%",
        // marginHorizontal:10,
        borderRadius: 10,
        height: 60,
        backgroundColor: "#1a1a26",
        
        
    },
    innertask:{
        overflow: "hidden",

        // borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#1a1a26",

        borderColor: "#ffffff14",
        flexDirection: "row",
        width: "100%",
        height:"100%",

    },
    task_box2: {

        // elevation:15,
        overflow: "hidden",
        flexDirection: "row",
        // justifyContent: "cen",
        // elevation: 10,
        borderWidth: 1,
        borderColor: "#ffffff14",

        width: "98%",
        borderRadius: 10,
        height: 60,
        backgroundColor: "#1c1c2b",
    },
    number_container: {
        height: "100%",

        width: 40,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        backgroundColor: "#151515"

    },

    task_number: {
        // color: "black", 
        fontWeight: "bold",
        fontSize: 20,
    },
    box_text: {
        paddingHorizontal: 13,
        // alignItems:"center",
        justifyContent: "space-between",
        gap: 5,
        width: "90%",
        flexDirection: "row",
        height: "100%",
    },
    task_desc: {
        flex: 1,
        justifyContent: "center",
        // Optionally, set height if needed
        // height: 35,
    },

    task_func: {
        width: 115,
        gap: 10,
        padding: 5,
        flexDirection: "row",
        // borderWidth:1,
        // justifyContent: "center", 
        alignItems: "center",
        height: "100%",


    },

    deadlinebutton: {
        borderRadius: 13,
        backgroundColor: "rgba(255, 255, 255, 0.056)",
        height: 35,
        justifyContent: "center",
        width: 80,
        alignItems: "center", // Center content inside the button
    },

    task_priority: {
        paddingHorizontal: 8,
        width: "97%",
        borderRadius: 5,
        backgroundColor: "rgba(255,255,255,0.2)",
        justifyContent: "center",
        height: 25,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    textContainer: {
        // marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        width: "100%",
        height: 60,
        // borderWidth: 1,
        // borderColor: '#140d0d',
        borderRadius: 15,
        paddingHorizontal: 15,
        backgroundColor: "#1c1c2b",

        // width: 200, // Adjust width as needed

    },
    usernameText: {
        color: "white",
        fontSize: 18,
    },
    imageContainer: {
        padding:10,
        // padding:30,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: "center",
    },
    imageWrapper: {
        opacity: 0.6,

        margin: 4,

        borderWidth: 2,
        backgroundColor: "#151515ff",
        borderRadius: 10,
        borderColor: 'transparent',
    },
    selectedImage: {
        opacity: 1,

        elevation: 20,
        shadowColor: "#6007f0ff",
        // backgroundColor:"white",
        borderColor: '#6007f0ff',
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 10,
    },
    imageselecter: {
        width:"100%",
        // elevation: 5,
        shadowColor: "#2b1d4f5a",
        backgroundColor: "#1a1a26",
        borderColor: "#bbbbbb27",
        borderWidth: 1,
        elevation:20,
        borderRadius: 20,
        gap: 10,
        // marginTop: 20,
        paddingVertical: 20,
        alignItems: "center",
        // borderWidth:1,

    },
    image2: {
        width: "100%",
        height: "100%",
        borderRadius: 20,
    },
    modalContent: {
        // marginTop:70,
        // justifyContent:"center",
        alignItems: "center",
        width: '95%',
        flex: 1,
        // height:"50%",
        // backgroundColor: '#1a2135',
        // borderRadius: 10,
        // padding: 20,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        color: "white",
        fontWeight: 'bold',
        marginBottom: 15,
    },
    modalInput: {
        color: "white",
        // backgroundColor: "rgba(246, 237, 237, 0.03)",
        flex: 1,
        height: "100%",
        // borderBottomWidth: 1,
        // borderBottomColor: '#ccc',
        // marginBottom: 15,
        padding: 10,
        borderRadius: 5,

    },
    modalButton: {
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        width: "100%",
        backgroundColor: '#0d559080',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginVertical: 5,
    },
    modalButtonText: {
        color: 'white',
        fontSize: 16,
    },
    userimage: {
        width: 50,
        backgroundColor: "#1c1c2b",
        // elevation:10,
        shadowColor: "#090a0aff",
        borderWidth: 5,
        borderColor: '#1c1c2b00',
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        borderRadius: 20,
        overflow: 'hidden',
        marginRight: 10,
    },
    about_container: {
        // backgroundColor:"#0f0e16",
        // gap: 10,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        // borderWidth:1,
    },
    about_icon: {
        width: 120,
        height: 120,
    },
    about_content: {
        // elevation: 5,
        // gap: 10,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        width: "90%",
        borderRadius: 40,
        // backgroundColor: "#1c1c2b",


    },
    about_text: {
        textAlign: "center",
        // elevation:10,
        width: "100%",
        // shadowColor:"white",
        justifyContent: "center",
        // alignItems:"center",
        // width: 350,
        // height:
        paddingVertical: 5,
        paddingHorizontal: 20,
        gap: 10

    },
    notmodal: {
        // gap:5,
        marginBottom: 30,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor:"#0a0c14ff",

        maxHeight: "60%",
        width: "100%",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    notifcontainer: {
        flexDirection: 'column-reverse',
        flex: 1,
    },
    notifclose: {
        // width:80,
        backgroundColor: "#ffffff20",

        // width:200,
        padding: 5,
        paddingHorizontal: 16,
        borderRadius: 50,

    },
    notifbox: {
        // borderWidth:1,
        justifyContent: "flex-end",
        // alignItems:"center",
        // gap:10,
        width: "100%",
        flex: 1,
        // padding:10,
        padding: 5,
        // backgroundColor: "#cf1b30ff",


        // paddingHorizontal:50,

        borderRadius: 20,
    },
    footer: {
        zIndex: 5,
        position: "absolute",
        bottom: 10,
        left: 0,
        right: 0,
        width: "100%",
        height: 70,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
        backgroundColor: "#1c1c2b00",
        alignSelf: 'center',
    },
    innerfooter: {
        // borderWidth:1,
        borderRadius: 20,
        padding: 8,
        zIndex: 11,
        backgroundColor: "#1c1c2b",
        flexDirection: "row",
        width: "95%",
        justifyContent: "center", // Centers content horizontally


    },
    footertext: {
        color: "#FFF",
        color2:"#FFFFFF"
    },

    openAdder: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // elevation:10,
        shadowColor: "#000000ff",
        borderWidth: 1,
        borderColor: "#ffffff33",
        gap: 10,
        // height:"100%",
        borderRadius: 10,
        padding: 8,
        backgroundColor: "#1b1b2a"
    },
    navButton: {

        height: 60,
        flex: 1,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        // flexDirection: "row",
        paddingv: 10,
        // elevation:10,
        // borderWidth:1,
        // borderColor:"#f9f9f90f",
        gap: 3,
        // width: "50%",
        // height: 50,
        backgroundColor: "#1c1c2b",

    },
    AdderScreenModal: {
        position: "absolute",
        zIndex: 1,
        // flex:1,
        // borderWidth:1,
        // height:265,
        paddingHorizontal: 15,
        // backgroundColor: "#151522f3",

        justifyContent: 'flex-end',
        bottom: 90,

        alignItems: 'center',
        // position: 'absolute',
        width: '100%',
    },
    AdderContainer: {
        borderWidth: 1,
        borderColor: "#ffffff12",
        elevation: 100,
        shadowColor: "#1c1c2bff",
        zIndex: 10,
        borderRadius: 30,
        padding: 15,
        backgroundColor: "#1c1c2bff",
        justifyContent: "center",

        gap: 8,
        width: "100%",

    },

});
export const lightTheme = StyleSheet.create({

    statusbar: {
        backgroundColor: "#232c61ff"
    },
    statusbartext:{
        style:"light",
    },
    container: {
        // padding:10,
        overflow: 'hidden',
        flex: 1,
        backgroundColor: "#ecececff",
        alignItems: 'center',
        // paddingTop: 50,
        justifyContent: 'space-between',
    },
    width_margin: {
        zIndex: 5,
        // width: "90%",
        
        marginTop: 10,
        width: "100%",
        alignItems: "center",
        // paddingHorizontal: 15,
        gap: 15,
        // paddingVertical: 10,
        flex: 1,
    },
    bigfont: {

        color: "#ffffff",
        fontSize: 15,
        fontWeight: "bold"
    },
    topcontainer: {
    

        borderColor: "#cececeff",
        shadowColor: "#25306eff",
        backgroundColor: "#232c61ff",
        borderWidth: 1,
        // elevation: 20,
        width:"95%",
        // shadowOpacity:0.1,
        // height: 340,
        marginTop:35,
        // paddingTop: 50,
        borderRadius:20,
        paddingVertical:10,
        paddingHorizontal: 10,
        marginBottom: 5,

        

        // height:150,
        justifyContent: "center",

        gap: 8,
        // width: "100%",

    },
    about: {
        flex: 1,
        flexDirection: "row",
        gap: 10,
        borderRadius: 13,
        padding: 12,
        backgroundColor: "#1c1c2b",

    },
    headerbar: {
        gap: 5,
        width: "100%",
        flexDirection: "row",
        // gap: 7,
        justifyContent: "space-between",
        alignItems: "center",
        height: 50,
    },
    user_info: {
        justifyContent: "flex-start",
        alignItems: "center",
        flex: 1,
        paddingHorizontal:5,
        flexDirection: "row",
    },
    user_name: {
        flexDirection:"row",
borderWidth:1,
borderColor:"#ffffff89",
        backgroundColor: "#ffffff0b",
        maxWidth: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        // width:"60%"
        paddingLeft: 0,
        paddingRight:15,
        borderRadius: 20,

    },

    userimage: {
        backgroundColor: "#1c1c2b",
        borderRadius: 100,
        overflow: "hidden",
        height: 50,
        width: 40,
    },

    emptytext: {
        color: "#505050",
        fontSize: 18,
        fontFamily: 'sans-serif-light'
    },
    sort_section: {

        // paddingHorizontal:20,
        flexDirection: "row",
        height: 50,
        // marginBottom:10,

        gap: 10,
        paddingHorizontal: 5,
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center"

    },
    sort_bar: {

        // paddingHorizontal:20,
        flexDirection: "row",
        height: 50,
        // marginBottom:10,

        gap: 10,
        // paddingHorizontal: 5,
        width: "93%",
        justifyContent: "space-between",
        alignItems: "center"

    },
    sortButton: {
        // width:"50%",
        // width:150,

        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        // height:"100%",
        borderRadius: 10,
        padding: 10,
        backgroundColor: "#0a326700",
    },
    navButton2: {
        marginTop: 30,
        height: 40,
        // width: 200,
        // marginBottom:10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 20,
        gap: 10,
        borderRadius: 20,
        // width: "50%",
        height: 50,
        backgroundColor: "#1c1c2b",

    },

    task_input: {
        flexDirection: "row",
        // gap: 10,
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: 60,

    },
    task_adder: {
        justifyContent: "center",
        alignItems: "center",
        //   width: "20%"
    },

    inputbox:
    {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderWidth:1,
        elevation:2,
        paddingHorizontal: 15,
        borderRadius: 20,
        borderColor:"#c8c8c8",
        backgroundColor: "#f7f7f7",

        height: "100%",
        width: "85%",
        //   maxWidth: 1000,
    },
    priority_menu: {
        alignItems: "center",
        justifyContent: "center",
        height: 90,
        borderRadius: 13,

        width: "100%",
        backgroundColor: "#f7f7f7",


    },
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center"
    },
    radioLabel: {
        color: 'white',
        // marginHorizontal: 10,
        padding: 10,
    },
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    radioButtonWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        // Background color for the wrapper
        borderRadius: 20,
        // padding: 10,
        margin: 5,
    },
    motiv: {
        // flexDirection: "row",
        padding: 5,
        // height:50,
        justifyContent: "center",
        alignItems: "center",
        // elevation:10,
        borderRadius: 13,
        // borderWidthTop: 1,
        borderColor: "#d6d6d62c",
        // flex: 1,
        // backgroundColor: "#1c1c2b",


    },
    motivshowcase: {
        flex: 1,
        // flexDirection: "row",
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 13,

        // flex: 1,
        // backgroundColor: "#ffffff11",

    },
    buttonback: {
        backgroundColor: "#ffffff12",
    },
    buttonback2: {
        backgroundColor: "#FFF",
    },

    main_container: {
        paddingHorizontal: 3,
        flexGrow: 1,
        paddingBottom: 90,
        alignItems: "center",
        gap: 4,
        width: "95%",
        // borderColor: "white"
    },
    task_box: {

        // elevation:15,
        overflow: "hidden",
        flexDirection: "row",
        // justifyContent: "cen",
        elevation: 10,
        shadowColor:"#1616167d",
        width: "100%",
        borderRadius: 10,
        height: 60,
        backgroundColor: "#ffffffff",
        
        // borderWidth: 1,
        borderColor: "#e1e1e1ff",
        
    },
    innertask:{
        overflow: "hidden",

        borderRadius: 10,
        backgroundColor: "#ffffff",

        flexDirection: "row",
        width: "100%",
        height:"100%",

    },
    task_box2: {

        // elevation:15,
        overflow: "hidden",
        flexDirection: "row",
        // justifyContent: "cen",
        // elevation: 10,
        borderWidth: 1,
        borderColor: "#e4e4e4ff",

        width: "100%",
        borderRadius: 10,
        height: 60,
        backgroundColor: "#ffffff",
    },
    number_container: {
        height: "100%",

        width: 40,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        backgroundColor: "#151515"

    },

    task_number: {
        // color: "black", 
        fontWeight: "bold",
        fontSize: 20,
    },
    box_text: {
        paddingHorizontal: 13,
        // alignItems:"center",
        justifyContent: "space-between",
        gap: 5,
        width: "90%",
        flexDirection: "row",
        height: "100%",
    },
    task_desc: {
        flex: 1,
        justifyContent: "center",
        // Optionally, set height if needed
        // height: 35,
    },

    task_func: {
        width: 115,
        gap: 10,
        padding: 5,
        flexDirection: "row",
        // borderWidth:1,
        // justifyContent: "center", 
        alignItems: "center",
        height: "100%",


    },

    deadlinebutton: {
        borderRadius: 13,
        backgroundColor: "#ecececff",
        height: 35,
        justifyContent: "center",
        width: 80,
        alignItems: "center", // Center content inside the button
    },

    task_priority: {
        paddingHorizontal: 8,
        width: "97%",
        borderRadius: 5,
        backgroundColor: "rgba(255,255,255,0.2)",
        justifyContent: "center",
        height: 25,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    textContainer: {
        // marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        width: "100%",
        height: 60,
        // borderWidth: 1,
        // borderColor: '#140d0d',
        borderRadius: 15,
        paddingHorizontal: 15,
        backgroundColor: "#1c1c2b",

        // width: 200, // Adjust width as needed

    },
    usernameText: {
        color: "white",
        fontSize: 18,
    },
    imageContainer: {
        padding:10,
        // padding:30,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: "center",
    },
    imageWrapper: {
        opacity: 0.6,

        margin: 4,

        borderWidth: 1,
        backgroundColor: "#cacacaff",
        borderRadius: 10,
        borderColor: 'transparent',
    },
    selectedImage: {
        
        opacity: 1,

        elevation: 20,
        shadowColor: "#171717ff",
        // backgroundColor:"white",
        borderColor: '#6007f0ff',
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 10,
    },
    imageselecter: {
        elevation: 5,
        shadowColor: "#00000083",
        backgroundColor: "#ffffff",
        borderColor: "#bbbbbb27",
        // borderWidth: 1,
        width: '100%',

        // elevation:100,
        borderRadius: 20,
        gap: 10,
        // marginTop: 20,
        paddingVertical: 20,
        alignItems: "center",
        // borderWidth:1,

    },
    image2: {
        width: "100%",
        height: "100%",
        borderRadius: 20,
    },
    modalContent: {
        // marginTop:70,
        // justifyContent:"center",
        alignItems: "center",
        width: '95%',
        flex: 1,
        // height:"50%",
        // backgroundColor: '#1a2135',
        // borderRadius: 10,
        // padding: 20,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        color: "white",
        fontWeight: 'bold',
        marginBottom: 15,
    },
    modalInput: {
        color: "white",
        // backgroundColor: "rgba(246, 237, 237, 0.03)",
        flex: 1,
        height: "100%",
        // borderBottomWidth: 1,
        // borderBottomColor: '#ccc',
        // marginBottom: 15,
        padding: 10,
        borderRadius: 5,

    },
    modalButton: {
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        width: "100%",
        backgroundColor: '#0d559080',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginVertical: 5,
    },
    modalButtonText: {
        color: 'white',
        fontSize: 16,
    },
    userimage: {
        width: 50,
        // backgroundColor: "#ffffff1d",
        // elevation:10,
        shadowColor: "#090a0aff",
        borderWidth: 5,
        borderColor: '#ffffff0f',
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        borderRadius: 20,
        overflow: 'hidden',
        marginRight: 10,
    },
    about_container: {
        // backgroundColor:"#0f0e16",
        // gap: 10,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        // borderWidth:1,
    },
    about_icon: {
        width: 120,
        height: 120,
    },
    about_content: {
        // elevation: 5,
        // gap: 10,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        width: "90%",
        borderRadius: 40,
        // backgroundColor: "#1c1c2b",


    },
    about_text: {
        textAlign: "center",
        // elevation:10,
        width: "100%",
        // shadowColor:"white",
        justifyContent: "center",
        // alignItems:"center",
        // width: 350,
        // height:
        paddingVertical: 5,
        paddingHorizontal: 20,
        gap: 10

    },
    notmodal: {
        // gap:5,
        marginBottom: 30,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor:"#0a0c14ff",

        maxHeight: "60%",
        width: "100%",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    notifcontainer: {
        flexDirection: 'column-reverse',
        flex: 1,
    },
    notifclose: {
        // width:80,
        backgroundColor: "#ffffff20",

        // width:200,
        padding: 5,
        paddingHorizontal: 16,
        borderRadius: 50,

    },
    notifbox: {
        // borderWidth:1,
        justifyContent: "flex-end",
        // alignItems:"center",
        // gap:10,
        width: "100%",
        flex: 1,
        // padding:10,
        padding: 5,
        // backgroundColor: "#cf1b30ff",


        // paddingHorizontal:50,

        borderRadius: 20,
    },
    footer: {
        zIndex: 5,
        position: "absolute",
        bottom: 10,
        left: 0,
        right: 0,
        width: "100%",
        height: 70,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
        backgroundColor: "#00000000",
        alignSelf: 'center',
    },
    innerfooter: {
        // borderWidth:1,
        borderRadius: 20,
        elevation:10,
        padding: 8,
        zIndex: 11,
        backgroundColor: "#ffffff",
        flexDirection: "row",
        width: "95%",
        justifyContent: "center", // Centers content horizontally


    },
    footertext: {
        color: "#505050",
        color2:"#FFFFFF"
    },
    
    openAdder: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // elevation:4,
        shadowColor: "#000000ff",
        borderWidth: 1,
        borderColor: "#e9e9e9ff",
        gap: 10,
        // height:"100%",
        borderRadius: 10,
        padding: 8,
        backgroundColor: "#232c61ff"
    },
    navButton: {

        height: 60,
        flex: 1,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        // flexDirection: "row",
        paddingv: 10,
        // elevation:10,
        // borderWidth:1,
        // borderColor:"#f9f9f90f",
        gap: 3,
        // width: "50%",
        // height: 50,
        backgroundColor: "#1c1c2b",

    },
    AdderScreenModal: {
        position: "absolute",
        zIndex: 1,
        // flex:1,
        // borderWidth:1,
        // height:265,
        paddingHorizontal: 15,
        // backgroundColor: "#151522f3",

        justifyContent: 'flex-end',
        bottom: 90,

        alignItems: 'center',
        // position: 'absolute',
        width: '100%',
    },
    AdderContainer: {
        borderWidth: 1,
        borderColor: "#d1d1d1ff",
        elevation: 5,
        shadowColor: "#1c1c2bff",
        zIndex: 10,
        borderRadius: 30,
        padding: 15,
        backgroundColor: "#ffffffff",
        justifyContent: "center",

        gap: 8,
        width: "100%",

    },

});
// export default styles;
