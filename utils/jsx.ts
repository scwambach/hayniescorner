import type { JSX as JSXNamespace } from "react";

// Provides a stable keyof mapping to React intrinsic elements.
export type IntrinsicElement = keyof JSXNamespace.IntrinsicElements;
