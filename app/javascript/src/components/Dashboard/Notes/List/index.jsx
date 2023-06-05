import React from "react";

import { useTranslation } from "react-i18next";
import { isPresent } from "utils";

import EmptyState from "components/commons/EmptyState";
import EmptyNotesListImage from "images/EmptyNotesList";

import Card from "./Card";

const List = ({ notes, setIsNewNotePaneOpen }) => {
  const { t } = useTranslation();

  return (
    <>
      {isPresent(notes) ? (
        <div className="mt-10 flex w-full flex-col space-y-4">
          {notes.map(({ title, description, id, created_at }) => (
            <Card
              createdAt={created_at}
              description={description}
              key={id}
              title={title}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          image={EmptyNotesListImage}
          primaryAction={() => setIsNewNotePaneOpen(true)}
          primaryActionLabel={t("buttonLabels.addNewNote")}
          subtitle={t("emptyState.notes.subtitle")}
          title={t("emptyState.notes.title")}
        />
      )}
    </>
  );
};

export default List;
