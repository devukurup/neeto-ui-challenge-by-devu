import React, { useState, useEffect } from "react";

import { Plus } from "neetoicons";
import { Button, PageLoader } from "neetoui";
import { Container, Header } from "neetoui/layouts";
import { useTranslation } from "react-i18next";

import notesApi from "apis/notes";
import MenuBar from "components/commons/MenuBar";

import {
  MENUBAR_MAIN_BLOCK_DATA,
  MENUBAR_SEGMENTS_BLOCK_DATA,
  MENUBAR_TAGS_BLOCK_DATA,
} from "./constants";
import DeleteAlert from "./DeleteAlert";
import List from "./List";
import NewNotePane from "./Pane/Create";

const Notes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isNewNotePaneOpen, setIsNewNotePaneOpen] = useState(false);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNoteId, setSelectedNoteId] = useState(-1);
  const [notes, setNotes] = useState([]);
  const [isMenuBarOpen, setIsMenuBarOpen] = useState(true);

  const { t } = useTranslation();

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setIsLoading(true);
      const {
        data: { notes },
      } = await notesApi.fetch();
      setNotes(notes);
    } catch (error) {
      logger.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = id => {
    setSelectedNoteId(id);
    setIsDeleteAlertOpen(true);
  };

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className="flex w-full">
      <MenuBar
        isMenuBarOpen={isMenuBarOpen}
        mainBlocks={MENUBAR_MAIN_BLOCK_DATA}
        segmentBlocks={MENUBAR_SEGMENTS_BLOCK_DATA}
        tagBlocks={MENUBAR_TAGS_BLOCK_DATA}
        title={t("common.notes")}
      />
      <Container>
        <Header
          title={t("common.allNotes")}
          actionBlock={
            <Button
              icon={Plus}
              label={t("buttonLabels.addNote")}
              size="small"
              onClick={() => setIsNewNotePaneOpen(true)}
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
        <List
          handleDelete={handleDelete}
          notes={notes}
          setIsNewNotePaneOpen={setIsNewNotePaneOpen}
        />
        <NewNotePane
          fetchNotes={fetchNotes}
          setShowPane={setIsNewNotePaneOpen}
          showPane={isNewNotePaneOpen}
        />
        <DeleteAlert
          isOpen={isDeleteAlertOpen}
          refetch={fetchNotes}
          selectedNoteId={selectedNoteId}
          setSelectedNoteId={setSelectedNoteId}
          onClose={() => setIsDeleteAlertOpen(false)}
        />
      </Container>
    </div>
  );
};

export default Notes;
