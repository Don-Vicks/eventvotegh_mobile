import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";
import { useCallback, useState } from "react";
import { RefreshControl, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabsHome() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const menuItems = [
    {
      title: 'Contests',
      subtitle: 'Official Voting',
      icon: 'trophy-outline',
      color: 'bg-primary',
      textColor: 'text-white',
      iconColor: 'white',
      route: '/browser/contests',
      fullWidth: true
    },
    {
      title: 'Pageantry',
      subtitle: 'Beauty Queens',
      icon: 'ribbon-outline',
      color: 'bg-yellow-50',
      textColor: 'text-slate-900',
      iconColor: '#b23836',
      route: '/browser/pagentry',
      fullWidth: false
    },
    {
      title: 'Reality',
      subtitle: 'Live Shows',
      icon: 'videocam-outline',
      color: 'bg-slate-50',
      textColor: 'text-slate-900',
      iconColor: '#b23836',
      route: '/browser/reality-show',
      fullWidth: false
    }
  ];

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        className="flex-1 px-6 pt-4"
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#b23836" />}
      >
        {/* Clean Header */}
        <View className="flex-row justify-between items-center mb-8">
          <View className="flex-1 mr-4">
            <Text className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Welcome</Text>
            <Text className="text-2xl font-black text-slate-900 leading-8">
              Which action will you like to perform today?
            </Text>
          </View>
          <View className="bg-slate-50 p-2 rounded-full border border-slate-100">
            <Ionicons name="person" size={20} color="#64748b" />
          </View>
        </View>

        {/* Dashboard Grid */}
        <View className="flex-row flex-wrap justify-between gap-y-4 pb-20">
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              className={`${item.fullWidth ? 'w-full' : 'w-[48%]'} ${item.color} p-5 rounded-2xl justify-between shadow-sm active:opacity-90 min-h-[140px]`}
              onPress={() => router.push(item.route as any)}
              style={!item.fullWidth ? { borderWidth: 1, borderColor: item.color === 'bg-sky-50' ? '#e0f2fe' : '#f1f5f9' } : {}}
            >
              <View className={`self-start p-3 rounded-full ${item.iconColor === 'white' ? 'bg-white/20' : 'bg-white'}`}>
                <Ionicons name={item.icon as any} size={24} color={item.iconColor} />
              </View>

              <View>
                <Text className={`${item.textColor === 'text-white' ? 'text-yellow-100' : 'text-slate-500'} font-medium text-xs uppercase tracking-wide`}>
                  {item.subtitle}
                </Text>
                <Text className={`${item.textColor} font-black text-xl tracking-tight`}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          ))}

          {/* Support / Help Card */}
          <TouchableOpacity
            className="w-full mt-2 bg-slate-900 p-5 rounded-2xl flex-row items-center justify-center space-x-3 active:opacity-90"
            onPress={() => router.push('/browser/contests' as any)}
          >
            <Ionicons name="help-buoy-outline" size={20} color="white" />
            <Text className="text-white font-bold">Need Help?</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}
