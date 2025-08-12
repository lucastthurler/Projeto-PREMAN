import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F8", // cinza claro suave
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "#1A1A2E", // azul marinho escuro
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#B0BEC5", // cinza azulado
    borderRadius: 50,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: "#FFFFFF", // fundo branco
    width: "50%",
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#4A90E2", // azul moderno
    paddingVertical: 15,
    borderRadius: 50,
    marginTop: 10,
    width: "50%",
    alignSelf: "center",
  },
  buttonText: {
    color: "#FFFFFF", // texto branco
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
  registerText: {
    marginTop: 15,
    color: "#4A90E2", // azul igual ao botão
    fontSize: 16,
    textAlign: "center",
  },
});
