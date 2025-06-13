import { Dimensions } from "react-native";

export const LIST_ITEM_HEIGHT = 84;

export const maxToRenderPerBatch = Math.ceil(
  Dimensions.get('screen').height / LIST_ITEM_HEIGHT,
);
