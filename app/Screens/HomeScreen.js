import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../Styles/HomeStyle";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Registro de Presença!!</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/Ministerios")}
      >
        <Text style={styles.buttonText}>Ver Ministérios</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.buttonSecondary]}
        onPress={() => router.replace("/Login")}
      >
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
