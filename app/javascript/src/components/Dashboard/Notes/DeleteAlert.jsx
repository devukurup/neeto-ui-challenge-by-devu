import React, { useState } from "react";

import { Alert } from "neetoui";
import { useTranslation } from "react-i18next";

import notesApi from "apis/notes";

const DeleteAlert = ({
  refetch,
  onClose,
  selectedNoteId,
  setSelectedNoteId,
  isOpen,
}) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const { t } = useTranslation();

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await notesApi.destroy({ ids: [selectedNoteId] });
      onClose();
      setSelectedNoteId(-1);
      refetch();
    } catch (error) {
      logger.error(error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Alert
      isOpen={isOpen}
      isSubmitting={isDeleting}
      message={t("alert.message", { entity: t("common.note") })}
      title={t("alert.title", { entity: t("common.note") })}
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteAlert;
