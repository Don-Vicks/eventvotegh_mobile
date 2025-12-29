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

        <Text style={styles.sectionHeader}>What would you like to do?</Text>

        <View style={styles.cardContainer}>
          Action 1: Vote
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
    flex: 1,
    gap: 16,
  },
  bigCard: {
    flex: 1,
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
  }
});
