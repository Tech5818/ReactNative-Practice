import React from 'react';
import {KeyboardAvoidingView, StatusBar, View} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';

interface FormLayoutProps {
  children: React.ReactNode;
}

export const FormLayout = ({children}: FormLayoutProps) => {
  return (
    <>
      <SafeAreaProvider>
        <StatusBar />
        <KeyboardAvoidingView behavior="height">
          <View>{children}</View>
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    </>
  );
};
