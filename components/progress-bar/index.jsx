import React, { useState, useEffect, useRef } from "react";
import { View, Animated, StyleSheet } from "react-native";

const ProgressBar = ({ progress }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.track, { width: `${progress}%` }]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 10,
    justifyContent: "center",
    width: "100%",
    overflow: "hidden",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  track: {
    height: 20,
    borderRadius: 10,
    backgroundColor: "#334139",
  },
});

export default ProgressBar;
