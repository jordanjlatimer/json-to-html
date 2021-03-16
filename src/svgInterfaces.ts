import { ElementAttributes } from "./baseInterfaces";

export interface SVGElementAttributes extends ElementAttributes {}

export interface SVGConditionalProcessingAttributes {
  requiredExtensions?: string;
  systemLanguage?: string;
}

export interface SVGPresentationAttributes {
  "alignment-baseline"?: string;
  "baseline-shift"?: string;
  "clip-path"?: string;
  "clip-rule"?: string;
  color?: string;
  "color-interpolation"?: string;
  "color-interpolation-filters"?: string;
  "color-rendering"?: string;
  cursor?: string;
  direction?: string;
  display?: string;
  "dominant-baseline"?: string;
  "fill-opacity"?: string;
  "fill-rule"?: string;
  filter?: string;
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
  mask?: string;
  opacity?: string;
  overflow?: string;
  "paint-order"?: string;
  "pointer-events"?: string;
  "shape-rendering"?: string;
  "stop-color"?: string;
  "stop-opacity"?: string;
  stroke?: string;
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
  visibility?: string;
  "white-space"?: string;
  "word-spacing"?: string;
  "writing-mode"?: string;
}

export interface SVGAnimationAdditionAttributes {
  additive?: "replace" | "sum";
  accumulate?: "none" | "sum";
}

export interface SVGAnimationTargetElementAttributes {
  href?: string;
}

export interface SVGAnimationAttributeTargetAttributes {
  attributeName?: string;
}

export interface SVGAnimationTimingAttributes {
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

export interface SVGAnimationValueAttributes {
  calcMode?: "discrete" | "linear" | "paced" | "spline";
  values?: string;
  keyTimes?: string;
  keySplines?: string;
  from?: string;
  to?: string;
  by?: string;
}

export interface SVGFilterPrimitiveAttributes {
  x?: number | string;
  y?: number | string;
  width?: number | string;
  height?: number | string;
  result?: string;
}

export interface SVGTransferFunctionElementAttributes {
  type?: "identity" | "table" | "discrete" | "linear" | "gamma";
  tableValues?: string;
  slope?: number;
  intercept?: number;
  amplitude?: number;
  exponent?: number;
  offset?: number;
}

export interface SVGAAttributes
  extends SVGElementAttributes,
    SVGConditionalProcessingAttributes,
    SVGPresentationAttributes {
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

export interface SVGAnimateAttributes
  extends SVGElementAttributes,
    SVGConditionalProcessingAttributes,
    SVGPresentationAttributes,
    SVGAnimationAdditionAttributes,
    SVGAnimationTargetElementAttributes,
    SVGAnimationAttributeTargetAttributes,
    SVGAnimationTimingAttributes,
    SVGAnimationValueAttributes {}

export interface SVGAnimateMotionAttributes
  extends SVGElementAttributes,
    SVGConditionalProcessingAttributes,
    SVGAnimationAdditionAttributes,
    SVGAnimationTargetElementAttributes,
    SVGAnimationTimingAttributes,
    SVGAnimationValueAttributes {
  path?: string;
  keyPoints?: string;
  rotate?: "auto" | "auto-reverse" | number;
  origin?: "default";
}

export interface SVGAnimateTransformAttributes
  extends SVGElementAttributes,
    SVGConditionalProcessingAttributes,
    SVGAnimationAdditionAttributes,
    SVGAnimationTargetElementAttributes,
    SVGAnimationAttributeTargetAttributes,
    SVGAnimationTimingAttributes,
    SVGAnimationValueAttributes {
  type?: "translate" | "scale" | "rotate" | "skewX" | "skewY";
}

export interface SVGCircleAttributes
  extends SVGElementAttributes,
    SVGConditionalProcessingAttributes,
    SVGPresentationAttributes {
  pathLength?: number;
  cx?: number;
  cy?: number;
  r?: number;
}

export interface SVGClipPathAttributes
  extends SVGElementAttributes,
    SVGConditionalProcessingAttributes,
    SVGPresentationAttributes {
  externalResourcesRequired?: boolean;
  transform?: string;
  clipPathUnits?: "userSpaceOnUse" | "objectBoundingBox";
}

export interface SVGDefsAttributes extends SVGElementAttributes, SVGPresentationAttributes {}

export interface SVGDescAttributes extends SVGElementAttributes {}

export interface SVGDiscardAttributes extends SVGElementAttributes, SVGConditionalProcessingAttributes {
  begin?: string;
  href?: string;
}

export interface SVGEllipseAttributes
  extends SVGElementAttributes,
    SVGPresentationAttributes,
    SVGConditionalProcessingAttributes {
  pathLength?: number;
  cx?: number;
  cy?: number;
  rx?: number;
  ry?: number;
}

export interface SVGFeBlendAttributes
  extends SVGElementAttributes,
    SVGPresentationAttributes,
    SVGFilterPrimitiveAttributes {
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

export interface SVGFeColorMatrixAttributes
  extends SVGElementAttributes,
    SVGPresentationAttributes,
    SVGFilterPrimitiveAttributes {
  in?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
  type?: "matrix" | "saturate" | "hueRotate" | "luminanceToAlpha";
  values?: string;
}

export interface SVGFeComponentTransferAttributes
  extends SVGElementAttributes,
    SVGPresentationAttributes,
    SVGFilterPrimitiveAttributes {
  in?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
}

export interface SVGFeCompositeAttributes
  extends SVGElementAttributes,
    SVGPresentationAttributes,
    SVGFilterPrimitiveAttributes {
  in?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
  in2?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
  operator?: "over" | "in" | "out" | "atop" | "xor" | "lighter" | "arithmetic";
  k1?: number;
  k2?: number;
  k3?: number;
  k4?: number;
}

export interface SVGFeConvolveMatrixAttributes
  extends SVGElementAttributes,
    SVGPresentationAttributes,
    SVGFilterPrimitiveAttributes {
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

export interface SVGFeDiffuseLightingAttributes
  extends SVGElementAttributes,
    SVGPresentationAttributes,
    SVGFilterPrimitiveAttributes {
  in?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
  surfaceScale?: number;
  diffuseConstant?: number;
  kernelUnitLength?: string;
}

export interface SVGFeDisplacementMapAttributes
  extends SVGElementAttributes,
    SVGPresentationAttributes,
    SVGFilterPrimitiveAttributes {
  in?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
  in2?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
  scale?: number;
  xChannelSelector?: "R" | "G" | "B" | "A";
  yChannelSelector?: "R" | "G" | "B" | "A";
}

export interface SVGFeDistantLightAttributes extends SVGElementAttributes {
  azimuth?: number;
  elevation?: number;
}

export interface SVGFeDropShadowAttributes
  extends SVGElementAttributes,
    SVGPresentationAttributes,
    SVGFilterPrimitiveAttributes {
  in?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
  stdDeviation?: string;
  dx?: number;
  dy?: number;
}

export interface SVGFeFloodAttributes
  extends SVGElementAttributes,
    SVGPresentationAttributes,
    SVGFilterPrimitiveAttributes {}

export interface SVGFeFuncAAttributes extends SVGElementAttributes, SVGTransferFunctionElementAttributes {}

export interface SVGFeFuncBAttributes extends SVGElementAttributes, SVGTransferFunctionElementAttributes {}

export interface SVGFeFuncGAttributes extends SVGElementAttributes, SVGTransferFunctionElementAttributes {}

export interface SVGFeFuncRAttributes extends SVGElementAttributes, SVGTransferFunctionElementAttributes {}

export interface SVGFeGaussianBlurAttributes
  extends SVGElementAttributes,
    SVGPresentationAttributes,
    SVGFilterPrimitiveAttributes {
  in?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
  stdDeviation?: string;
  edgeMode?: "duplicate" | "wrap" | "none";
}

export interface SVGFeImageAttributes
  extends SVGElementAttributes,
    SVGPresentationAttributes,
    SVGFilterPrimitiveAttributes {
  externalResourcesRequired?: boolean;
  preserveAspectRatio?: string;
  "xlink:href"?: string;
  href?: string;
  crossorigin?: "anonymous" | "use-credentials";
}

export interface SVGFeMergeAttributes
  extends SVGElementAttributes,
    SVGPresentationAttributes,
    SVGFilterPrimitiveAttributes {}

export interface SVGFeMergeNodeAttributes extends SVGElementAttributes {
  in?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
}

export interface SVGFeMorphologyAttributes
  extends SVGElementAttributes,
    SVGPresentationAttributes,
    SVGFilterPrimitiveAttributes {
  in?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
  operator?: "erode" | "dilate";
  radius?: string;
}

export interface SVGFeOffsetAttributes
  extends SVGElementAttributes,
    SVGPresentationAttributes,
    SVGFilterPrimitiveAttributes {
  in?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
  dx?: number;
  dy?: number;
}

export interface SVGFePointLightAttributes extends SVGElementAttributes {
  x?: number;
  y?: number;
  z?: number;
}

export interface SVGFeSpecularLightingAttributes
  extends SVGElementAttributes,
    SVGPresentationAttributes,
    SVGFilterPrimitiveAttributes {
  in?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
  surfaceScale?: number;
  specularConstant?: number;
  specularExponent?: number;
  kernelUnitLength?: string;
}

export interface SVGFeSpotLightAttributes extends SVGElementAttributes {
  x?: number;
  y?: number;
  z?: number;
  pointsAtX?: number;
  pointsAtY?: number;
  pointsAtZ?: number;
  specularExponent?: number;
  limitingConeAngle?: number;
}

export interface SVGFeTileAttributes
  extends SVGElementAttributes,
    SVGPresentationAttributes,
    SVGFilterPrimitiveAttributes {
  in?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
}

export interface SVGFeTurbulenceAttributes
  extends SVGElementAttributes,
    SVGPresentationAttributes,
    SVGFilterPrimitiveAttributes {
  baseFrequency?: string;
  numOctaves?: number;
  seed?: number;
  stitchTiles?: "stitch" | "noStitch";
  type?: "fractalNoise" | "turbulence";
}

export interface SVGFilterAttributes extends SVGElementAttributes, SVGPresentationAttributes {
  externalResourcesRequired?: boolean;
  x?: number | string;
  y?: number | string;
  width?: number | string;
  height?: number | string;
  filterUnits?: "userSpaceOnUse" | "objectBoundingBox";
  primitiveUnits?: "userSpaceOnUse" | "objectBoundingBox";
}

export interface SVGForeignObjectAttributes
  extends SVGElementAttributes,
    SVGConditionalProcessingAttributes,
    SVGPresentationAttributes {
  x?: number | string;
  y?: number | string;
  width?: number | string;
  height?: number | string;
}

export interface SVGGAttributes
  extends SVGElementAttributes,
    SVGConditionalProcessingAttributes,
    SVGPresentationAttributes {}

export interface SVGImageAttributes
  extends SVGElementAttributes,
    SVGConditionalProcessingAttributes,
    SVGPresentationAttributes {
  preserveAspectRatio?: string;
  href?: string;
  crossOrigin?: "anonymous" | "use-credentials";
  x?: number | string;
  y?: number | string;
  width?: number | string;
  height?: number | string;
}

export interface SVGLineAttributes
  extends SVGElementAttributes,
    SVGConditionalProcessingAttributes,
    SVGPresentationAttributes {
  pathLength?: number;
  x1?: string;
  x2?: string;
  y1?: string;
  y2?: string;
}

export interface SVGLinearGradientAttributes extends SVGElementAttributes, SVGPresentationAttributes {
  x1?: string;
  x2?: string;
  y1?: string;
  y2?: string;
  gradientUnits?: "userSpaceOnUse" | "objectBoundingBox";
  gradientTransform?: string;
  spreadMethod?: "pad" | "reflect" | "repeat";
  href?: string;
}

export interface SVGMarkerAttributes extends SVGElementAttributes, SVGPresentationAttributes {
  viewBox?: string;
  preserveAspectRatio?: string;
  refX?: "left" | "center" | "right" | string | number;
  refY?: "top" | "center" | "bottom" | string | number;
  markerUnits?: "strokeWidth" | "userSpaceOnUse";
  markerWidth?: string | number;
  markerHeight?: string | number;
  orient?: "auto" | "auto-start-reverse" | string | number;
}

export interface SVGMaskAttributes
  extends SVGElementAttributes,
    SVGConditionalProcessingAttributes,
    SVGPresentationAttributes {
  x?: number | string;
  y?: number | string;
  width?: number | string;
  height?: number | string;
  maskUnits?: "userSpaceOnUse" | "objectBoundingBox";
  maskContentUnits?: "userSpaceOnUse" | "objectBoundingBox";
}

export interface SVGMetadataAttributes extends SVGElementAttributes {}

export interface SVGMpathAttributes extends SVGElementAttributes {
  href?: string;
}

export interface SVGPathAttributes
  extends SVGElementAttributes,
    SVGConditionalProcessingAttributes,
    SVGPresentationAttributes {
  pathLength?: number;
  d?: string;
}

export interface SVGPatternAttributes extends SVGElementAttributes, SVGPresentationAttributes {
  viewBox?: string;
  preserveAspectRatio?: string;
  x?: number | string;
  y?: number | string;
  width?: number | string;
  height?: number | string;
  patternUnits?: "userSpaceOnUse" | "objectBoundingBox";
  patternContentUnits?: "userSpaceOnUse" | "objectBoundingBox";
  patternTransform?: string;
  href?: string;
}

export interface SVGPolygonAttributes
  extends SVGElementAttributes,
    SVGConditionalProcessingAttributes,
    SVGPresentationAttributes {
  pathLength?: number;
  points?: string;
}

export interface SVGPolylineAttributes extends SVGPolygonAttributes {}

export interface SVGRadialGradientAttributes extends SVGElementAttributes, SVGPresentationAttributes {
  cx?: number | string;
  cy?: number | string;
  r?: number | string;
  fx?: number | string;
  fy?: number | string;
  fr?: number | string;
  gradientUnits?: "userSpaceOnUse" | "objectBoundingBox";
  gradientTransform?: string;
  spreadMethod?: "pad" | "reflect" | "repeat";
  href?: string;
}

export interface SVGRectAttributes
  extends SVGElementAttributes,
    SVGConditionalProcessingAttributes,
    SVGPresentationAttributes {
  pathLength?: number;
  x?: number | string;
  y?: number | string;
  width?: number | string;
  height?: number | string;
  rx?: number | string;
  ry?: number | string;
}

export interface SVGSetAttributes
  extends SVGElementAttributes,
    SVGConditionalProcessingAttributes,
    SVGAnimationTargetElementAttributes,
    SVGAnimationAttributeTargetAttributes,
    SVGAnimationTimingAttributes {
  to?: string;
}

export interface SVGStopAttributes extends SVGElementAttributes, SVGPresentationAttributes {
  offset?: number | string;
}

export interface SVGStyleAttributes extends SVGElementAttributes {
  type?: string;
  media?: string;
  title?: string;
}

export interface SVGSvgAttributes
  extends SVGElementAttributes,
    SVGConditionalProcessingAttributes,
    SVGPresentationAttributes {
  viewBox?: string;
  preserveAspectRatio?: string;
  zoomAndPan?: "disable" | "magnify";
  transform?: string;
  x?: number | string;
  y?: number | string;
  width?: number | string;
  height?: number | string;
}

export interface SVGSwitch_Attributes
  extends SVGElementAttributes,
    SVGConditionalProcessingAttributes,
    SVGPresentationAttributes {}

export interface SVGSymbolAttributes extends SVGElementAttributes, SVGPresentationAttributes {
  viewBox?: string;
  preserveAspectRatio?: string;
  refX?: "left" | "center" | "right" | string | number;
  refY?: "top" | "center" | "bottom" | string | number;
  x?: number | string;
  y?: number | string;
  width?: number | string;
  height?: number | string;
}

export interface SVGTextAttributes
  extends SVGElementAttributes,
    SVGConditionalProcessingAttributes,
    SVGPresentationAttributes {
  lengthAdjust?: "spacing" | "spacingAndGlyphs";
  x?: number | string;
  y?: number | string;
  dx?: string;
  dy?: string;
  rotate?: string;
  textLength?: string;
}

export interface SVGTextPathAttributes
  extends SVGElementAttributes,
    SVGConditionalProcessingAttributes,
    SVGPresentationAttributes {
  lengthAdjust?: "spacing" | "spacingAndGlyphs";
  textLength?: string;
  path?: string;
  href?: string;
  startOffset?: string;
  method?: "align" | "stretch";
  spacing?: "auto" | "exact";
  side?: "left" | "right";
}

export interface SVGTitleAttributes extends SVGElementAttributes {}

export interface SVGTspanAttributes extends SVGTextAttributes {}

export interface SVGUnknownAttributes
  extends SVGElementAttributes,
    SVGConditionalProcessingAttributes,
    SVGPresentationAttributes {}

export interface SVGUseAttributes
  extends SVGElementAttributes,
    SVGConditionalProcessingAttributes,
    SVGPresentationAttributes {
  href?: string;
  x?: number | string;
  y?: number | string;
  width?: number | string;
  height?: number | string;
}

export interface SVGViewAttributes extends SVGElementAttributes {
  viewBox?: string;
  preserveAspectRatio?: string;
  zoomAndPan?: "disable" | "magnify";
}
