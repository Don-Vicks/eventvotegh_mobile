import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Index() {
  const goTo = (path: string) => {
    router.push(path as any)
  }

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <StatusBar barStyle="dark-content" />
      <View className='flex-1 px-6 pt-10 pb-6'>

        <View className='mb-8'>
          <Text className='text-3xl font-black text-slate-900 tracking-tight'>
            EventVote<Text className="text-primary">GH</Text>
          </Text>
          <Text className='mt-2 text-slate-500 font-medium text-base leading-6'>
            The official platform for live voting, ticketing, and event management.
          </Text>
        </View>

        {/* Main Entry Action */}
        <TouchableOpacity
          className="w-full bg-slate-900 p-4 rounded-2xl mb-6 items-center flex-row justify-center space-x-2 shadow-md active:scale-95 transition-all"
          onPress={() => goTo('/(tabs)/home')}
        >
          <Ionicons name="apps" size={20} color="white" />
          <Text className="text-white font-bold text-lg">Go to Dashboard</Text>
        </TouchableOpacity>

        <View className='space-y-4'>
          <TouchableOpacity
            className='flex-row items-center bg-primary rounded-2xl p-5 shadow-sm active:opacity-90'
            onPress={() => goTo('/(tabs)/contests')}
          >
            <View className="bg-white/20 p-3 rounded-full mr-4">
              <Ionicons name="trophy-outline" size={24} color="white" />
            </View>
            <View className="flex-1">
              <Text className='text-lg font-bold text-white'>
                All Contests
              </Text>
              <Text className='text-yellow-100 text-xs font-medium'>
                View and vote in active contests
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            className='flex-row items-center bg-yellow-50 rounded-2xl p-5 border border-yellow-100 active:bg-yellow-100'
            onPress={() => goTo('/(tabs)/pagentry')}
          >
            <View className="bg-secondary/20 p-3 rounded-full mr-4">
              <Ionicons name="ribbon-outline" size={24} color="#b23836" />
            </View>
            <View className="flex-1">
              <Text className='text-lg font-bold text-slate-900'>
                Pageantry
              </Text>
              <Text className='text-slate-500 text-xs font-medium'>
                Vote for your Beauty Queens
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#94a3b8" />
          </TouchableOpacity>

          <TouchableOpacity
            className='flex-row items-center bg-slate-50 rounded-2xl p-5 border border-slate-100 active:bg-slate-100'
            onPress={() => goTo('/(tabs)/reality-show')}
          >
            <View className="bg-slate-200 p-3 rounded-full mr-4">
              <Ionicons name="videocam-outline" size={24} color="#475569" />
            </View>
            <View className="flex-1">
              <Text className='text-lg font-bold text-slate-900'>
                Reality Shows
              </Text>
              <Text className='text-slate-500 text-xs font-medium'>
                Discover live reality events
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#94a3b8" />
          </TouchableOpacity>
        </View>

        <View className='mt-auto items-center'>
          <Text className='text-[10px] font-bold text-slate-300 uppercase tracking-widest'>
            Powered by EventVoteGH
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}
