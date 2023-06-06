import React from "react";

import { Pane, Typography } from "neetoui";
import { useTranslation } from "react-i18next";

import Form from "./Form";

import { INITIAL_FORM_VALUES } from "../constants";

const Create = ({ fetchNotes, isPaneOpen, onClose }) => {
  const { t } = useTranslation();

  return (
    <Pane isOpen={isPaneOpen} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          {t("common.newNoteTitle")}
        </Typography>
      </Pane.Header>
      <Form
        initialValues={INITIAL_FORM_VALUES}
        refetch={fetchNotes}
        onClose={onClose}
      />
    </Pane>
  );
};

export default Create;
