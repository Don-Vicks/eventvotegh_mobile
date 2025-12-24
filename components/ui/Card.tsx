import clsx from 'clsx';
import { Platform, Pressable, View } from 'react-native';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onPress?: () => void;
}

export function Card({ children, className, onPress }: CardProps) {
  const content = (
    <View
      className={clsx(
        "bg-white rounded-2xl p-4 shadow-sm border border-slate-100",
        className
      )}
      style={Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
        },
        android: {
          elevation: 4,
        }
      })}
    >
      {children}
    </View>
  );

  if (onPress) {
    return (
      <Pressable onPress={onPress} className="active:opacity-90">
        {content}
      </Pressable>
    );
  }

  return content;
}
