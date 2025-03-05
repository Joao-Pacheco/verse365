import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
  },
  dateText: {
    fontSize: 32,
    fontWeight: "light",
    marginBottom: 20,
    color: "#333",
    paddingTop: 30,
  },
  readingButton: {
    backgroundColor: "#2E3E36",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 5,
    width: "80%",
    alignItems: "center",
  },
  readingText: {
    color: "#FFF",
    fontSize: 18,
  },
  navContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 50,
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  navButton: {
    backgroundColor: "#2E3E36",
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  navText: {
    color: "#FFF",
    fontSize: 30,
  },
});

export default styles;
