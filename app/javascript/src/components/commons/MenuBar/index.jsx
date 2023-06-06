import React from "react";

import { Typography } from "neetoui";
import { MenuBar as NeetoUIMenuBar } from "neetoui/layouts";
import { useTranslation } from "react-i18next";

import { PLURAL } from "components/Dashboard/constants";

import { SEGMENTS_ICON_PROPS, TAGS_ICON_PROPS } from "./constants";

const { Block, SubTitle } = NeetoUIMenuBar;

const MenuBar = ({
  title,
  mainBlocks,
  segmentBlocks,
  tagBlocks,
  isMenuBarOpen,
}) => {
  const { t } = useTranslation();

  return (
    <NeetoUIMenuBar showMenu={isMenuBarOpen} title={title}>
      {mainBlocks.map(({ label, isActive, count }) => (
        <Block active={isActive} count={count} key={label} label={label} />
      ))}
      <SubTitle iconProps={SEGMENTS_ICON_PROPS}>
        <Typography
          component="h4"
          style="h5"
          textTransform="uppercase"
          weight="bold"
        >
          {t("menuBar.subTitles.segments")}
        </Typography>
      </SubTitle>
      {segmentBlocks.map(({ label, isActive, count }) => (
        <Block active={isActive} count={count} key={label} label={label} />
      ))}
      <SubTitle iconProps={TAGS_ICON_PROPS}>
        <Typography
          component="h4"
          style="h5"
          textTransform="uppercase"
          weight="bold"
        >
          {t("common.tag", PLURAL)}
        </Typography>
      </SubTitle>
      {tagBlocks.map(({ label, isActive, count }) => (
        <Block active={isActive} count={count} key={label} label={label} />
      ))}
    </NeetoUIMenuBar>
  );
};

export default MenuBar;
