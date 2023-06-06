import React from "react";

import { Alert, Toastr } from "neetoui";
import { useTranslation } from "react-i18next";

import { SINGULAR } from "constants";

const DeleteAlert = ({ onClose, isOpen }) => {
  const { t } = useTranslation();

  const handleDelete = () => {
    Toastr.success(
      t("toastr.success.deleted", { entity: t("common.contact", SINGULAR) })
    );
    onClose();
  };

  return (
    <Alert
      isOpen={isOpen}
      title={t("alert.title", { entity: t("common.contact", SINGULAR) })}
      message={t("alert.message", {
        entity: t("common.contact", SINGULAR).toLowerCase(),
      })}
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteAlert;
