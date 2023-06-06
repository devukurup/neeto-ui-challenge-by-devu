import React, { useState } from "react";

import { Plus } from "neetoicons";
import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";
import { useTranslation } from "react-i18next";

import MenuBar from "components/commons/MenuBar";
import { PLURAL } from "constants";

import { MENUBAR_BLOCK_DATA } from "./constants";

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuBarOpen, setIsMenuBarOpen] = useState(true);

  const { t } = useTranslation();

  return (
    <div className="flex w-full">
      <MenuBar
        isMenuBarOpen={isMenuBarOpen}
        mainBlocks={MENUBAR_BLOCK_DATA}
        title={t("common.contact", PLURAL)}
      />
      <Container>
        <Header
          title={t("common.allContacts")}
          actionBlock={
            <Button
              icon={Plus}
              label={t("buttonLabels.addContact")}
              size="small"
            />
          }
          menuBarToggle={() =>
            setIsMenuBarOpen(isMenuBarOpen => !isMenuBarOpen)
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
            placeholder: t("placeholders.searchNameEmail"),
          }}
        />
      </Container>
    </div>
  );
};

export default Contacts;
