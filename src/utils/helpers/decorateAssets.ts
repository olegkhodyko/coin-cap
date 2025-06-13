import { CryptoCoin, ModifiedCryptoCoin } from '@interfaces/states/api';

const colorCache = new Map<string, string>();

function getColorFromSymbol(symbol: string): string {
  if (colorCache.has(symbol)) {
    return colorCache.get(symbol)!;
  }

  let hash = 0;
  for (let i = 0; i < symbol.length; i++) {
    hash = symbol.charCodeAt(i) + (hash * 32 - hash);
  }

  const hue = Math.abs(hash) % 360;
  const saturation = 65 + (Math.abs(hash) % 20);
  const lightness = 45 + (Math.abs(hash) % 10);

  const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  colorCache.set(symbol, color);

  return color;
}

export function decorateWithColor(data: CryptoCoin[]): ModifiedCryptoCoin[] {
  return data.map(asset => {
    const { symbol } = asset;

    if (!colorCache.has(symbol)) {
      const color = getColorFromSymbol(symbol);
      colorCache.set(symbol, color);
    }

    return {
      ...asset,
      backgroundColor: colorCache.get(symbol)!,
    };
  });
}
