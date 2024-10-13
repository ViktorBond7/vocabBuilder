import IconSvg from "../IconSvg/IconSvg";
import css from "./Equipment.module.css";

const Equipment = [
  {
    label: "AC",
    icon: (
      <IconSvg
        iconName="icon-conditioner"
        width="32"
        height="32"
        className={css.icons}
      />
    ),
  },
  {
    label: "Automatic",
    icon: (
      <IconSvg
        iconName="icon-automatic"
        width="32"
        height="32"
        className={css.icons}
      />
    ),
  },
  {
    label: "Kitchen",
    icon: (
      <IconSvg
        iconName="icon-kitchen"
        width="32"
        height="32"
        className={css.icons}
      />
    ),
  },
  {
    label: "TV",
    icon: (
      <IconSvg
        iconName="icon-TV"
        width="32"
        height="32"
        className={css.icons}
      />
    ),
  },
  {
    label: "Shower/WC",
    icon: (
      <IconSvg
        iconName="icon-Shower"
        width="32"
        height="32"
        className={css.icons}
      />
    ),
  },
];

export default Equipment;
