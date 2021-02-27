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
        marginTop: -2
}, 

    titulo: {
    color: "#004AAD",
    fontSize: 32,
    marginBottom: 20,
    marginTop: 30
},

    texto:{
    fontSize: 26,
    color: "#004AAD",
    textAlign: 'center',
    marginBottom: 20
},

btn: {
    backgroundColor: "#004AAD",
    marginTop: 60,
    padding: 8,
    borderRadius: 4,
    width: "80%"
},

btnTexto: {
    color: "#45F8FF",
    textAlign: 'center',
    fontSize: 18
}
});

export default styles;