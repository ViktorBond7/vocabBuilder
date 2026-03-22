import clsx from "clsx";
import spriteHref from "../../img/symbol-defs.svg";
import css from "./IconSvg.module.scss";

const IconSvg = ({ name, size = 24, className }) => {
  return (
    <>
      <svg width={size} height={size} className={clsx(css.icon, className)}>
        <use href={`${spriteHref}#${name}`}></use>
      </svg>
    </>
  );
};

export default IconSvg;
