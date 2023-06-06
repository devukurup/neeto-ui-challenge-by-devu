import React, { useState } from "react";

import classnames from "classnames";
import EmptyNotesListImage from "images/EmptyNotesList";
import { Table as NeetoUITable } from "neetoui";
import { useTranslation } from "react-i18next";
import { isOdd, isPresent, noop } from "utils";

import EmptyState from "components/commons/EmptyState";

import {
  DEFAULT_PAGE_SIZE,
  INITIAL_PAGE_NUMBER,
  SAMPLE_CONTACTS,
} from "./constants";
import { columnData } from "./utils";

const Table = () => {
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE_NUMBER);
  const [selectedRowIds, setSelectedRowIds] = useState([]);
  const rowData = SAMPLE_CONTACTS;

  const { t } = useTranslation();

  return (
    <>
      {isPresent(rowData) ? (
        <NeetoUITable
          fixedHeight
          rowSelection
          bordered={false}
          columnData={columnData(noop)}
          currentPageNumber={currentPage}
          defaultPageSize={DEFAULT_PAGE_SIZE}
          handlePageChange={nextPage => setCurrentPage(nextPage)}
          rowData={rowData}
          selectedRowKeys={selectedRowIds}
          totalCount={rowData.length}
          rowClassName={(_, index) =>
            classnames({ "neeto-ui-bg-gray-100": isOdd(index) })
          }
          onRowSelect={ids => setSelectedRowIds(ids)}
        />
      ) : (
        <EmptyState
          image={EmptyNotesListImage}
          primaryAction={noop}
          primaryActionLabel={t("buttonLabels.addContact")}
          title={t("emptyState.contacts.title")}
        />
      )}
    </>
  );
};

export default Table;
