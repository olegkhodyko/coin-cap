import { TextStyle } from 'react-native';

const FontSize = {
  small: 14,
  medium: 17,
} as const;

const FontFamily = {
  SF_PRO_SEMIBOLD: 'SFProText-Semibold',
} as const;

const TEXT_STYLES: Record<keyof typeof FontSize, TextStyle> = {
  small: {
    fontSize: FontSize.small,
    lineHeight: FontSize.small * 1.2,
    fontFamily: FontFamily.SF_PRO_SEMIBOLD,
  },
  medium: {
    fontSize: FontSize.medium,
    lineHeight: FontSize.medium * 1.4,
    fontFamily: FontFamily.SF_PRO_SEMIBOLD,
  },
};

export default { FontSize, FontFamily, TEXT_STYLES };
