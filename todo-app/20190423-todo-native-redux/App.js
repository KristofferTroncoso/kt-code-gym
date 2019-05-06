import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from "react-redux";
import store from "./redux/store/store";
import TodoAppContainer from './components/TodoAppContainer';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TodoAppContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

let WrappedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default WrappedApp;