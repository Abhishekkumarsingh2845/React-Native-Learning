import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';



import Home from './Asset/Tab/Home';
import Add from './Asset/Tab/Add';

const App = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        {selectedTab === 0 ? (
          <Home />
        ) : 
         selectedTab === 1 ? (
          <Add />
        )  : null}

        <View style={styles.bottomTab}>
        

          <TouchableOpacity
            style={styles.tab}
            onPress={() => setSelectedTab(0)}>
            <Image
              source={require('./Asset/ss.png')}
              style={[
                styles.tabIcon,
                
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => setSelectedTab(1)}>
            <Image
              source={require('./Asset/ss.png')}
              style={[
                styles.tabIcon,
                { tintColor: selectedTab == 1 ? 'blue' : 'black' },
              ]}
            />
          </TouchableOpacity>
          
          
          
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'whitesmoke', // Example background color
  },
  bottomTab: {
    width: '100%',
    height: 70,
    backgroundColor: '#fff',
    position: 'absolute',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    bottom: 0,
  },
  tab: {
    width: '20%',
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  tabIcon: {
    width: 30,
    height: 30,
  },
  heading: {
    fontSize: 22,
    color: 'black',
    top: 122,
    fontWeight: 'bold',
    marginLeft: -161,
  },
  item: {
    width: '80%',
    height: 15,
    backgroundColor: 'black',
    alignSelf: 'center',
    marginTop: 5,
  },
  text: {
    fontSize: 22,
    color: 'black',
  },
});

export default App;
