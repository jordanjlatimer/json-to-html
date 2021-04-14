import { Slam } from "../dist";
import { Home } from "./pages/home";

export default Slam.pageBuilder(async () => {
  return [
    {
      name: "jimmy",
      html: Home,
      content: async () => ({ name: "jimmy" }),
      cssReset: true,
      globalStyles: {
        "@import": "https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap",
        div: {
          border: "2px solid red",
          fontFamily: "Dela Gothic One",
        },
      },
    },
    ...["1", "2", "3"].map(item => ({
      name: item,
      html: Home,
      content: async () => ({ name: item }),
      cssReset: true,
    })),
  ];
});
