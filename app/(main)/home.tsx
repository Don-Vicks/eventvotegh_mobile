import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";
import { useCallback, useState } from "react";
import { RefreshControl, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
      title: 'Awards',
      subtitle: 'Official Voting',
      icon: 'trophy-outline',
      style: styles.cardPrimary,
      textColor: styles.textWhite,
      subTextColor: styles.textYellow,
      iconColor: 'white',
      iconBg: styles.iconBgWhite,
      route: '/browser/contests',
      fullWidth: true
    },
    {
      title: 'Pageantry',
      subtitle: 'Beauty Queens',
      icon: 'ribbon-outline',
      style: styles.cardSecondary,
      textColor: styles.textDark,
      subTextColor: styles.textSlate,
      iconColor: '#b23836',
      iconBg: styles.iconBgWhiteSolid,
      route: '/browser/pagentry',
      fullWidth: true
    },
    {
      title: 'Reality',
      subtitle: 'Live Shows',
      icon: 'videocam-outline',
      style: styles.cardTertiary,
      textColor: styles.textDark,
      subTextColor: styles.textSlate,
      iconColor: '#b23836',
      iconBg: styles.iconBgWhiteSolid,
      route: '/browser/reality-show',
      fullWidth: true
    }
  ];

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#b23836" />}
      >
        {/* Clean Header */}
        <View style={styles.header}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.questionText}>
              Select Voting Category
            </Text>
          </View>
        </View>

        {/* Dashboard Grid */}
        <View style={styles.grid}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.card,
                item.style,
                item.fullWidth ? styles.wFull : styles.wHalf
              ]}
              onPress={() => router.push(item.route as any)}
            >
              <View style={[styles.iconContainer, item.iconBg]}>
                <Ionicons name={item.icon as any} size={24} color={item.iconColor} />
              </View>

              <View>
                <Text style={[styles.cardSubtitle, item.subTextColor]}>
                  {item.subtitle}
                </Text>
                <Text style={[styles.cardTitle, item.textColor]}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          ))}

          {/* Support / Help Card */}
          <TouchableOpacity
            style={styles.helpCard}
            onPress={() => router.push('/browser/contact' as any)}
          >
            <Ionicons name="help-buoy-outline" size={20} color="white" />
            <Text style={styles.helpText}>Need Help?</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24, // px-6
    paddingTop: 16, // pt-4
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32, // mb-8
  },
  headerTextContainer: {
    flex: 1,
    marginRight: 16,
  },
  welcomeText: {
    fontSize: 14, // text-sm
    fontWeight: 'bold',
    color: '#94a3b8', // text-slate-400
    textTransform: 'uppercase',
    letterSpacing: 1.5, // tracking-wider
    marginBottom: 4,
  },
  questionText: {
    fontSize: 24, // text-2xl
    fontWeight: '900', // font-black
    color: '#0f172a', // text-slate-900
    lineHeight: 32,
  },
  profileIcon: {
    backgroundColor: '#f8fafc', // bg-slate-50
    padding: 8,
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: '#f1f5f9',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16, // gap-y-4 (handled by gap in modern RN or marginTop in older)
    paddingBottom: 80, // pb-20
  },
  card: {
    padding: 20,
    borderRadius: 16,
    justifyContent: 'space-between',
    minHeight: 140,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  wFull: {
    width: '100%',
  },
  wHalf: {
    width: '48%',
  },
  cardPrimary: {
    backgroundColor: '#b23836', // bg-primary
  },
  cardSecondary: {
    backgroundColor: '#fefce8', // bg-yellow-50
    borderWidth: 1,
    borderColor: '#fef3c7',
  },
  cardTertiary: {
    backgroundColor: '#f8fafc', // bg-slate-50
    borderWidth: 1,
    borderColor: '#f1f5f9',
  },
  iconContainer: {
    alignSelf: 'flex-start',
    padding: 12,
    borderRadius: 9999,
  },
  iconBgWhite: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  iconBgWhiteSolid: {
    backgroundColor: 'white',
  },
  cardSubtitle: {
    fontWeight: '500',
    fontSize: 12, // text-xs
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  cardTitle: {
    fontWeight: '900',
    fontSize: 20, // text-xl
    letterSpacing: -0.5,
  },
  textWhite: { color: 'white' },
  textDark: { color: '#0f172a' },
  textYellow: { color: '#fef3c7' },
  textSlate: { color: '#64748b' },

  helpCard: {
    width: '100%',
    marginTop: 8,
    backgroundColor: '#0f172a', // bg-slate-900
    padding: 20,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  helpText: {
    color: 'white',
    fontWeight: 'bold',
  }
});
