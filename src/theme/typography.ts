import {
  FontFamilyProps,
  FontSizeProps,
  TextStyleProps,
} from '@interfaces/props/theme';

const FontSize: FontSizeProps = {
  sm: 14,
  md: 17,
  lg: 20,
} as const;

const FontFamily: FontFamilyProps = {
  regular: 'SFProText-Regular',
  semibold: 'SFProText-Semibold',
} as const;

const TextStyles: TextStyleProps = {
  body: {
    fontSize: FontSize.md,
    lineHeight: FontSize.md * 1.4,
    fontFamily: FontFamily.regular,
  },
  bodyBold: {
    fontSize: FontSize.md,
    lineHeight: FontSize.md * 1.4,
    fontFamily: FontFamily.semibold,
  },
  caption: {
    fontSize: FontSize.sm,
    lineHeight: FontSize.sm * 1.2,
    fontFamily: FontFamily.regular,
  },
} as const;

export default { FontSize, FontFamily, TextStyles };
