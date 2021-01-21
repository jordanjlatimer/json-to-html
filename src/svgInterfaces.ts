import { SlamElementAttributes } from "./baseInterfaces";

export interface SlamSVGElementAttributes extends SlamElementAttributes {}

export interface SlamSVGConditionalProcessingAttributes {
  requiredExtensions?: string;
  systemLanguage?: string;
}

export interface SlamSVGPresentationAttributes {
  "alignment-baseline": string;
  "baseline-shift": string;
  "clip-path"?: string;
  "clip-rule"?: string;
  "color"?: string;
  "color-interpolation"?: string;
  "color-interpolation-filters"?: string;
  "color-rendering"?: string;
  "cursor"?: string;
  "direction"?: string;
  "display"?: string;
  "dominant-baseline"?: string;
  "fill-opacity"?: string;
  "fill-rule"?: string;
  "filter"?: string;
  "flood-color"?: string;
  "flood-opacity"?: string;
  "font-family"?: string;
  "font-size"?: string;
  "font-size-adjust"?: string;
  "font-stretch"?: string;
  "font-style"?: string;
  "font-variant"?: string;
  "font-weight"?: string;
  "glyph-orientation-horizontal"?: string;
  "glyph-orientation-vertical"?: string;
  "image-rendering"?: string;
  "letter-spacing"?: string;
  "lighting-color"?: string;
  "marker-end"?: string;
  "marker-mid"?: string;
  "marker-start"?: string;
  "mask"?: string;
  "opacity"?: string;
  "overflow"?: string;
  "paint-order"?: string;
  "pointer-events"?: string;
  "shape-rendering"?: string;
  "stop-color"?: string;
  "stop-opacity"?: string;
  "stroke"?: string;
  "stroke-dasharray"?: string;
  "stroke-dashoffset"?: string;
  "stroke-linecap"?: string;
  "stroke-linejoin"?: string;
  "stroke-miterlimit"?: string;
  "stroke-opacity"?: string;
  "stroke-width"?: string;
  "text-anchor"?: string;
  "text-decoration"?: string;
  "text-overflow"?: string;
  "text-rendering"?: string;
  "unicode-bidi"?: string;
  "vector-effect"?: string;
  "visibility"?: string;
  "white-space"?: string;
  "word-spacing"?: string;
  "writing-mode": string;
}

export interface SlamSVGAnimationAdditionAttributes {
  additive?: "replace" | "sum";
  accumulate?: "none" | "sum";
}

export interface SlamSVGAnimationTargetElementAttributes {
  href?: string;
}

export interface SlamSVGAnimationAttributeTargetAttributes {
  attributeName?: string;
}

export interface SlamSVGAnimationTimingAttributes {
  begin?: string;
  dur?: "media" | "indefinite" | string;
  end?: string;
  min?: "media" | string;
  max?: "media" | string;
  restart?: "always" | "whenNotActive" | "never";
  repeatCount?: "indefinite" | number;
  repeatDur?: "indefinite" | string;
  fill?: "freeze" | "remove";
}

export interface SlamSVGAnimationValueAttributes {
  calcMode?: "discrete" | "linear" | "paced" | "spline";
  values?: string;
  keyTimes?: string;
  keySplines?: string;
  from?: string;
  to?: string;
  by?: string;
}

export interface SlamSVGFilterPrimitiveAttributes {
  x?: string;
  y?: string;
  width?: string;
  height?: string;
  result?: string;
}

export interface SlamSVGTransferFunctionElementAttributes {
  type?: "identity" | "table" | "discrete" | "linear" | "gamma";
  tableValues?: string;
  slope?: number;
  intercept?: number;
  amplitude?: number;
  exponent?: number;
  offset?: number;
}

export interface SlamSVGAAttributes
  extends SlamSVGElementAttributes,
    SlamSVGConditionalProcessingAttributes,
    SlamSVGPresentationAttributes {
  href?: string;
  download?: string;
  hreflang?: string;
  ping?: string;
  referrerpolicy?:
    | "no-referrer"
    | "no-referrer-when-downgrade"
    | "same-origin"
    | "origin"
    | "strict-origin"
    | "origin-when-cross-origin"
    | "strict-origin-when-cross-origin"
    | "unsafe-url";
  rel?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  type?: string;
}

export interface SlamSVGAnimateAttributes
  extends SlamSVGElementAttributes,
    SlamSVGConditionalProcessingAttributes,
    SlamSVGPresentationAttributes,
    SlamSVGAnimationAdditionAttributes,
    SlamSVGAnimationTargetElementAttributes,
    SlamSVGAnimationAttributeTargetAttributes,
    SlamSVGAnimationTimingAttributes,
    SlamSVGAnimationValueAttributes {}

export interface SlamSVGAnimateMotionAttributes
  extends SlamSVGElementAttributes,
    SlamSVGConditionalProcessingAttributes,
    SlamSVGAnimationAdditionAttributes,
    SlamSVGAnimationTargetElementAttributes,
    SlamSVGAnimationTimingAttributes,
    SlamSVGAnimationValueAttributes {
  path?: string;
  keyPoints?: string;
  rotate?: "auto" | "auto-reverse" | number;
  origin?: "default";
}

export interface SlamSVGAnimateTransformAttributes
  extends SlamSVGElementAttributes,
    SlamSVGConditionalProcessingAttributes,
    SlamSVGAnimationAdditionAttributes,
    SlamSVGAnimationTargetElementAttributes,
    SlamSVGAnimationAttributeTargetAttributes,
    SlamSVGAnimationTimingAttributes,
    SlamSVGAnimationValueAttributes {
  type?: "translate" | "scale" | "rotate" | "skewX" | "skewY";
}

export interface SlamSVGCircleAttributes
  extends SlamSVGElementAttributes,
    SlamSVGConditionalProcessingAttributes,
    SlamSVGPresentationAttributes {
  pathLength?: number;
  cx?: number;
  cy?: number;
  r?: number;
}

export interface SlamSVGClipPathAttributes
  extends SlamSVGElementAttributes,
    SlamSVGConditionalProcessingAttributes,
    SlamSVGPresentationAttributes {
  externalResourcesRequired?: boolean;
  transform?: string;
  clipPathUnits?: "userSpaceOnUse" | "objectBoundingBox";
}

export interface SlamSVGDefsAttributes extends SlamSVGElementAttributes, SlamSVGPresentationAttributes {}

export interface SlamSVGDescAttributes extends SlamSVGElementAttributes {}

export interface SlamSVGDiscardAttributes extends SlamSVGElementAttributes, SlamSVGConditionalProcessingAttributes {
  begin?: string;
  href?: string;
}

export interface SlamSVGEllipseAttributes
  extends SlamSVGElementAttributes,
    SlamSVGPresentationAttributes,
    SlamSVGConditionalProcessingAttributes {
  pathLength?: number;
  cx?: number;
  cy?: number;
  rx?: number;
  ry?: number;
}

export interface SlamSVGFeBlendAttributes
  extends SlamSVGElementAttributes,
    SlamSVGPresentationAttributes,
    SlamSVGFilterPrimitiveAttributes {
  in?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
  in2?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
  mode?:
    | "normal"
    | "multiply"
    | "screen"
    | "overlay"
    | "darken"
    | "lighten"
    | "color-dodge"
    | "color-burn"
    | "hard-light"
    | "soft-light"
    | "difference"
    | "exclusion"
    | "hue"
    | "saturation"
    | "color"
    | "luminosity";
}

export interface SlamSVGFeColorMatrixAttributes
  extends SlamSVGElementAttributes,
    SlamSVGPresentationAttributes,
    SlamSVGFilterPrimitiveAttributes {
  in?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
  type?: "matrix" | "saturate" | "hueRotate" | "luminanceToAlpha";
  values?: string;
}

export interface SlamSVGFeComponentTransferAttributes
  extends SlamSVGElementAttributes,
    SlamSVGPresentationAttributes,
    SlamSVGFilterPrimitiveAttributes {
  in?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
}

export interface SlamSVGFeCompositeAttributes
  extends SlamSVGElementAttributes,
    SlamSVGPresentationAttributes,
    SlamSVGFilterPrimitiveAttributes {
  in?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
  in2?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
  operator?: "over" | "in" | "out" | "atop" | "xor" | "lighter" | "arithmetic";
  k1?: number;
  k2?: number;
  k3?: number;
  k4?: number;
}

export interface SlamSVGFeConvolveMatrixAttributes
  extends SlamSVGElementAttributes,
    SlamSVGPresentationAttributes,
    SlamSVGFilterPrimitiveAttributes {
  in?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
  order?: string;
  kernelMatrix?: string;
  divisor?: number;
  bias?: number;
  targetX?: number;
  targetY?: number;
  edgeMode?: "duplicate" | "wrap" | "none";
  kernelUnitLength?: string;
  preserveAlpha?: boolean;
}

export interface SlamSVGFeDiffuseLightingAttributes
  extends SlamSVGElementAttributes,
    SlamSVGPresentationAttributes,
    SlamSVGFilterPrimitiveAttributes {
  in?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
  surfaceScale?: number;
  diffuseConstant?: number;
  kernelUnitLength?: string;
}

export interface SlamSVGFeDisplacementMapAttributes
  extends SlamSVGElementAttributes,
    SlamSVGPresentationAttributes,
    SlamSVGFilterPrimitiveAttributes {
  in?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
  in2?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
  scale?: number;
  xChannelSelector?: "R" | "G" | "B" | "A";
  yChannelSelector?: "R" | "G" | "B" | "A";
}

export interface SlamSVGFeDistantLightAttributes extends SlamSVGElementAttributes {
  azimuth?: number;
  elevation?: number;
}

export interface SlamSVGFeDropShadowAttributes
  extends SlamSVGElementAttributes,
    SlamSVGPresentationAttributes,
    SlamSVGFilterPrimitiveAttributes {
  in?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
  stdDeviation?: string;
  dx?: number;
  dy?: number;
}

export interface SlamSVGFeFloodAttributes
  extends SlamSVGElementAttributes,
    SlamSVGPresentationAttributes,
    SlamSVGFilterPrimitiveAttributes {}

export interface SlamSVGFeFuncAAttributes extends SlamSVGElementAttributes, SlamSVGTransferFunctionElementAttributes {}

export interface SlamSVGFeFuncBAttributes extends SlamSVGElementAttributes, SlamSVGTransferFunctionElementAttributes {}

export interface SlamSVGFeFuncGAttributes extends SlamSVGElementAttributes, SlamSVGTransferFunctionElementAttributes {}

export interface SlamSVGFeFuncRAttributes extends SlamSVGElementAttributes, SlamSVGTransferFunctionElementAttributes {}

export interface SlamSVGFeGaussianBlurAttributes
  extends SlamSVGElementAttributes,
    SlamSVGPresentationAttributes,
    SlamSVGFilterPrimitiveAttributes {
  in?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
  stdDeviation?: string;
  edgeMode?: "duplicate" | "wrap" | "none";
}

export interface SlamSVGFeImageAttributes
  extends SlamSVGElementAttributes,
    SlamSVGPresentationAttributes,
    SlamSVGFilterPrimitiveAttributes {
  "externalResourcesRequired"?: boolean;
  "preserveAspectRatio"?: string;
  "xlink:href"?: string;
  "href"?: string;
  "crossorigin"?: "anonymous" | "use-credentials";
}

export interface SlamSVGFeMergeAttributes
  extends SlamSVGElementAttributes,
    SlamSVGPresentationAttributes,
    SlamSVGFilterPrimitiveAttributes {}

export interface SlamSVGFeMergeNodeAttributes extends SlamSVGElementAttributes {
  in?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
}

export interface SlamSVGFeMorphologyAttributes
  extends SlamSVGElementAttributes,
    SlamSVGPresentationAttributes,
    SlamSVGFilterPrimitiveAttributes {
  in?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
  operator?: "erode" | "dilate";
  radius?: string;
}

export interface SlamSVGFeOffsetAttributes
  extends SlamSVGElementAttributes,
    SlamSVGPresentationAttributes,
    SlamSVGFilterPrimitiveAttributes {
  in?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
  dx?: number;
  dy?: number;
}

export interface SlamSVGFePointLightAttributes extends SlamSVGElementAttributes {
  x?: number;
  y?: number;
  z?: number;
}

export interface SlamSVGFeSpecularLightingAttributes
  extends SlamSVGElementAttributes,
    SlamSVGPresentationAttributes,
    SlamSVGFilterPrimitiveAttributes {
  in?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
  surfaceScale?: number;
  specularConstant?: number;
  specularExponent?: number;
  kernelUnitLength?: string;
}

export interface SlamSVGFeSpotLightAttributes extends SlamSVGElementAttributes {
  x?: number;
  y?: number;
  z?: number;
  pointsAtX?: number;
  pointsAtY?: number;
  pointsAtZ?: number;
  specularExponent?: number;
  limitingConeAngle?: number;
}

export interface SlamSVGFeTileAttributes
  extends SlamSVGElementAttributes,
    SlamSVGPresentationAttributes,
    SlamSVGFilterPrimitiveAttributes {
  in?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
}

export interface SlamSVGFeTurbulenceAttributes
  extends SlamSVGElementAttributes,
    SlamSVGPresentationAttributes,
    SlamSVGFilterPrimitiveAttributes {
  baseFrequency?: string;
  numOctaves?: number;
  seed?: number;
  stitchTiles?: "stitch" | "noStitch";
  type?: "fractalNoise" | "turbulence";
}

export interface SlamSVGFilterAttributes extends SlamSVGElementAttributes, SlamSVGPresentationAttributes {
  externalResourcesRequired?: boolean;
  x?: string;
  y?: string;
  width?: string;
  height?: string;
  filterUnits?: "userSpaceOnUse" | "objectBoundingBox";
  primitiveUnits?: "userSpaceOnUse" | "objectBoundingBox";
}

export interface SlamSVGForeignObjectAttributes
  extends SlamSVGElementAttributes,
    SlamSVGConditionalProcessingAttributes,
    SlamSVGPresentationAttributes {
  x?: string;
  y?: string;
  width?: string;
  height?: string;
}

export interface SlamSVGGAttributes
  extends SlamSVGElementAttributes,
    SlamSVGConditionalProcessingAttributes,
    SlamSVGPresentationAttributes {}

export interface SlamSVGImageAttributes
  extends SlamSVGElementAttributes,
    SlamSVGConditionalProcessingAttributes,
    SlamSVGPresentationAttributes {
  preserveAspectRatio?: string;
  href?: string;
  crossOrigin?: "anonymous" | "use-credentials";
  x?: string;
  y?: string;
  width?: string;
  height?: string;
}

export interface SlamSVGLineAttributes
  extends SlamSVGElementAttributes,
    SlamSVGConditionalProcessingAttributes,
    SlamSVGPresentationAttributes {
  pathLength?: number;
  x1?: string;
  x2?: string;
  y1?: string;
  y2?: string;
}

export interface SlamSVGLinearGradientAttributes extends SlamSVGElementAttributes, SlamSVGPresentationAttributes {
  x1?: string;
  x2?: string;
  y1?: string;
  y2?: string;
  gradientUnits?: "userSpaceOnUse" | "objectBoundingBox";
  gradientTransform?: string;
  spreadMethod?: "pad" | "reflect" | "repeat";
  href?: string;
}

export interface SlamSVGMarkerAttributes extends SlamSVGElementAttributes, SlamSVGPresentationAttributes {
  viewBox?: string;
  preserveAspectRatio?: string;
  refX?: "left" | "center" | "right" | string | number;
  refY?: "top" | "center" | "bottom" | string | number;
  markerUnits?: "strokeWidth" | "userSpaceOnUse";
  markerWidth?: string | number;
  markerHeight?: string | number;
  orient?: "auto" | "auto-start-reverse" | string | number;
}

export interface SlamSVGMaskAttributes
  extends SlamSVGElementAttributes,
    SlamSVGConditionalProcessingAttributes,
    SlamSVGPresentationAttributes {
  x?: string;
  y?: string;
  width?: string;
  height?: string;
  maskUnits?: "userSpaceOnUse" | "objectBoundingBox";
  maskContentUnits?: "userSpaceOnUse" | "objectBoundingBox";
}

export interface SlamSVGMetadataAttributes extends SlamSVGElementAttributes {}

export interface SlamSVGMpathAttributes extends SlamSVGElementAttributes {
  href?: string;
}

export interface SlamSVGPathAttributes
  extends SlamSVGElementAttributes,
    SlamSVGConditionalProcessingAttributes,
    SlamSVGPresentationAttributes {
  pathLength?: number;
  d?: string;
}

export interface SlamSVGPatternAttributes extends SlamSVGElementAttributes, SlamSVGPresentationAttributes {
  viewBox?: string;
  preserveAspectRatio?: string;
  x?: string;
  y?: string;
  width?: string;
  height?: string;
  patternUnits?: "userSpaceOnUse" | "objectBoundingBox";
  patternContentUnits?: "userSpaceOnUse" | "objectBoundingBox";
  patternTransform?: string;
  href?: string;
}

export interface SlamSVGPolygonAttributes
  extends SlamSVGElementAttributes,
    SlamSVGConditionalProcessingAttributes,
    SlamSVGPresentationAttributes {
  pathLength?: number;
  points?: string;
}

export interface SlamSVGPolylineAttributes extends SlamSVGPolygonAttributes {}

export interface SlamSVGRadialGradientAttributes extends SlamSVGElementAttributes, SlamSVGPresentationAttributes {
  cx?: string;
  cy?: string;
  r?: string;
  fx?: string;
  fy?: string;
  fr?: string;
  gradientUnits?: "userSpaceOnUse" | "objectBoundingBox";
  gradientTransform?: string;
  spreadMethod?: "pad" | "reflect" | "repeat";
  href?: string;
}

export interface SlamSVGRectAttributes
  extends SlamSVGElementAttributes,
    SlamSVGConditionalProcessingAttributes,
    SlamSVGPresentationAttributes {
  pathLength?: number;
  x?: string;
  y?: string;
  width?: string;
  height?: string;
  rx?: string;
  ry?: string;
}

export interface SlamSVGSetAttributes
  extends SlamSVGElementAttributes,
    SlamSVGConditionalProcessingAttributes,
    SlamSVGAnimationTargetElementAttributes,
    SlamSVGAnimationAttributeTargetAttributes,
    SlamSVGAnimationTimingAttributes {
  to?: string;
}

export interface SlamSVGStopAttributes extends SlamSVGElementAttributes, SlamSVGPresentationAttributes {
  offset?: number | string;
}

export interface SlamSVGStyleAttributes extends SlamSVGElementAttributes {
  type?: string;
  media?: string;
  title?: string;
}

export interface SlamSVGSvgAttributes
  extends SlamSVGElementAttributes,
    SlamSVGConditionalProcessingAttributes,
    SlamSVGPresentationAttributes {
  viewBox?: string;
  preserveAspectRatio?: string;
  zoomAndPan?: "disable" | "magnify";
  transform?: string;
  x?: string;
  y?: string;
  width?: string;
  height?: string;
}

export interface SlamSVGSwitch_Attributes
  extends SlamSVGElementAttributes,
    SlamSVGConditionalProcessingAttributes,
    SlamSVGPresentationAttributes {}

export interface SlamSVGSymbolAttributes extends SlamSVGElementAttributes, SlamSVGPresentationAttributes {
  viewBox?: string;
  preserveAspectRatio?: string;
  refX?: "left" | "center" | "right" | string | number;
  refY?: "top" | "center" | "bottom" | string | number;
  x?: string;
  y?: string;
  width?: string;
  height?: string;
}

export interface SlamSVGTextAttributes
  extends SlamSVGElementAttributes,
    SlamSVGConditionalProcessingAttributes,
    SlamSVGPresentationAttributes {
  lengthAdjust?: "spacing" | "spacingAndGlyphs";
  x?: string;
  y?: string;
  dx?: string;
  dy?: string;
  rotate?: string;
  textLength?: string;
}

export interface SlamSVGTextPathAttributes
  extends SlamSVGElementAttributes,
    SlamSVGConditionalProcessingAttributes,
    SlamSVGPresentationAttributes {
  lengthAdjust?: "spacing" | "spacingAndGlyphs";
  textLength?: string;
  path?: string;
  href?: string;
  startOffset?: string;
  method?: "align" | "stretch";
  spacing?: "auto" | "exact";
  side?: "left" | "right";
}

export interface SlamSVGTitleAttributes extends SlamSVGElementAttributes {}

export interface SlamSVGTspanAttributes extends SlamSVGTextAttributes {}

export interface SlamSVGUnknownAttributes
  extends SlamSVGElementAttributes,
    SlamSVGConditionalProcessingAttributes,
    SlamSVGPresentationAttributes {}

export interface SlamSVGUseAttributes
  extends SlamSVGElementAttributes,
    SlamSVGConditionalProcessingAttributes,
    SlamSVGPresentationAttributes {
  href?: string;
  x?: string;
  y?: string;
  width?: string;
  height?: string;
}

export interface SlamSVGViewAttributes extends SlamSVGElementAttributes {
  viewBox?: string;
  preserveAspectRatio?: string;
  zoomAndPan?: "disable" | "magnify";
}
