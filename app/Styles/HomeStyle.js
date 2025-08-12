import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff", // fundo branco para destacar a logo
    alignItems: "center",
    justifyContent: "center", // começa de cima para baixo
    paddingHorizontal: 20,
    paddingTop: 60, // espaço para a logo
  },
  logo: {
    width: 180, // ajuste para o tamanho da sua logo
    height: 180,
    resizeMode: "contain", // mantém proporção
    marginBottom: 40, // espaço entre logo e texto
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 40,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 14,
    borderRadius: 50,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
    elevation: 3, // leve sombra no Android
    shadowColor: "#000", // sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  buttonSecondary: {
    backgroundColor: "#dc3545",
  },
  buttonText: {
    color: "#ffff",
    fontSize: 16,
    fontWeight: "600",
  },
});
