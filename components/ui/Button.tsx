import clsx from 'clsx';
import { Pressable, Text } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  textClassName?: string;
}

export function Button({
  title,
  onPress,
  variant = 'primary',
  className,
  textClassName
}: ButtonProps) {
  const baseStyles = "py-4 px-6 rounded-xl flex-row justify-center items-center active:opacity-90 transition-opacity";

  const variants = {
    primary: "bg-primary shadow-md shadow-primary/30",
    secondary: "bg-secondary shadow-md shadow-secondary/30",
    outline: "bg-transparent border-2 border-primary",
  };

  const textVariants = {
    primary: "text-white font-bold text-base",
    secondary: "text-slate-900 font-bold text-base",
    outline: "text-primary font-bold text-base",
  };

  return (
    <Pressable
      onPress={onPress}
      className={clsx(baseStyles, variants[variant], className)}
    >
      <Text className={clsx(textVariants[variant], textClassName)}>
        {title}
      </Text>
    </Pressable>
  );
}
