import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../Styles/MinisteriosStyle";

export default function MinisteriosScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ministérios</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.replace("/MinisterioMulheres")}
      >
        <Image
          source={require("../../assets/images/LogoMV.png")} // ícone ou foto do ministério
          style={styles.image}
        />
        <Text style={styles.cardText}>Ministério de Mulheres</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.card, styles.voltar]}
        onPress={() => router.replace("/Home")}
      >
        <Text style={styles.botaoText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
