import React, {useRef, forwardRef, useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-paper';

export default forwardRef(function InputB(
  {
    index,
    state,
    onChange,
    right,
    secureTextEntry,
    onSubmit,
    mask,
    onBlur,
  },
  ref,
) {
  const labelRef = useRef(null);

  let type = state[index].type;

  const email = {
    autoCapitalize: 'none',
    autoComplete: 'email',
    inputMode: 'email',
    keyboardType: 'email-address'
    // keyboardType={keyboardType}
  };

  const currentPassword = {
    autoComplete: "current-password",
    autoCapitalize: 'none',
  }

  const newPassword = {
    autoComplete: "new-password",
    autoCapitalize: 'none',
  }
  
  const handleSubmit = () => {
    props.next.current.focus();
  };

  let typeProps = (type) => {
    switch (type) {
      case "email":
        return email;
      case "new-password":
        return newPassword;
      case "current-password":
        return currentPassword;
      default:
        return {};
    }
  }

  return (
    <View style={style.conteiner}>
      <Text style={style.InputText} ref={labelRef}>
        {state[index].label}
      </Text>
      <TextInput
        mode="outlined"
        render={mask}
        ref={ref}
        onSubmitEditing={onSubmit ? onSubmit : handleSubmit}
        onChangeText={value => onChange(value, index)}
        secureTextEntry={secureTextEntry}
        style={style.Input}
        value={state[index].value}
        right={right}
        onBlur={onBlur}
        error={state[index].error}

        {...typeProps(type)}
      />
      {state[index].errorMessage ? (
        <Text style={style.errorText}>{state[index].errorMessage}</Text>
      ) : null}
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
