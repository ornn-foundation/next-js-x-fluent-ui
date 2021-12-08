import dynamic from "next/dynamic";
import Loader from "./Loader";

const Stack = dynamic(() => import("./Stack"), {
  ssr: false,
});
const PrimaryButton = dynamic(() => import("./PrimaryButton"), {
  ssr: false,
});
const DefaultButton = dynamic(() => import("./DefaultButton"), {
  ssr: false,
});
const Checkbox = dynamic(() => import("./Checkbox"), {
  ssr: false,
});
const ActivityItem = dynamic(() => import("./ActivityItem"), {
  ssr: false,
});
const ThemeProvider = dynamic(() => import("./ThemeProvider"), {
  ssr: false,
});
export {
  Loader,
  Stack,
  PrimaryButton,
  DefaultButton,
  Checkbox,
  ActivityItem,
  ThemeProvider,
};
