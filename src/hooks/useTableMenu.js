import { useState, useCallback } from "react";

const useTableMenu = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeModal, setActiveModal] = useState(null); // 'edit', 'delete' або null

  const openMenu = useCallback((event, row) => {
    setAnchorEl(event.currentTarget);
    setSelectedRow(row);
  }, []);

  const closeMenu = useCallback(() => {
    setAnchorEl(null);
    // Не скидаємо selectedRow тут, бо він може знадобитися для відкриття модалки
  }, []);

  const openModal = useCallback((type) => {
    setActiveModal(type);
    setAnchorEl(null); // Автоматично закриваємо меню при відкритті модалки
  }, []);

  const closeModal = useCallback(() => {
    setActiveModal(null);
    setSelectedRow(null);
  }, []);

  return {
    selectedRow,
    anchorEl,
    activeModal,
    openMenu,
    closeMenu,
    openModal,
    closeModal,
    setAnchorEl,
  };
};

export default useTableMenu;
