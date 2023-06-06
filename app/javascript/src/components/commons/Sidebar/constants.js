import { t } from "i18next";
import { Inbox, Text, UserCircle } from "neetoicons";

import { PLURAL } from "components/Dashboard/constants";

export const APP_NAME = "Wheel";

export const PASSWORD_PATH = "/my/password/edit";
export const PROFILE_PATH = "/my/profile";
export const LOGOUT_PATH = "/logout";

export const SIDENAV_LINKS = [
  {
    label: t("common.note", PLURAL),
    to: "/notes",
    icon: Text,
  },
  {
    label: t("sideBar.contacts"),
    to: "/contacts",
    icon: UserCircle,
  },
  {
    label: t("sideBar.settings"),
    to: "/settings",
    icon: Inbox,
  },
];
