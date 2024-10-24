import { ReactNode } from 'react';
import { useDrawerProgress } from '@react-navigation/drawer';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

export default function DrawerScene({ children }: { children: ReactNode }) {
  const progress = useDrawerProgress();

  const AnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          progress.value,
          [0, 1],
          [1, 0.7],
          Extrapolation.CLAMP
        ),
      },
      {
        translateX: interpolate(
          progress.value,
          [0, 1],
          [0, 200],
          Extrapolation.CLAMP
        ),
      },
      {
        rotateY:
          interpolate(progress.value, [0, 1], [0, -25], Extrapolation.CLAMP) +
          'deg',
      },
    ],
    borderRadius: 20,
    overflow: 'hidden',
  }));
  return (
    <Animated.View style={[{ flex: 1 }, AnimatedStyle]}>
      {children}
    </Animated.View>
  );
}
