import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { WebView } from 'react-native-webview'

type Props = {
  url: string
  title: string
}

import { Stack } from 'expo-router'

import LoadingSkeleton from './LoadingSkeleton'

export default function EventVoteWebView({ url, title }: Props) {
  const [loading, setLoading] = useState(true)

  const hideHeaderFooterScript = `
    const style = document.createElement('style');
    style.innerHTML = 'header, footer, .header, .footer, [role="banner"], [role="contentinfo"], nav { display: none !important; }';
    document.head.appendChild(style);
    true;
  `

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: title }} />

      {loading && (
        <View style={styles.loadingContainer}>
          <LoadingSkeleton />
        </View>
      )}

      <WebView
        source={{ uri: url }}
        onLoadEnd={() => setLoading(false)}
        startInLoadingState={false}
        injectedJavaScript={hideHeaderFooterScript}
        cacheEnabled={false}
        domStorageEnabled={true}
        pullToRefreshEnabled={true}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    paddingTop: 48, // pt-12
    paddingBottom: 12, // pb-3
    paddingHorizontal: 16, // px-4
    backgroundColor: '#b23836', // bg-primary
  },
  headerTitle: {
    color: 'white',
    fontSize: 18, // text-lg
    fontWeight: '600', // font-semibold
  },
  headerSubtitle: {
    color: '#fef3c7', // text-yellow-100
    fontSize: 12, // text-xs
    marginTop: 4, // mt-1
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0, // inset-0
    zIndex: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // bg-white/70
  },
  loadingText: {
    marginTop: 8, // mt-2
    color: '#475569', // text-slate-600
    fontSize: 12, // text-xs
  },
});
