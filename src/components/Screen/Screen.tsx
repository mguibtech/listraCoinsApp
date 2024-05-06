import React from 'react';
import {KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Box, BoxProps } from '../Box/Box';
import { useAppSafeArea } from '../../hooks/useAppSafeArea';
import { ScrollViewContainer, ViewContainer } from './components/ScreenContainer';
import { useAppTheme } from '../../hooks/useAppTheme';
import { ScreenHeader } from './components/ScreenHeader';

export interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
  title?: string;
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
  title,
  style,
  ...boxProps
}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  const {colors} = useAppTheme();

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          // paddingHorizontal="s24"
          style={[{paddingTop: top, paddingBottom: bottom}, style]}
          {...boxProps}>
          {canGoBack && <ScreenHeader canGoBack={canGoBack} title={title} />}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}