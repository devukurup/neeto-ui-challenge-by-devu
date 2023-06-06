import React from "react";

import { Formik, Form as FormikForm } from "formik";
import { Check } from "neetoicons";
import { Button, Pane } from "neetoui";
import { Input, Textarea, Select } from "neetoui/formik";
import { useTranslation } from "react-i18next";

import notesApi from "apis/notes";
import { PLURAL } from "constants";

import { CONTACT_OPTIONS, VALIDATION_SCHEMA, TAG_OPTIONS } from "../constants";

const Form = ({ onClose, refetch, initialValues, isEdit = false }) => {
  const { t } = useTranslation();

  const handleSubmit = async values => {
    try {
      if (isEdit) {
        await notesApi.update(initialValues.id, values);
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
      noValidate
      initialValues={initialValues}
      validationSchema={VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FormikForm noValidate className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              required
              className="w-full flex-grow-0"
              label={t("common.title")}
              name="title"
              placeholder={t("placeholders.title")}
              size="large"
            />
            <Textarea
              required
              className="w-full flex-grow-0"
              label={t("common.description")}
              name="description"
              placeholder={t("placeholders.description")}
              rows={1}
            />
            <Select
              required
              className="w-full flex-grow-0"
              label={t("common.assignedContact")}
              name="assignedContact"
              options={CONTACT_OPTIONS}
              placeholder={t("placeholders.assignedContact")}
              size="large"
            />
            <Select
              isMulti
              required
              className="w-full flex-grow-0"
              label={t("common.tag", PLURAL)}
              name="tags"
              options={TAG_OPTIONS}
              placeholder={t("placeholders.tags")}
              size="large"
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3"
              disabled={isSubmitting}
              icon={Check}
              label={isEdit ? t("common.update") : t("common.saveChanges")}
              loading={isSubmitting}
              type="submit"
            />
            <Button
              label={t("common.cancel")}
              style="text"
              type="reset"
              onClick={onClose}
            />
          </Pane.Footer>
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
