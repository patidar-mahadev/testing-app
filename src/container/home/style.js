import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    inputStyle:{
      height: 45,
      width: '90%',
      borderRadius: 22,
      borderWidth: 0.5,
      alignSelf: 'center',
      marginTop: 20,
      paddingLeft: 20,
      paddingRight: 20
    },
    submitButton:{
      backgroundColor: 'green',
      alignSelf: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      width: 200,
      height: 45,
      marginTop: 20
    },
    submitText:{
      alignSelf: 'center',
      color: '#fff',
      fontWeight: 'bold'
    }
})