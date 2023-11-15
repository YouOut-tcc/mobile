import React, {useRef, forwardRef, useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-paper';

export default forwardRef(function InputA(props, ref) {
  const labelRef = useRef(null);

  const handleSubmit = () => {
    props.next.current.focus();
  };

  return (
    <View style={style.conteiner}>
      <Text style={style.InputText} ref={labelRef}>
        {props.label}
      </Text>
      <TextInput
        render={props.mask}
        mode="outlined"
        ref={ref}
        onSubmitEditing={props.onSubmit ? props.onSubmit : handleSubmit}
        style={style.Input}
        value={props.value}
        keyboardType={props.keyboardType}
        onChangeText={props.onChange}
        secureTextEntry={props.secureTextEntry}
        right={props.right}
        onBlur={props.onBlur}
        error={props.error}
      />
      {props.errorMessage ? <Text style={style.errorText}>{props.errorMessage}</Text> : null}
    </View>
  );
});

const style = StyleSheet.create({
  conteiner: {
    marginTop: '5%',
  },
  InputText: {
    position: 'absolute',

    marginLeft: 20,
    paddingLeft: 4,
    paddingRight: 4,
    marginTop: -4,
    width: 'auto',
    color: '#000',
    backgroundColor: '#EDE0D6',
    zIndex: 1,

    // borderColor: "red",
    // borderWidth: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },

  Input: {
    width: '100%',
    height: 50,
    borderRadius: 20,
    backgroundColor: '#EDE0D6',
  },

  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
    fontWeight: 'bold',
  },
});
