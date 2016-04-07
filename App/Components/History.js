'use strict';

var React = require('react-native');
var {
  StyleSheet,
  View,
  Text,
  Component
} = React;

var styles = StyleSheet.create({
  description: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d45634',
  }
});

class History extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Hello from History
        </Text>
      </View>
    );
  }
}

module.exports = History;
