import clsx from 'clsx';
import { StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ScreenProps {
  children: React.ReactNode;
  className?: string;
}

export function Screen({ children, className }: ScreenProps) {
  return (
    <SafeAreaView className="flex-1 bg-surface pt-8" edges={['top']}>
      <StatusBar barStyle="dark-content" />
      <View className={clsx("flex-1 px-6", className)}>
        {children}
      </View>
    </SafeAreaView>
  );
}
