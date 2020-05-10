import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    card:{
        width: '95%',
        padding: 20,
    },
    rowView:{
        flexDirection: 'row'
    },
    title:{
        fontWeight: 'bold',
        fontSize: 16
    },
    titleValue:{
        fontSize: 16,
        marginLeft: 10
    },
    button:{
        backgroundColor: 'green',
       alignSelf: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      width: 170,
      height: 40,
      marginTop: 20
    },
    buttonText:{
        alignSelf: 'center',
        color: '#fff',
        fontWeight: 'bold'
    },
    searchView:{
        marginTop: 25,
        marginBottom: 10
    },
    imgView:{
        height: 50,
        width: 50,
        overflow: 'hidden'
    },
    img:{
        height: '100%',
        width: '100%',
        resizeMode: 'contain'
    },
    backButton:{
        backgroundColor: 'blue',
        // alignSelf: 'center',
        marginLeft: 20,
       justifyContent: 'center',
       borderRadius: 10,
       width: 100,
       height: 40,
       marginTop: 20
    }
})