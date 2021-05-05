import { Slam } from "../dist";
import { Index } from "./pages";
import { FastBuild } from "./pages/fastBuild";
import { SlowBuild } from "./pages/slowBuild";

export default Slam.site(async () => ({
  index: Index,
  about: SlowBuild,
  events: {
    index: FastBuild,
    otherEvent: Index,
    deeper: {
      index: SlowBuild,
      evenDeeper: FastBuild,
      deepest: {
        superDeep: Index
      }
    }
  }
}))