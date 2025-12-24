import EventVoteWebView from '@/components/webview';
import { useLocalSearchParams } from 'expo-router';

const URLS: Record<string, { url: string; title: string }> = {
  contests: {
    url: 'https://eventvotegh.com/contests',
    title: 'All Contests',
  },
  pagentry: {
    url: 'https://eventvotegh.com/contests#Pagentry',
    title: 'Pagentry Contests',
  },
  'reality-show': {
    url: 'https://eventvotegh.com/contests#Reality%20Show',
    title: 'Reality Show Contests',
  },
  awards: {
    url: 'https://eventvotegh.com/contests', // Placeholder until dedicated Awards URL provided
    title: 'Awards & Nominations',
  },
}

export default function DynamicWebviewScreen() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const config = URLS[id ?? 'contests'] ?? URLS.contests

  return <EventVoteWebView url={config.url} title={config.title} />
}
