import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Index() {
  const goTo = (path: string) => {
    router.push(path as any)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.content}>

        <View style={styles.header}>
          <Text style={styles.brandTitle}>
            EventVote<Text style={styles.brandAccent}>GH</Text>
          </Text>
          <Text style={styles.tagline}>
            The official platform for live voting, ticketing, and event management.
          </Text>
        </View>

        {/* Main Entry Action */}
        <TouchableOpacity
          style={styles.mainButton}
          onPress={() => goTo('/(tabs)/home')}
        >
          <Ionicons name="apps" size={20} color="white" />
          <Text style={styles.mainButtonText}>Go to Dashboard</Text>
        </TouchableOpacity>

        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={[styles.menuItem, styles.menuItemPrimary]}
            onPress={() => goTo('/(tabs)/contests')}
          >
            <View style={[styles.iconContainer, styles.iconContainerPrimary]}>
              <Ionicons name="trophy-outline" size={24} color="white" />
            </View>
            <View style={styles.menuTextContainer}>
              <Text style={[styles.menuTitle, styles.textWhite]}>
                All Contests
              </Text>
              <Text style={styles.menuSubtitleAccent}>
                View and vote in active contests
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.menuItem, styles.menuItemSecondary]}
            onPress={() => goTo('/(tabs)/pagentry')}
          >
            <View style={[styles.iconContainer, styles.iconContainerSecondary]}>
              <Ionicons name="ribbon-outline" size={24} color="#b23836" />
            </View>
            <View style={styles.menuTextContainer}>
              <Text style={[styles.menuTitle, styles.textDark]}>
                Pageantry
              </Text>
              <Text style={styles.menuSubtitle}>
                Vote for your Beauty Queens
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#94a3b8" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.menuItem, styles.menuItemTertiary]}
            onPress={() => goTo('/(tabs)/reality-show')}
          >
            <View style={[styles.iconContainer, styles.iconContainerTertiary]}>
              <Ionicons name="videocam-outline" size={24} color="#475569" />
            </View>
            <View style={styles.menuTextContainer}>
              <Text style={[styles.menuTitle, styles.textDark]}>
                Reality Shows
              </Text>
              <Text style={styles.menuSubtitle}>
                Discover live reality events
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#94a3b8" />
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Powered by EventVoteGH
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24, // px-6
    paddingTop: 40, // pt-10
    paddingBottom: 24, // pb-6
  },
  header: {
    marginBottom: 32, // mb-8
  },
  brandTitle: {
    fontSize: 30, // text-3xl
    fontWeight: '900', // font-black
    color: '#0f172a', // text-slate-900
    letterSpacing: -0.5, // tracking-tight
  },
  brandAccent: {
    color: '#b23836', // text-primary
  },
  tagline: {
    marginTop: 8, // mt-2
    color: '#64748b', // text-slate-500
    fontWeight: '500', // font-medium
    fontSize: 16, // text-base
    lineHeight: 24, // leading-6
  },
  mainButton: {
    width: '100%',
    backgroundColor: '#0f172a', // bg-slate-900
    padding: 16, // p-4
    borderRadius: 16, // rounded-2xl
    marginBottom: 24, // mb-6
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8, // space-x-2 substitute
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  mainButtonText: {
    color: 'white',
    fontSize: 18, // text-lg
    fontWeight: 'bold',
  },
  menuContainer: {
    gap: 16, // space-y-4
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16, // rounded-2xl
    padding: 20, // p-5
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  menuItemPrimary: {
    backgroundColor: '#b23836', // bg-primary
  },
  menuItemSecondary: {
    backgroundColor: '#fefce8', // bg-yellow-50
    borderWidth: 1,
    borderColor: '#fef3c7', // border-yellow-100
  },
  menuItemTertiary: {
    backgroundColor: '#f8fafc', // bg-slate-50
    borderWidth: 1,
    borderColor: '#f1f5f9', // border-slate-100
  },
  iconContainer: {
    padding: 12, // p-3
    borderRadius: 9999, // rounded-full
    marginRight: 16, // mr-4
  },
  iconContainerPrimary: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // bg-white/20
  },
  iconContainerSecondary: {
    backgroundColor: 'rgba(255, 215, 0, 0.2)', // bg-secondary/20
  },
  iconContainerTertiary: {
    backgroundColor: '#e2e8f0', // bg-slate-200
  },
  menuTextContainer: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 18, // text-lg
    fontWeight: 'bold',
  },
  textWhite: {
    color: 'white',
  },
  textDark: {
    color: '#0f172a', // text-slate-900
  },
  menuSubtitle: {
    color: '#64748b', // text-slate-500
    fontSize: 12, // text-xs
    fontWeight: '500', // font-medium
  },
  menuSubtitleAccent: {
    color: '#fef3c7', // text-yellow-100
    fontSize: 12,
    fontWeight: '500',
  },
  footer: {
    marginTop: 'auto',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#cbd5e1', // text-slate-300
    textTransform: 'uppercase',
    letterSpacing: 2, // tracking-widest
  }
});
