import React from "react";

import { Formik, Form as FormikForm } from "formik";
import { Button, Pane } from "neetoui";
import { Input, Textarea } from "neetoui/formik";
import { useTranslation } from "react-i18next";

import notesApi from "apis/notes";

import { VALIDATION_SCHEMA } from "../constants";

const Form = ({ onClose, refetch, note, isEdit }) => {
  const { t } = useTranslation();

  const handleSubmit = async values => {
    try {
      if (isEdit) {
        await notesApi.update(note.id, values);
      } else {
        await notesApi.create(values);
      }
      refetch();
      onClose();
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <Formik
      initialValues={note}
      validationSchema={VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FormikForm className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              required
              className="w-full flex-grow-0"
              label={t("common.title")}
              name="title"
            />
            <Textarea
              required
              className="w-full flex-grow-0"
              label={t("common.description")}
              name="description"
              rows={8}
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3"
              disabled={isSubmitting}
              label={isEdit ? t("common.update") : t("common.saveChanges")}
              loading={isSubmitting}
              style="primary"
              type="submit"
            />
            <Button label={t("common.cancel")} style="text" onClick={onClose} />
          </Pane.Footer>
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
