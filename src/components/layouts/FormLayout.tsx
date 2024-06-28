import React from 'react';
import {KeyboardAvoidingView, StatusBar, View} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

interface FormLayoutProps {
  children: React.ReactNode;
}

export const FormLayout = ({children}: FormLayoutProps) => {
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'red',
        }}>
        <StatusBar />
        <KeyboardAvoidingView behavior="height" style={{flex: 1}}>
          <View style={{flex: 1, backgroundColor: 'red'}}>{children}</View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};
