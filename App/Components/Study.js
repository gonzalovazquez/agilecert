'use strict';

var React = require('react-native');
var Separator = require('./Helpers/Separator');

var {
  StyleSheet,
  View,
  Text,
  Component,
  ScrollView
} = React;

var MOCKED_DATA = [
  {
    "_id": "56febce9e4b0a5888e2e9b5a",
    "name": "In Agile Manifesto, what is more valuable than process & tools?",
    "choices": [
      {
        "id": 1,
        "title": "Customer Collaboration",
        "description": "Customer are important",
        "correct": false
      },
      {
        "id": 2,
        "title": "Individuals & Interactions",
        "description": "Individuals are important",
        "correct": true
      },
      {
        "id": 3,
        "title": "Working Software",
        "description": "Working are important",
        "correct": false
      },
      {
        "id": 4,
        "title": "Responding to change",
        "description": "Responding are important",
        "correct": false
      }
    ]
  },
  {
    "_id": "56fec55de4b0a5888e2e9c58",
    "name": "In Agile Manifesto, what is more valuable than process & tools?",
    "choices": [
      {
        "id": 1,
        "title": "Customer Collaboration",
        "description": "Customer are important",
        "correct": false
      },
      {
        "id": 2,
        "title": "Individuals & Interactions",
        "description": "Individuals are important",
        "correct": true
      },
      {
        "id": 3,
        "title": "Working Software",
        "description": "Working are important",
        "correct": false
      },
      {
        "id": 4,
        "title": "Responding to change",
        "description": "Responding are important",
        "correct": false
      }
    ]
  },
  {
    "_id": "56fec572e4b0a5888e2e9c5b",
    "name": "In Agile Manifesto, what is more valuable than process & tools?",
    "choices": [
      {
        "id": 1,
        "title": "Customer Collaboration",
        "description": "Customer are important",
        "correct": false
      },
      {
        "id": 2,
        "title": "Individuals & Interactions",
        "description": "Individuals are important",
        "correct": true
      },
      {
        "id": 3,
        "title": "Working Software",
        "description": "Working are important",
        "correct": false
      },
      {
        "id": 4,
        "title": "Responding to change",
        "description": "Responding are important",
        "correct": false
      }
    ]
  }
];

var styles = StyleSheet.create({
  description: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  container: {
    flex: 1
  }
});

class Study extends Component {
  render() {
    var questions = MOCKED_DATA.map((item, index) => {
      var items = item.choices.map((item2, index2) => {
        console.log(item.name);
        console.log(item.choices[index2].title);
        return(
            <View key={index2}>
              <Text> - {item.choices[index2].title}</Text>
            </View>
        );
      });
      return(
        <View key={index}>
            <Text>{item.name}</Text>
            {items}
            <Separator />
        </View>
      );
    });
    return (
      <ScrollView style={styles.container}>
        {questions}
      </ScrollView>
    );
  }
}

module.exports = Study;
