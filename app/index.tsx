import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./index.style";
import ProgressBar from "../components/progress-bar/";

const index = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(50);
  }, []);

  return (
    <View style={styles.container}>
      <ProgressBar progress={progress} />

      <Text style={styles.dateText}>5 de Março</Text>

      <TouchableOpacity style={styles.readingButton}>
        <Text style={styles.readingText}>Lv 24:1-25:46</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.readingButton}>
        <Text style={styles.readingText}>Mc 10:13-31</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.readingButton}>
        <Text style={styles.readingText}>Sl 44:9-26</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.readingButton}>
        <Text style={styles.readingText}>Pv 10:20-21</Text>
      </TouchableOpacity>

      <View style={styles.navContainer}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navText}>‹</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navText}>›</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default index;
