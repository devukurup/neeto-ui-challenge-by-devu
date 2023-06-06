import React from "react";

import { MenuVertical } from "neetoicons";
import { Typography, Dropdown } from "neetoui";
import { useTranslation } from "react-i18next";

const { Menu, MenuItem } = Dropdown;

const Header = ({ title, handleDelete, id }) => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-between">
      <Typography className="text-gray-700" style="body1" weight="semibold">
        {title}
      </Typography>
      <Dropdown buttonStyle="text" icon={MenuVertical}>
        <Menu>
          <MenuItem.Button>{t("common.edit")}</MenuItem.Button>
          <MenuItem.Button style="danger" onClick={() => handleDelete(id)}>
            {t("common.delete")}
          </MenuItem.Button>
        </Menu>
      </Dropdown>
    </div>
  );
};

export default Header;
