import React, { useState } from "react";

import { Plus } from "neetoicons";
import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";
import { useTranslation } from "react-i18next";

import MenuBar from "components/commons/MenuBar";
import { PLURAL } from "constants";

import { MENUBAR_BLOCK_DATA } from "./constants";
import DeleteAlert from "./DeleteAlert";
import NewContactPane from "./Pane/Create";
import Table from "./Table";
import { SAMPLE_CONTACTS } from "./Table/constants";
import { columnData } from "./Table/utils";

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuBarOpen, setIsMenuBarOpen] = useState(true);
  const [isContactPaneOpen, setIsContactPaneOpen] = useState(false);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);

  const { t } = useTranslation();

  const handleDelete = () => {
    setIsDeleteAlertOpen(true);
  };

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
              onClick={() => setIsContactPaneOpen(true)}
            />
          }
          menuBarToggle={() =>
            setIsMenuBarOpen(isMenuBarOpen => !isMenuBarOpen)
          }
          searchProps={{
            value: searchTerm,
            onChange: event => setSearchTerm(event.target.value),
            placeholder: t("placeholders.searchNameEmail"),
          }}
        />
        <Table
          columnData={columnData(handleDelete)}
          rowData={SAMPLE_CONTACTS}
          setIsContactPaneOpen={setIsContactPaneOpen}
        />
        <NewContactPane
          isOpen={isContactPaneOpen}
          onClose={() => setIsContactPaneOpen(false)}
        />
        <DeleteAlert
          isOpen={isDeleteAlertOpen}
          onClose={() => setIsDeleteAlertOpen(false)}
        />
      </Container>
    </div>
  );
};

export default Contacts;
