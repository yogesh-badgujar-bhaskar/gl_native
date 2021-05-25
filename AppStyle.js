import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 85,
        marginBottom: 20,
        alignSelf: 'center',
        position: 'absolute',
    },
    headerAvatar: {
        marginRight: 10,
    },
    editIcon: {
        alignSelf: 'flex-end',
        left: 10,
        bottom: 25,
        textAlign: 'center',
        padding: 6,
        fontWeight: 'bold',
        backgroundColor: 'black',
        borderRadius: 20,
        height: 35,
        width: 35,
    },
    UserName: {
        alignSelf: 'flex-end',
        fontWeight: 'bold',
        top: 2,
    },
    menustyle: {
        width: 30,
        height: 40,
        marginLeft: 15,
    },
    logostyle: {
        width: 200,
        height: 50,
        alignSelf: 'center',
    },
    headerMainStyle: {
        height: 200,
        backgroundColor: 'white',
        borderBottomColor: 'white',
        borderBottomWidth: 4,
    },
    profile: { flexDirection: 'row-reverse' },
});
export default styles;