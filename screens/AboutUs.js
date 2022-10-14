import * as React from 'react';
import { Text, View, StyleSheet,ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import { Card } from 'react-native-paper';
 function LoadingIndicatorView() {
    return <ActivityIndicator color='#009b88' size='large' />
  }
  const AboutUs = props => {
  return (
   <WebView
        originWhitelist={['*']}
        source={{ uri: 'https://navdeepuppal.github.io' }}  
        renderLoading={this.LoadingIndicatorView}
        startInLoadingState={true}
      />
  );
}
export default AboutUs;