import React from "react";

import { Clock } from "neetoicons";
import { Typography, Avatar, Tooltip, Tag } from "neetoui";
import { useTranslation } from "react-i18next";

import { getElapsedTime, formatDate } from "components/Dashboard/Notes/utils";

import { USER_DETAILS } from "./constants";

const Footer = ({ createdAt }) => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-between">
      <Tag label={t("common.gettingStarted")} style="secondary" type="solid" />
      <Tooltip content={formatDate(createdAt)} position="bottom-end">
        <div className="flex items-center space-x-1">
          <Clock size="12" />
          <Typography className="text-gray-600" style="body3">
            {t("common.createdAgo", { time: getElapsedTime(createdAt) })}
          </Typography>
          <Avatar size="small" user={USER_DETAILS} />
        </div>
      </Tooltip>
    </div>
  );
};

export default Footer;
