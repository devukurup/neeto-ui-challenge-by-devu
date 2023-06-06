import React from "react";

import { t } from "i18next";
import { MenuHorizontal } from "neetoicons";
import { Avatar, Typography, Dropdown } from "neetoui";

import { USER_IMAGE_URL } from "components/Dashboard/constants";

const { Menu, MenuItem } = Dropdown;

export const columnData = handleDelete => [
  {
    dataIndex: "name",
    key: "name",
    title: t("table.nameAndRole"),
    render: name => (
      <div className="flex items-center space-x-3">
        <Avatar size="large" user={{ name, imageUrl: USER_IMAGE_URL }} />
        <div>
          <Typography style="body2" weight="semibold">
            {name}
          </Typography>
          <Typography style="body3" weight="normal">
            {t("common.owner")}
          </Typography>
        </div>
      </div>
    ),
  },
  {
    dataIndex: "email",
    key: "email",
    title: t("table.email"),
  },
  {
    dataIndex: "createdAt",
    key: "createdAt",
    title: t("table.createdAt"),
  },
  {
    dataIndex: "action",
    key: "action",
    render: () => (
      <Dropdown buttonStyle="text" icon={MenuHorizontal}>
        <Menu>
          <MenuItem.Button>{t("common.edit")}</MenuItem.Button>
          <MenuItem.Button style="danger" onClick={handleDelete}>
            {t("common.delete")}
          </MenuItem.Button>
        </Menu>
      </Dropdown>
    ),
  },
];
