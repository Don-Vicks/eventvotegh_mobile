import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Index() {
  const goTo = (path: string) => {
    router.push(path as any)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >

        <View style={styles.header}>
          <Text style={styles.brandTitle}>
            Event<Text style={styles.brandAccent}>House</Text>
          </Text>
          <Text style={styles.tagline}>
            The official platform for live voting, ticketing, and event management.
          </Text>
        </View>

        <Text style={styles.sectionHeader}>What would you like to do?</Text>

        <View style={styles.cardContainer}>
          {/* Action 1: Vote */}
          <TouchableOpacity
            style={[styles.bigCard, styles.cardPrimary]}
            onPress={() => goTo('/(main)/home')}
          >
            <View style={[styles.iconContainer, styles.iconContainerPrimary]}>
              <Ionicons name="trophy-outline" size={32} color="white" />
            </View>
            <Text style={[styles.cardTitle, styles.textWhite]}>Vote for Someone</Text>
            <Text style={[styles.cardDescription, styles.textWhiteDim]}>
              Support your favorite contestants in beauty pageants and reality shows.
            </Text>
          </TouchableOpacity>

          {/* Action 2: Buy Tickets */}
          <TouchableOpacity
            style={[styles.bigCard, styles.cardSecondary]}
            onPress={() => goTo('/(main)/tickets')}
          >
            <View style={[styles.iconContainer, styles.iconContainerSecondary]}>
              <Ionicons name="ticket-outline" size={32} color="#b23836" />
            </View>
            <Text style={[styles.cardTitle, styles.textDark]}>Buy Event Ticket</Text>
            <Text style={[styles.cardDescription, styles.textSlate]}>
              Secure your spot at upcoming events, awards nights, and live shows.
            </Text>
          </TouchableOpacity>

          {/* Action 3: File Nomination (Coming Soon) */}
          <TouchableOpacity
            style={[styles.bigCard, styles.cardTertiary, { opacity: 0.8 }]}
            activeOpacity={0.8}
            onPress={() => { }}
          >
            <View style={styles.comingSoonBadge}>
              <Text style={styles.comingSoonText}>Coming Soon</Text>
            </View>
            <View style={[styles.iconContainer, styles.iconContainerTertiary]}>
              <Ionicons name="document-text-outline" size={32} color="#0f172a" />
            </View>
            <Text style={[styles.cardTitle, styles.textDark]}>File Nomination</Text>
            <Text style={[styles.cardDescription, styles.textSlate]}>
              Submit your nominations for upcoming awards and recognition events.
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Powered by EventHouse
          </Text>
          <Text style={[styles.footerText, { fontSize: 8, marginTop: 4, opacity: 0.6 }]}>
            Built by donvicks.dev
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 24,
  },
  header: {
    marginBottom: 24,
  },
  brandTitle: {
    fontSize: 30,
    fontWeight: '900',
    color: '#0f172a',
    letterSpacing: -0.5,
  },
  brandAccent: {
    color: '#b23836',
  },
  tagline: {
    marginTop: 8,
    color: '#64748b',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 16,
  },
  cardContainer: {
    gap: 16,
    marginBottom: 24, // Add space before footer
  },
  bigCard: {
    // Removed flex: 1 to allow natural height
    width: '100%',
    borderRadius: 24,
    padding: 24,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cardPrimary: {
    backgroundColor: '#b23836',
  },
  cardSecondary: {
    backgroundColor: '#fefce8',
    borderWidth: 1,
    borderColor: '#fef3c7',
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  iconContainerPrimary: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  iconContainerSecondary: {
    backgroundColor: 'rgba(255, 215, 0, 0.2)',
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
  },
  textWhite: { color: 'white' },
  textWhiteDim: { color: 'rgba(255, 255, 255, 0.8)' },
  textDark: { color: '#0f172a' },
  textSlate: { color: '#64748b' },
  footer: {
    marginTop: 'auto',
    alignItems: 'center',
    paddingTop: 20,
  },
  footerText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#cbd5e1',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  cardTertiary: {
    backgroundColor: '#f1f5f9',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  iconContainerTertiary: {
    backgroundColor: 'rgba(15, 23, 42, 0.1)',
  },
  comingSoonBadge: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#0f172a',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  comingSoonText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});
