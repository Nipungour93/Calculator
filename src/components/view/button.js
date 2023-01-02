/**
 * @format
 * Button
 */

import {TouchableOpacity, Text} from 'react-native';

import {colors} from '@app/styles/colors';
import {getStyle} from './styles';

const Button = ({title, onPress, isBlue, isGray, light,dark, ...rest}) => {
  const styles = getStyle();
  return (
    <TouchableOpacity
      style={
        isBlue
          ? [styles.btnColor, {backgroundColor: colors.blue}]
          : isGray
          ? [styles.btnColor, {backgroundColor: colors.gray}]
          : light
          ? [styles.btnColor, {backgroundColor: colors.light}]
          : [styles.btnColor, {backgroundColor: colors.btnDark}]
      }
      {...rest}
      onPress={onPress}>
      <Text
        style={
          isBlue || isGray
            ? [styles.smallText, {color: colors.white}]
            : dark
            ? [styles.smallText, {color: colors.white}]
            : [styles.smallText, {color: colors.white}]
        }>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export {Button};
