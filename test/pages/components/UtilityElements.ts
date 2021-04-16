import { CSSObject, Slam } from "../../../dist";

export const FlexColumn: CSSObject = {
  display: "flex",
  flexDirection: "column"
}

export const BlueBorder: CSSObject = {
  border: "2px solid blue"
}

export const ApplyColorRed = Slam.styleApplier({color: "red"})