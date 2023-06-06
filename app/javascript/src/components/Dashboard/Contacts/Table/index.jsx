import React, { useState } from "react";

import classnames from "classnames";
import EmptyNotesListImage from "images/EmptyNotesList";
import { Table as NeetoUITable } from "neetoui";
import { useTranslation } from "react-i18next";
import { isOdd, isPresent } from "utils";

import EmptyState from "components/commons/EmptyState";

import { DEFAULT_PAGE_SIZE, INITIAL_PAGE_NUMBER } from "./constants";

const Table = ({ rowData, columnData, setIsContactPaneOpen }) => {
  const [currentPageNumber, setCurrentPageNumber] =
    useState(INITIAL_PAGE_NUMBER);
  const [selectedRowIds, setSelectedRowIds] = useState([]);

  const { t } = useTranslation();

  return (
    <>
      {isPresent(rowData) ? (
        <NeetoUITable
          fixedHeight
          rowSelection
          bordered={false}
          columnData={columnData}
          currentPageNumber={currentPageNumber}
          defaultPageSize={DEFAULT_PAGE_SIZE}
          rowData={rowData}
          selectedRowKeys={selectedRowIds}
          totalCount={rowData.length}
          handlePageChange={nextPageNumber =>
            setCurrentPageNumber(nextPageNumber)
          }
          rowClassName={(_, index) =>
            classnames({ "neeto-ui-bg-gray-100": isOdd(index) })
          }
          onRowSelect={ids => setSelectedRowIds(ids)}
        />
      ) : (
        <EmptyState
          image={EmptyNotesListImage}
          primaryAction={() => setIsContactPaneOpen(true)}
          primaryActionLabel={t("buttonLabels.addContact")}
          title={t("emptyState.contacts.title")}
        />
      )}
    </>
  );
};

export default Table;
