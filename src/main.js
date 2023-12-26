import React, { useState, useEffect, useRef } from "react"
import { BackHandler, Platform,Text } from "react-native"
import { WebView } from "react-native-webview"

const Webview = () => {
const webView = useRef(null);
const [canGoBack, setCanGoBack] = useState(false);

useEffect(() => {
  if (Platform.OS === 'android') {
    BackHandler.addEventListener('hardwareBackPress', HandleBackPressed);

    return () => {
       BackHandler.removeEventListener('hardwareBackPress', HandleBackPressed);
    }
  }
}, []); // INITIALIZE ONLY ONCE

const HandleBackPressed = () => {
    if (webView.current.canGoBack) {
        webView.current.goBack();
        return true; // PREVENT DEFAULT BEHAVIOUR (EXITING THE APP)
    }
    return false;
}

return (
  
    <WebView
      ref={webView}
      source={{
        uri: "https://yangkwa.github.io/GreenRushLite/" //Insert your website url
      }}
      style={{marginTop:30}}
      onNavigationStateChange={navState => {webView.current.canGoBack = navState.canGoBack}}  This line is important
  />
 )
}

export default Webview;