import { StyleSheet, ScrollView,SafeAreaView,Text,TouchableOpacity, TextInput,View } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik';
//form validation
import * as Yup from 'yup';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Passwordschema=Yup.object().shape({
    passwordlength:Yup.number()
    .min(4,'Shoul be min 4 char')
    .max(16,'should be max 16 char')
    .required("Password is required")
})

const PaswordGen = () => {

    const [password,setpassword]=useState('');
    const [lowercase,setlowercase]=useState(true);
    const [uppercase,setuppercase]=useState(false);
    const [numbers,setnumbers]=useState(false);
    const [symbols,setsymbols]=useState(false);
    const[ispassgenerated,setispassgenerated]=useState(false);



    const generatepasswordstring=(passwordlength:number)=>{
        const uppcasechars='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercasechars='abcdefghijklmnopqrstuvwxyz';
        const digitchars='0123456789';
        const specialchar='!@#$%^&*()_=+,-./';
        let characterlist='';
        if(uppercase){
            characterlist+=uppcasechars;
        }if(lowercase){
            characterlist+=lowercasechars;
        }if(numbers){
            characterlist+=digitchars;
        }if(symbols){
            characterlist+=specialchar;
        }
        const passwordresult=createpassword(characterlist,passwordlength);
        setpassword(passwordresult);
        setispassgenerated(true);

    } 
    const createpassword=(characters:string,passwordlength:number)=>{
        let result='';
        for (let i = 0; i < passwordlength; i++) {
            const charinidex=Math.round(Math.random()*characters.length);
            result+=characters.charAt(charinidex);
        }
        return result;

    }   
     const resetpassword=()=>{

        setpassword('');
        setnumbers(false);
        setispassgenerated(false);
        setlowercase(true);
        setsymbols(false);
        setuppercase(false);

    }




  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
       initialValues={{ passwordLength: '' }}
       validationSchema={Passwordschema}
       onSubmit={ 
        (values) => {
        console.log(values);
        console.log("Fdsfs");
        generatepasswordstring(+values.passwordLength) 
       }}
     >
       {({
         values,
         errors,
         touched,
         isValid,
         handleChange,
         handleSubmit,
         handleReset,
       }) => (
         <>
         <View style={styles.inputWrapper}>
          <View style={styles.inputColumn}>
            <Text style={styles.heading}>Password Length</Text>
            {touched.passwordLength && errors.passwordLength && (
              <Text style={styles.errorText}>
                {errors.passwordLength}
              </Text>
            )}
            
          </View>
          <TextInput
            style={styles.inputStyle}
            value={values.passwordLength}
            onChangeText={handleChange('passwordLength')}
            placeholder="Ex. 8"
            keyboardType='numeric'
            />
         </View>
         <View style={styles.inputWrapper}>
          <Text style={styles.heading}>Include lowercase</Text>
          <BouncyCheckbox
          disableBuiltInState
          isChecked={lowercase}
          onPress={() => setlowercase(!lowercase)}
          fillColor="#29AB87"
          />
         </View>
         <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Uppercase letters</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={uppercase}
                    onPress={() => setuppercase(!uppercase)}
                    fillColor="#FED85D"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Numbers</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={numbers}
                    onPress={() => setnumbers(!numbers)}
                    fillColor="#C9A0DC"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Symbols</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={symbols}
                    onPress={() => setsymbols(!symbols)}
                    fillColor="#FC80A5"
                  />
                </View>
         <View style={styles.formActions}>
          <TouchableOpacity
          disabled={!isValid}
          style={styles.primaryBtn}
          onPress={handleSubmit}
          >
            <Text style={styles.primaryBtnTxt}>Generate Password</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.secondaryBtn}
          onPress={ () => {
            handleReset();
            resetpassword()
          }}
          >
            <Text style={styles.secondaryBtnTxt}>Reset</Text>
          </TouchableOpacity>
         </View>
         </>
       )}
          </Formik>
        </View>
        {ispassgenerated ? (
          <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.subTitle}>Result:</Text>
            <Text style={styles.description}>Long Press to copy</Text>
            {/* selectable={true} means copy karsakte as clipboard */}
            <Text selectable={true} style={styles.generatedPassword}>{password}</Text>
          </View>
        ) : null}
      </SafeAreaView>
    </ScrollView>
  )
}

export default PaswordGen

const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
    },
    formContainer: {
      margin: 8,
      padding: 8,
    },
    title: {
      fontSize: 32,
      fontWeight: '600',
      marginBottom: 15,
    },
    subTitle: {
      fontSize: 26,
      fontWeight: '600',
      marginBottom: 2,
    },
    description: {
      color: '#758283',
      marginBottom: 8,
    },
    heading: {
      fontSize: 15,
    },
    inputWrapper: {
      marginBottom: 15,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    inputColumn: {
      flexDirection: 'column',
    },
    inputStyle: {
      padding: 8,
      width: '30%',
      borderWidth: 1,
      borderRadius: 4,
      borderColor: '#16213e',
    },
    errorText: {
      fontSize: 12,
      color: '#ff0d10',
    },
    formActions: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    primaryBtn: {
      width: 120,
      padding: 10,
      borderRadius: 8,
      marginHorizontal: 8,
      backgroundColor: '#5DA3FA',
    },
    primaryBtnTxt: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: '700',
    },
    secondaryBtn: {
      width: 120,
      padding: 10,
      borderRadius: 8,
      marginHorizontal: 8,
      backgroundColor: '#CAD5E2',
    },
    secondaryBtnTxt: {
      textAlign: 'center',
    },
    card: {
      padding: 12,
      borderRadius: 6,
      marginHorizontal: 12,
    },
    cardElevated: {
      backgroundColor: '#ffffff',
      elevation: 1,
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowColor: '#333',
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
    generatedPassword: {
      fontSize: 22,
      textAlign: 'center',
      marginBottom: 12,
      color:'#000'
    },
  });