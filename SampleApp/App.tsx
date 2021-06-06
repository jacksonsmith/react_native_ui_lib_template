/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Accordion, Button} from 'library';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

declare var global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={stylesHome.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={stylesHome.engine}>
              <Text style={stylesHome.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={stylesHome.body}>
            <View style={stylesHome.sectionContainer}>
              <Text style={stylesHome.sectionTitle}>Step One</Text>
              <Text style={stylesHome.sectionDescription}>
                Edit <Text style={stylesHome.highlight}>App.tsx</Text> to change
                this screen and then come back to see your edits.
              </Text>
            </View>
            <View style={stylesHome.sectionContainer}>
              <Text style={stylesHome.sectionTitle}>See Your Changes</Text>
              <Text style={stylesHome.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={stylesHome.sectionContainer}>
              <Text style={stylesHome.sectionTitle}>Debug</Text>
              <Text style={stylesHome.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={stylesHome.sectionContainer}>
              <Text style={stylesHome.sectionTitle}>Learn More</Text>
              <Text style={stylesHome.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
          <View>
            <Accordion />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const stylesHome = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
