import { Dimensions, Platform, StatusBar, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("window").width;
const CARD_WIDTH = screenWidth * 0.85;
const CARD_HEIGHT = 250;

const STATUSBAR_HEIGHT = Platform.OS === "android" ? StatusBar.currentHeight || 24 : 20; // valor padrão

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: STATUSBAR_HEIGHT + 60, // espaço para o header + statusbar
    backgroundColor: "#F4F6F8",
    alignItems: "center", // centraliza horizontalmente os cards
  },

  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#4A90E2",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: STATUSBAR_HEIGHT + 60, // aumenta a altura total do header incluindo statusbar
    paddingTop: STATUSBAR_HEIGHT, // empurra o texto para baixo da status bar
    lineHeight: 60,
    textAlignVertical: "center", // alinha verticalmente no Android
    zIndex: 1000,
  },

  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: "#f7d8d7",
    borderRadius: 50,
    padding: 16,
    marginVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },

  image: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginBottom: 12,
  },

  cardText: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },

  voltar: {
    backgroundColor: "#4A90E2",
    borderRadius: 50,
    width: "20%",
    height: 40,
  },

  botaoText: {
    color: "#ffff",
    fontSize: 16,
    fontWeight: "600",
  },
});
