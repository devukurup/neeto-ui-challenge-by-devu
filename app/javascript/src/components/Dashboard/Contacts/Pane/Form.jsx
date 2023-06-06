import React from "react";

import { Formik, Form as FormikForm } from "formik";
import { Check } from "neetoicons";
import { Button, Pane, Toastr } from "neetoui";
import { Input, Select } from "neetoui/formik";
import { useTranslation } from "react-i18next";

import { SINGULAR } from "constants";

import { ROLE_OPTIONS, VALIDATION_SCHEMA } from "./constants";

const Form = ({ onClose, initialValues }) => {
  const { t } = useTranslation();

  const handleSubmit = () => {
    Toastr.success(
      t("toastr.success.created", { entity: t("common.contact", SINGULAR) })
    );
    onClose();
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
          <Pane.Body className="space-y-7">
            <div className="flex w-full space-x-3">
              <Input
                required
                label={t("common.firstName")}
                name="firstName"
                placeholder={t("placeholders.firstName")}
              />
              <Input
                required
                label={t("common.lastName")}
                name="lastName"
                placeholder={t("placeholders.lastName")}
              />
            </div>
            <Input
              required
              className="w-full flex-grow-0"
              label={t("common.email")}
              name="email"
              placeholder={t("placeholders.email")}
            />
            <Select
              required
              className="w-full flex-grow-0"
              label={t("common.role")}
              name="role"
              options={ROLE_OPTIONS}
              placeholder={t("placeholders.role")}
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3"
              disabled={isSubmitting}
              icon={Check}
              label={t("common.saveChanges")}
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
