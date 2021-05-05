import { Slam } from "../dist";
import { Index } from "./pages";

export default Slam.build(async () => ({
  index: Index,
  about: Index,
  events: {
    index: Index,
    otherEvent: Index,
    deeper: {
      index: Index,
      evenDeeper: Index,
      deepest: {
        superDeep: Index
      }
    }
  }
}))