import React from "react";
import { FlatList, StyleSheet, Platform, View } from "react-native";

interface Props {
  data: number[];
}

const LayoutGenerator: React.FC<Props> = ({ data }): JSX.Element => {
  const Row = (column: number): JSX.Element => {
    // if user input a big number that will cause render issue so we will set max to 20
    const count = column <= 20 ? column : 20;
    const columns: JSX.Element[] = [];
    for (let i = 0; i < count; i++) {
      columns.push(<View key={i} style={styles.column} />);
    }
    return <View style={styles.row}>{columns}</View>;
  };

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => Row(item)}
      keyExtractor={(_, index) => index.toString()}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: "100%",
    ...Platform.select({
      ios: { marginBottom: 20 },
    }),
  },
  row: {
    flexDirection: "row",
    width: "100%",
    height: 150,
  },
  column: {
    flex: 1,
    backgroundColor: "#CFE2F3",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default LayoutGenerator;
