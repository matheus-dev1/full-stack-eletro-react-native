import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 400,
    height: 200,
    marginLeft: 20,
    marginTop: -50,
    marginBottom: 80
  },

  texto: {
    fontSize: 30,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 170,
    marginTop: 50,
    textAlign: 'center',
    color: '#004AAD'
  },
  
  textobtn: {
    color: '#45F8FF',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 20
  },

  btn: {
    backgroundColor: '#004AAD',
    width: '90%',
    height: '6%',
    marginTop: 50,
    marginLeft: 19,
    marginBottom: -20,
    padding: 8,
    borderRadius: 8,
    fontSize: 20
  },
});

export default styles;