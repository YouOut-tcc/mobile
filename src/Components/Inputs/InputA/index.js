import React, {useRef, forwardRef, useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

export default forwardRef(function InputA(props, ref) {

  const labelRef = useRef(null);

  const handleSubmit = () => {
    props.next.current.focus();
  };

  const textWidth = {
    width: props.width,
  };

  return (
    <>
      <Text
        style={[style.InputText, textWidth]}
        ref={labelRef}>
        {props.label}
      </Text>
      <TextInput
        render={props.mask}
        mode="outlined"
        ref={ref}
        onSubmitEditing={props.onSubmit? props.onSubmit: handleSubmit}
        style={style.Input}
        value={props.value}
        keyboardType={props.keyboardType}
        onChangeText={props.onChange}
        secureTextEntry={props.secureTextEntry}
        right={props.right}
        onBlur={props.onBlur}
      />
    </>
  );
});

const style = StyleSheet.create({
  InputText: {
    marginLeft: 20,
    marginTop: '2%',
    color: '#000',
    backgroundColor: '#EDE0D6',
    zIndex: 1,
    textAlign: 'center',
    top: -2,
  },
  scrollViewContent: {
    flexGrow: 1,
  },

  Input: {
    width: 320,
    height: 50,
    borderRadius: 20,
    marginTop: -16,
    backgroundColor: '#EDE0D6',
  },
});