import { SlamPageBuilder } from "../../dist";
import { Home } from "./home";

export default SlamPageBuilder(async () => {
  return [
    ...["1", "2", "3"].map(item => ({
      name: item,
      html: Home,
      content: async () => ({ name: item }),
      cssReset: true,
    })),
  ];
})
