import { Slam } from "../dist";
import { Index } from "./pages";

export default Slam.build(async () => {
  return [
    {
      name: "index",
      html: Index,
      content: async () => "Content",
      cssReset: true,
      globalStyles: {
        "@import": "https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap",
        div: {
          fontFamily: "Dela Gothic One",
        },
      },
    },
  ];
});
