/**
 * @format
 * Component Style
 */

import {ScaledSheet} from 'react-native-size-matters';

import {colors} from '@app/styles/colors';

export const getStyle = () => {
  return ScaledSheet.create({
    // Button
    btnColor: {
      width: '72@ms',
      height: '72@ms',
      borderRadius: '24@ms',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 8,
    },

    smallText: {
      fontSize: '32@ms',
    },

    // Keyboard
   
    container: {
      height: '120@ms',
      width: '90%',
      justifyContent: 'flex-end',
      alignSelf: 'center',
    },

    operation: {
      color: 'purple',
      fontSize: '50@ms',
      fontWeight: '500',
    },

    row: {
      maxWidth: '100%',
      flexDirection: 'row',
    },

    viewBottom: {
      position: 'absolute',
      bottom: '50@ms',
    },

    screenFirstNumber: {
      fontSize: '96@ms',
      color: colors.black,
      fontWeight: '200',
      alignSelf: 'flex-end',
    },

    screenSecondNumber: {
      fontSize: '40@ms',
      color: colors.black,
      fontWeight: '200',
      alignSelf: 'flex-end',
    },
  });
};
