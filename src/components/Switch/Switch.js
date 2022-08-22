import React, {useState} from 'react';
import {View, Switch, StyleSheet} from 'react-native';

const SwitchBotton = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{false: '#767577', trnoue: '#81b0ff'}}
        thumbColor={isEnabled ? '#6B96DC' : '#f5dd4b'}
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={styles.switich}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  switich: {transform: [{scaleX: 2.4}, {scaleY: 2}]},
});

export default SwitchBotton;
