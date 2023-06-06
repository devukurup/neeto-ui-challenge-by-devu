import { t } from "i18next";
import * as yup from "yup";

export const INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  role: null,
};

export const VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup
    .string()
    .required(t("validations.required", { entity: t("common.firstName") })),
  lastName: yup
    .string()
    .required(t("validations.required", { entity: t("common.lastName") })),
  email: yup
    .string()
    .email(t("validations.invalidEmail"))
    .required(t("validations.required", { entity: t("common.email") })),
  role: yup
    .object()
    .shape({ label: yup.string(), value: yup.string() })
    .nullable()
    .required(t("validations.required", { entity: t("common.role") })),
});

export const ROLE_OPTIONS = [
  {
    label: t("common.owner"),
    value: "owner",
  },
  {
    label: t("common.admin"),
    value: "admin",
  },
];
