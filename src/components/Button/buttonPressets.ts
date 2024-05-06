import {ThemeColors} from '../../theme/theme';
import {TouchableOpacityBoxProps} from '../Box/Box';
import {ButtonPreset} from './Button';

interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: ThemeColors;
}

export const buttonPresets: Record<
  ButtonPreset,
  {
    default: ButtonUI;
    disabled: ButtonUI;
  }
> = {
  primary: {
    default: {
      container: {
        backgroundColor: 'purplePrimary',
      },
      content: 'primaryContrast',
    },
    disabled: {
      container: {
        backgroundColor: 'grey75',
      },
      content: 'grey200',
    },
  },
  outline: {
    default: {
      container: {
        borderWidth: 1,
        borderColor: 'purplePrimary',
      },
      content: 'purplePrimary',
    },
    disabled: {
      container: {
        borderWidth: 1,
        borderColor: 'grey75',
      },
      content: 'grey200',
    },
  },
};