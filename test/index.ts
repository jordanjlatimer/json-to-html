import { Slam } from "../dist";
import { Home } from "./pages/home";

export default Slam.pageBuilder(async () => {
  return [
    ...["1", "2"].map(item => ({
      name: item,
      html: Home,
      content: async () => ({ name: item }),
      cssReset: true,
      globalStyles: {
        "@import": "https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap",
        div: {
          fontFamily: "Dela Gothic One",
        },
      },
    })),
  ];
});
