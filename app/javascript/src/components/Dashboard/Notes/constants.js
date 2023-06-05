import { t } from "i18next";
import * as yup from "yup";

export const INITIAL_FORM_VALUES = {
  title: "",
  description: "",
};

export const VALIDATION_SCHEMA = yup.object().shape({
  title: yup
    .string()
    .required(t("validations.required", { entity: t("common.title") })),
  description: yup
    .string()
    .required(t("validations.required", { entity: t("common.description") })),
});

export const MENUBAR_MAIN_BLOCK_DATA = [
  {
    label: t("menuBar.blockLabels.all"),
    isActive: true,
    count: 200,
  },
  {
    label: t("menuBar.blockLabels.users"),
    isActive: false,
    count: 80,
  },
  {
    label: t("menuBar.blockLabels.leads"),
    isActive: false,
    count: 60,
  },
  {
    label: t("menuBar.blockLabels.visitors"),
    isActive: false,
    count: 60,
  },
];

export const MENUBAR_SEGMENTS_BLOCK_DATA = [
  {
    label: t("menuBar.blockLabels.europe"),
    isActive: false,
    count: 80,
  },
  {
    label: t("menuBar.blockLabels.middleEast"),
    isActive: false,
    count: 60,
  },
  {
    label: t("menuBar.blockLabels.asia"),
    isActive: false,
    count: 60,
  },
];

export const MENUBAR_TAGS_BLOCK_DATA = [
  {
    label: t("menuBar.blockLabels.sales"),
    isActive: false,
    count: 80,
  },
  {
    label: t("menuBar.blockLabels.finance"),
    isActive: false,
    count: 60,
  },
  {
    label: t("menuBar.blockLabels.userExperience"),
    isActive: false,
    count: 60,
  },
];
