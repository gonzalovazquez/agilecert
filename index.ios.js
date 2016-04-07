/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  TabBarIOS,
  Text,
  View
} from 'react-native';

import Study from './App/Components/Study';
import Tests from './App/Components/Tests';
import FlashCards from './App/Components/FlashCards';
import History from './App/Components/History';

var base64Icon = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj
6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mr
jsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZr
Iuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadVi
flnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xv
jUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM77
3vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazi
m+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vU
y+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4
uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8t
nSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wN
JRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSL
arYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mU
M9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==`;

class AgileCert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'tests'
    };
  }
  render() {
    return (
          <TabBarIOS selectedTab={this.state.selectedTab}>
            <TabBarIOS.Item
              selected={this.state.selectedTab === 'tests'}
              icon={{uri: base64Icon, scale: 3}}
              onPress={() => {
                  this.setState({
                      selectedTab: 'tests',
                  });
              }}>
                <Tests/>
            </TabBarIOS.Item>
            <TabBarIOS.Item
              selected={this.state.selectedTab === 'study'}
              icon={{uri: base64Icon, scale: 3}}
              onPress={() => {
                    this.setState({
                        selectedTab: 'study',
                    });
              }}>
              <Study/>
            </TabBarIOS.Item>
            <TabBarIOS.Item
              selected={this.state.selectedTab === 'flashcards'}
              icon={{uri: base64Icon, scale: 3}}
              onPress={() => {
                    this.setState({
                        selectedTab: 'flashcards',
                    });
              }}>
              <FlashCards/>
            </TabBarIOS.Item>
            <TabBarIOS.Item
              selected={this.state.selectedTab === 'history'}
              icon={{uri: base64Icon, scale: 3}}
              onPress={() => {
                    this.setState({
                        selectedTab: 'history',
                    });
              }}>
              <History/>
            </TabBarIOS.Item>
          </TabBarIOS>
        );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AgileCert', () => AgileCert);
