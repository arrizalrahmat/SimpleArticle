import { useWindowDimensions } from 'react-native';

export const windowDimensions = () => {
  const { width, height } = useWindowDimensions();

  return { width, height };
};
