import { ElementAttributes } from "./slamInterfaces";
declare type UsesSVGConditionalProcessingAttributes = "a" | "animate" | "animateMotion" | "animateTransform" | "circle" | "clipPath" | "discard" | "ellipse" | "foreignObject" | "g" | "image" | "line" | "mask" | "path" | "polygon" | "rect" | "set" | "svg" | "switch_" | "text" | "textPath" | "unknown" | "use";
declare type UsesSVGPresentationAttributes = "a" | "animate" | "circle" | "clipPath" | "defs" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDropShadow" | "feFlood" | "feGaussianBlur" | "feImage" | "feMerge" | "feMorphology" | "feOffset" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "filter" | "foreignObject" | "g" | "image" | "line" | "linearGradient" | "marker" | "mask" | "path" | "pattern" | "polygon" | "radialGradient" | "rect" | "stop" | "svg" | "switch_" | "symbol" | "text" | "textPath" | "unknown" | "use";
declare type UsesSVGAnimationAdditionAttributes = "animate" | "animateMotion" | "animateTransform";
declare type UsesSVGAnimationTargetElementAttributes = "animate" | "animateMotion" | "animateTransform" | "set";
declare type UsesSVGAnimationAttributeTargetAttributes = "animate" | "animateTransform" | "set";
declare type UsesSVGAnimationTimingAttributes = "animate" | "animateMotion" | "animateTransform" | "set";
declare type UsesSVGAnimationValueAttributes = "animate" | "animateMotion" | "animateTransform";
declare type UsesSVGFilterPrimitiveAttributes = "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDropShadow" | "feFlood" | "feGaussianBlur" | "feImage" | "feMerge" | "feMorphology" | "feOffset" | "feSpecularLighting" | "feTile" | "feTurbulence";
declare type UsesSVGTransferFunctionElementAttributes = "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR";
interface SVGConditionalProcessingAttributes {
    requiredExtensions?: string;
    systemLanguage?: string;
}
interface SVGPresentationAttributes {
    alignmentBaseline?: string;
    baselineShift?: string;
    clipPath?: string;
    clipRule?: string;
    color?: string;
    colorInterpolation?: string;
    colorInterpolationFilters?: string;
    colorRendering?: string;
    cursor?: string;
    direction?: string;
    display?: string;
    dominantBaseline?: string;
    fillOpacity?: string;
    fillRule?: string;
    filter?: string;
    floodColor?: string;
    floodOpacity?: string;
    fontFamily?: string;
    fontSize?: string;
    fontSizeAdjust?: string;
    fontStretch?: string;
    fontStyle?: string;
    fontVariant?: string;
    fontWeight?: string;
    glyphOrientationHorizontal?: string;
    glyphOrientationVertical?: string;
    imageRendering?: string;
    letterSpacing?: string;
    lightingColor?: string;
    markerEnd?: string;
    markerMid?: string;
    markerStart?: string;
    mask?: string;
    opacity?: string;
    overflow?: string;
    paintOrder?: string;
    pointerEvents?: string;
    shapeRendering?: string;
    stopColor?: string;
    stopOpacity?: string;
    stroke?: string;
    strokeDasharray?: string;
    strokeDashoffset?: string;
    strokeLinecap?: string;
    strokeLinejoin?: string;
    strokeMiterlimit?: string;
    strokeOpacity?: string;
    strokeWidth?: string;
    textAnchor?: string;
    textDecoration?: string;
    textOverflow?: string;
    textRendering?: string;
    unicodeBidi?: string;
    vectorEffect?: string;
    visibility?: string;
    whiteSpace?: string;
    wordSpacing?: string;
    writingMode?: string;
}
interface SVGAnimationAdditionAttributes {
    additive?: "replace" | "sum";
    accumulate?: "none" | "sum";
}
interface SVGAnimationTargetElementAttributes {
    href?: string;
}
interface SVGAnimationAttributeTargetAttributes {
    attributeName?: string;
}
interface SVGAnimationTimingAttributes {
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
interface SVGAnimationValueAttributes {
    calcMode?: "discrete" | "linear" | "paced" | "spline";
    values?: string;
    keyTimes?: string;
    keySplines?: string;
    from?: string;
    to?: string;
    by?: string;
}
interface SVGFilterPrimitiveAttributes {
    x?: number | string;
    y?: number | string;
    width?: number | string;
    height?: number | string;
    result?: string;
}
interface SVGTransferFunctionElementAttributes {
    type?: "identity" | "table" | "discrete" | "linear" | "gamma";
    tableValues?: string;
    slope?: number;
    intercept?: number;
    amplitude?: number;
    exponent?: number;
    offset?: number;
}
interface SvgTagAttributesMap {
    a: {
        href?: string;
        download?: string;
        hreflang?: string;
        ping?: string;
        referrerpolicy?: "no-Referrer" | "no-Referrer-When-Downgrade" | "same-Origin" | "origin" | "strict-Origin" | "origin-When-Cross-Origin" | "strict-Origin-When-Cross-Origin" | "unsafe-Url";
        rel?: string;
        target?: "_blank" | "_self" | "_parent" | "_top";
        type?: string;
    };
    animate: {};
    animateMotion: {
        path?: string;
        keyPoints?: string;
        rotate?: "auto" | "auto-Reverse" | number;
        origin?: "default";
    };
    animateTransform: {
        type?: "translate" | "scale" | "rotate" | "skewX" | "skewY";
    };
    circle: {
        pathLength?: number;
        cx?: number;
        cy?: number;
        r?: number;
    };
    clipPath: {
        externalResourcesRequired?: boolean;
        transform?: string;
        clipPathUnits?: "userSpaceOnUse" | "objectBoundingBox";
    };
    defs: {};
    desc: {};
    discard: {
        begin?: string;
        href?: string;
    };
    ellipse: {
        pathLength?: number;
        cx?: number;
        cy?: number;
        rx?: number;
        ry?: number;
    };
    feBlend: {
        in?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
        in2?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
        mode?: "normal" | "multiply" | "screen" | "overlay" | "darken" | "lighten" | "color-Dodge" | "color-Burn" | "hard-Light" | "soft-Light" | "difference" | "exclusion" | "hue" | "saturation" | "color" | "luminosity";
    };
    feColorMatrix: {
        in?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
        type?: "matrix" | "saturate" | "hueRotate" | "luminanceToAlpha";
        values?: string;
    };
    feComponentTransfer: {
        in?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
    };
    feComposite: {
        in?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
        in2?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
        operator?: "over" | "in" | "out" | "atop" | "xor" | "lighter" | "arithmetic";
        k1?: number;
        k2?: number;
        k3?: number;
        k4?: number;
    };
    feConvolveMatrix: {
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
    };
    feDiffuse: {
        in?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
        surfaceScale?: number;
        diffuseConstant?: number;
        kernelUnitLength?: string;
    };
    feDiffuseLighting: {
        in?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
        surfaceScale?: number;
        diffuseConstant?: number;
        kernelUnitLength?: string;
    };
    feDisplacementMap: {
        in?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
        in2?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
        scale?: number;
        xChannelSelector?: "R" | "G" | "B" | "A";
        yChannelSelector?: "R" | "G" | "B" | "A";
    };
    feDistantLight: {
        azimuth?: number;
        elevation?: number;
    };
    feDropShadow: {
        in?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
        stdDeviation?: string;
        dx?: number;
        dy?: number;
    };
    feFlood: {};
    feFuncA: {};
    feFuncB: {};
    feFuncG: {};
    feFuncR: {};
    feGaussianBlur: {
        in?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
        stdDeviation?: string;
        edgeMode?: "duplicate" | "wrap" | "none";
    };
    feImage: {
        externalResourcesRequired?: boolean;
        preserveAspectRatio?: string;
        href?: string;
        crossorigin?: "anonymous" | "use-Credentials";
    };
    feMerge: {};
    feMergeNode: {
        in?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
    };
    feMorphology: {
        in?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
        operator?: "erode" | "dilate";
        radius?: string;
    };
    feOffset: {
        in?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
        dx?: number;
        dy?: number;
    };
    fePointLight: {
        x?: number;
        y?: number;
        z?: number;
    };
    feSpecularLighting: {
        in?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
        surfaceScale?: number;
        specularConstant?: number;
        specularExponent?: number;
        kernelUnitLength?: string;
    };
    feSpotLight: {
        x?: number;
        y?: number;
        z?: number;
        pointsAtX?: number;
        pointsAtY?: number;
        pointsAtZ?: number;
        specularExponent?: number;
        limitingConeAngle?: number;
    };
    feTile: {
        in?: "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
    };
    feTurbulence: {
        baseFrequency?: string;
        numOctaves?: number;
        seed?: number;
        stitchTiles?: "stitch" | "noStitch";
        type?: "fractalNoise" | "turbulence";
    };
    filter: {
        externalResourcesRequired?: boolean;
        x?: number | string;
        y?: number | string;
        width?: number | string;
        height?: number | string;
        filterUnits?: "userSpaceOnUse" | "objectBoundingBox";
        primitiveUnits?: "userSpaceOnUse" | "objectBoundingBox";
    };
    foreignObject: {
        x?: number | string;
        y?: number | string;
        width?: number | string;
        height?: number | string;
    };
    g: {};
    image: {
        preserveAspectRatio?: string;
        href?: string;
        crossOrigin?: "anonymous" | "use-Credentials";
        x?: number | string;
        y?: number | string;
        width?: number | string;
        height?: number | string;
    };
    line: {
        pathLength?: number;
        x1?: string;
        x2?: string;
        y1?: string;
        y2?: string;
    };
    linearGradient: {
        x1?: string;
        x2?: string;
        y1?: string;
        y2?: string;
        gradientUnits?: "userSpaceOnUse" | "objectBoundingBox";
        gradientTransform?: string;
        spreadMethod?: "pad" | "reflect" | "repeat";
        href?: string;
    };
    marker: {
        viewBox?: string;
        preserveAspectRatio?: string;
        refX?: "left" | "center" | "right" | string | number;
        refY?: "top" | "center" | "bottom" | string | number;
        markerUnits?: "strokeWidth" | "userSpaceOnUse";
        markerWidth?: string | number;
        markerHeight?: string | number;
        orient?: "auto" | "auto-Start-Reverse" | string | number;
    };
    mask: {
        x?: number | string;
        y?: number | string;
        width?: number | string;
        height?: number | string;
        maskUnits?: "userSpaceOnUse" | "objectBoundingBox";
        maskContentUnits?: "userSpaceOnUse" | "objectBoundingBox";
    };
    metadata: {};
    mpath: {
        href?: string;
    };
    path: {
        pathLength?: number;
        d?: string;
    };
    pattern: {
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
    };
    polygon: {
        pathLength?: number;
        points?: string;
    };
    polyline: {};
    radialGradient: {
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
    };
    rect: {
        pathLength?: number;
        x?: number | string;
        y?: number | string;
        width?: number | string;
        height?: number | string;
        rx?: number | string;
        ry?: number | string;
    };
    set: {
        to?: string;
    };
    stop: {
        offset?: number | string;
    };
    style: {
        type?: string;
        media?: string;
        title?: string;
    };
    svg: {
        viewBox?: string;
        preserveAspectRatio?: string;
        zoomAndPan?: "disable" | "magnify";
        transform?: string;
        x?: number | string;
        y?: number | string;
        width?: number | string;
        height?: number | string;
    };
    switch_: {};
    symbol: {
        viewBox?: string;
        preserveAspectRatio?: string;
        refX?: "left" | "center" | "right" | string | number;
        refY?: "top" | "center" | "bottom" | string | number;
        x?: number | string;
        y?: number | string;
        width?: number | string;
        height?: number | string;
    };
    text: {
        lengthAdjust?: "spacing" | "spacingAndGlyphs";
        x?: number | string;
        y?: number | string;
        dx?: string;
        dy?: string;
        rotate?: string;
        textLength?: string;
    };
    textPath: {
        lengthAdjust?: "spacing" | "spacingAndGlyphs";
        textLength?: string;
        path?: string;
        href?: string;
        startOffset?: string;
        method?: "align" | "stretch";
        spacing?: "auto" | "exact";
        side?: "left" | "right";
    };
    title: {};
    tspan: {};
    unknown: {};
    use: {
        href?: string;
        x?: number | string;
        y?: number | string;
        width?: number | string;
        height?: number | string;
    };
    view: {
        viewBox?: string;
        preserveAspectRatio?: string;
        zoomAndPan?: "disable" | "magnify";
    };
}
export declare type SvgTagAttributes = {
    [P in keyof SvgTagAttributesMap]: SvgTagAttributesMap[P] & ElementAttributes & (P extends UsesSVGAnimationAdditionAttributes ? SVGAnimationAdditionAttributes : {}) & (P extends UsesSVGAnimationAttributeTargetAttributes ? SVGAnimationAttributeTargetAttributes : {}) & (P extends UsesSVGAnimationTargetElementAttributes ? SVGAnimationTargetElementAttributes : {}) & (P extends UsesSVGAnimationTimingAttributes ? SVGAnimationTimingAttributes : {}) & (P extends UsesSVGAnimationValueAttributes ? SVGAnimationValueAttributes : {}) & (P extends UsesSVGConditionalProcessingAttributes ? SVGConditionalProcessingAttributes : {}) & (P extends UsesSVGFilterPrimitiveAttributes ? SVGFilterPrimitiveAttributes : {}) & (P extends UsesSVGPresentationAttributes ? SVGPresentationAttributes : {}) & (P extends UsesSVGTransferFunctionElementAttributes ? SVGTransferFunctionElementAttributes : {});
};
export {};
