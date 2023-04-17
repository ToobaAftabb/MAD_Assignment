//Layout of Chess borad
import React from 'react';
import { StyleSheet, View } from 'react-native';

const ChessBoard = () => {
  const board = [];
  for(let i = 0; i < 8; i++) {
    const row = [];
    for(let j = 0; j < 8; j++) {
      const backgroundColor = (i + j) % 2 === 0 ? 'white' : 'black';
      row.push(<View key={`${i}${j}`} style={[styles.cell, {backgroundColor}]} />);
    }
    board[i] = <View key={i} style={styles.row}>{row}</View>;
  }
  return <View style={styles.board}>{board}</View>;
};

const styles = StyleSheet.create({
  board: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 40,
    height: 40,
  },
});

export default ChessBoard


