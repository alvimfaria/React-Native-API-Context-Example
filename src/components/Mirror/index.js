import React from 'react';
import { Text, View } from 'react-native';

import { useCount } from "../../context/Count"

export default function Mirror() {
  const { count } = useCount();

  return (
    <View>
      <Text>Mirror: {count}</Text>
    </View>
  );
}