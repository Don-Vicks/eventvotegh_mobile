import React, { useState } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { WebView } from 'react-native-webview'

type Props = {
  url: string
  title: string
}

export default function EventVoteWebView({ url, title }: Props) {
  const [loading, setLoading] = useState(true)

  return (
    <View className='flex-1 bg-white'>
      <View className='pt-12 pb-3 px-4 bg-primary'>
        <Text className='text-white text-lg font-semibold'>{title}</Text>
        <Text className='text-yellow-100 text-xs mt-1'>
          Content from eventvotegh.com
        </Text>
      </View>

      {loading && (
        <View className='absolute inset-0 z-10 items-center justify-center bg-white/70'>
          <ActivityIndicator size='large' color='#b23836' />
          <Text className='mt-2 text-slate-600 text-xs'>Loading contest…</Text>
        </View>
      )}

      <WebView
        source={{ uri: url }}
        onLoadEnd={() => setLoading(false)}
        startInLoadingState={false}
      />
    </View>
  )
}
