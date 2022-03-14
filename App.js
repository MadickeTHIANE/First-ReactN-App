import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ListMovies from "./assets/movie";

export default function App() {
  const renderMovie = ({ item }) => {
    return (
      <View style={styles.movie}>
        <Text>{item.title}</Text>
        <Text>{item.plot}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <FlatList
        data={ListMovies.movies}
        renderItem={renderMovie}
        keyExtractor={(movies) => {
          return movies.id;
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  movie: {
    borderWidth: 2,
    margin: 5,
    padding: 3,
  },
});
