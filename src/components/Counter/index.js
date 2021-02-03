import React from 'react';
import { Text, View, Button } from 'react-native';

import { useCount } from "../../context/Count"

export default function Counter() {
  const { count, setCount } = useCount();

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button onPress={() => setCount(count + 1)} title="Increase" />
    </View>
  );
}