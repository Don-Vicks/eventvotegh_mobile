import { Pressable, StyleSheet, Text, TextStyle, ViewStyle } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export function Button({
  title,
  onPress,
  variant = 'primary',
  style,
  textStyle
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        pressed && styles.pressed,
        style
      ]}
    >
      <Text style={[styles.textBase, styles[`text${variant.charAt(0).toUpperCase() + variant.slice(1)}` as keyof typeof styles], textStyle]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: 16, // py-4
    paddingHorizontal: 24, // px-6
    borderRadius: 12, // rounded-xl
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.9,
  },
  primary: {
    backgroundColor: '#b23836', // bg-primary
    // shadow-md shadow-primary/30 matches elevation and shadow props roughly
    shadowColor: '#b23836',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  secondary: {
    backgroundColor: '#FFD700', // bg-secondary
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#b23836', // border-primary
  },
  textBase: {
    fontSize: 16, // text-base
    fontWeight: 'bold', // font-bold
  },
  textPrimary: {
    color: 'white', // text-white
  },
  textSecondary: {
    color: '#0f172a', // text-slate-900
  },
  textOutline: {
    color: '#b23836', // text-primary
  },
});
