/**
 * @format
 * Home
 */

import {SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Appbar} from 'react-native-paper';

// component
import {Container} from '@app/components/view/container';
// style
import {colors} from '@app/styles/colors';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Appbar style={styles.head}>
        <Appbar.Content title={'Calculator'} titleStyle={styles.headerTitle} />
        <Appbar.Content />
      </Appbar>
      <Container />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  head: {
    height: '70@ms',
    backgroundColor: colors.blue,
  },
  headerTitle: {
    fontWeight: 'bold',
    color: colors.white,
    fontSize: '25@ms',
  },
  container: {
    flex: 1,
    backgroundColor: colors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export {HomeScreen};
