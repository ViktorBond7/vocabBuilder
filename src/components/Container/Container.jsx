import clsx from "clsx";
import css from "./Container.module.scss";

const Container = ({ children, className }) => {
  return <div className={clsx(css.container, className)}>{children}</div>;
};

export default Container;
