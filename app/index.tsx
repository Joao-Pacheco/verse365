import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./index.style";
import ProgressBar from "../components/progress-bar/";
import dataBible from "../assets/plan/plan365.json";

interface readings {
  Old: string;
  New: string;
  Psalms: string;
  Proverbs: string;
}

interface BiblePlan {
  [month: string]: {
    [day: string]: readings;
  };
}

const typedDataBible: BiblePlan = dataBible;

const index = () => {
  const [progress, setProgress] = useState(0);
  const [currentData, setCurrentData] = useState(new Date());
  const [dataToShow, setDataToShow] = useState({ month: "", day: "" });
  const [dailyText, setdailyText] = useState<readings>({
    Old: "",
    New: "",
    Psalms: "",
    Proverbs: "",
  });

  function findDalyText(data: Date) {
    const newDate = transformDate(data);
    return (dataBible as BiblePlan)[newDate.month][parseInt(newDate.day)];
  }

  function transformDate(date: Date) {
    const month = date.toLocaleString("pt-BR", { month: "long" });
    const day = String(date.getDate()).padStart(2, "0");
    setDataToShow({ month, day });
    return { month, day };
  }

  function getDayOfYear(date: Date) {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);
    return day;
  }

  function goToNextDay(direction: string) {
    let newDate = new Date(currentData);
    if (direction === "back") {
      newDate.setDate(newDate.getDate() - 1);
    } else {
      newDate.setDate(newDate.getDate() + 1);
    }
    setCurrentData(newDate);
  }

  useEffect(() => {
    const dayOfYear = getDayOfYear(currentData);
    const totalDays = currentData.getFullYear() % 4 === 0 ? 366 : 365;
    setProgress(Math.floor((dayOfYear / totalDays) * 100));
    setdailyText(findDalyText(currentData));
  }, [currentData]);

  return (
    <View style={styles.container}>
      <ProgressBar progress={progress} />

      <Text style={styles.dateText}>
        {dataToShow.day} de {dataToShow.month}
      </Text>

      <TouchableOpacity style={styles.readingButton}>
        <Text style={styles.readingText}>{dailyText.Old}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.readingButton}>
        <Text style={styles.readingText}>{dailyText.New}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.readingButton}>
        <Text style={styles.readingText}>{dailyText.Psalms}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.readingButton}>
        <Text style={styles.readingText}>{dailyText.Proverbs}</Text>
      </TouchableOpacity>

      <View style={styles.navContainer}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => goToNextDay("back")}
        >
          <Text style={styles.navText}>‹</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => goToNextDay("forward")}
        >
          <Text style={styles.navText}>›</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default index;
