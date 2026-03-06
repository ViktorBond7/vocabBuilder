import { useEffect, useRef } from "react";
import css from "./ActionMenu.module.scss";

const ActionMenu = ({ anchor, onClose, onOpenModalDelete, onOpenEditForm }) => {
  const menuRef = useRef(null);

  // Закриття меню, якщо клікнули поза ним
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const rect = anchor.getBoundingClientRect();

  const style = {
    position: "absolute",
    top: `${rect.bottom + window.scrollY}px`,
    left: `${rect.left + window.scrollX - 60}px`,
    zIndex: 1000,
  };

  return (
    <div ref={menuRef} style={style} className={css.menuWrapper}>
      <button className={css.menuBtn} onClick={onOpenEditForm}>
        ✏️ Edit
      </button>
      <button className={css.menuBtn} onClick={onOpenModalDelete}>
        🗑️ Delete
      </button>
    </div>
  );
};

export default ActionMenu;
