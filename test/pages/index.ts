import { Home } from "./home";

export default async () => {
  return [
    ...["1", "2", "3"].map(item => ({
      name: item,
      html: Home,
      content: async () => ({ name: item }),
      cssReset: true,
    })),
  ];
};
