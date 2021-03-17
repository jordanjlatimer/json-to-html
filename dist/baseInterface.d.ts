import { Properties as CSSProperties } from "csstype";
export interface ElementAttributes {
    class?: string;
    id?: string;
    slot?: string;
    style?: CSSProperties;
    autofocus?: boolean;
    nonce?: string;
    tabindex?: number;
}
