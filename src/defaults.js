export const DEFAULT_FIXED_WIDTH = 400
export const DEFAULT_FLUID_MAX_WIDTH = 800
export const STORYBLOK_BASE_URL = 'https://a.storyblok.com'

export const sizeMultipliersFixed = [1, 1.5, 2, 3]
export const sizeMultipliersFluid = [0.25, 0.5, 1, 1.5, 2, 3]

export const defaultOptions = {
  quality: 90,
  smartCrop: true,
  format: null,
  fill: null,
  toFormat: null,
  base64: null,
  useBase64: true
}

export const defaultFluidOptions = {
  ...defaultOptions,
  maxWidth: DEFAULT_FLUID_MAX_WIDTH,
  maxHeight: null
}

export const defaultFixedOptions = {
  ...defaultOptions,
  width: DEFAULT_FIXED_WIDTH,
  height: null
}
