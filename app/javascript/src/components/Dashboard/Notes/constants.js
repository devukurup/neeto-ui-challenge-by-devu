import { t } from "i18next";
import * as yup from "yup";

import { SINGULAR } from "../constants";

export const INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  assignedContact: null,
  tags: [],
};

export const VALIDATION_SCHEMA = yup.object().shape({
  title: yup
    .string()
    .required(t("validations.required", { entity: t("common.title") })),
  description: yup
    .string()
    .required(t("validations.required", { entity: t("common.description") })),
  assignedContact: yup
    .object()
    .shape({ label: yup.string(), value: yup.string() })
    .nullable()
    .required(
      t("validations.required", { entity: t("common.assignedContact") })
    ),
  tags: yup
    .array()
    .of(yup.object().shape({ label: yup.string(), value: yup.string() }))
    .min(
      1,
      t("validations.minimum", {
        value: 1,
        entity: t("common.tag", SINGULAR),
      })
    )
    .required(t("validations.required", { entity: t("common.tag", SINGULAR) })),
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

export const TAG_OPTIONS = [
  {
    label: t("common.gettingStarted"),
    value: "getting_started",
  },
  {
    label: t("common.onboarding"),
    value: "onboarding",
  },
  {
    label: t("common.userFlow"),
    value: "user_flow",
  },
  {
    label: t("common.ux"),
    value: "ux",
  },
  {
    label: t("common.bugs"),
    value: "bugs",
  },
  {
    label: t("common.v2"),
    value: "v2",
  },
];

export const CONTACT_OPTIONS = [
  {
    label: "Oliver Smith",
    value: "oliver_smith",
  },
  {
    label: "Sam Smith",
    value: "sam_smith",
  },
];
