/* eslint-disable @typescript-eslint/no-explicit-any */
import { enUS } from "@material-ui/core/locale";
import messagesEnglish from "./en.json";

export function getLocale(): string {
  return navigator.language.split(/[-_]/)[0];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getMessages(locale: string): any {
  if (!locale) {
    return messagesEnglish;
  }

  switch (locale) {
    default:
      return messagesEnglish;
  }
}

function getMuiMessages(locale: string): any {
  if (!locale) {
    return enUS;
  }

  switch (locale) {
    default:
      return enUS;
  }
}

function getMuiDataTablesTextLabels(locale: string): any {
  const messages = getMessages(locale);

  return {
    body: {
      loading: messages["mui.datatables.body.loading"],
      noMatch: messages["mui.datatables.body.no.match"],
      toolTip: messages["mui.datatables.body.sort.tooltip"],
    },
    pagination: {
      next: messages["mui.datatables.pagination.next"],
      previous: messages["mui.datatables.pagination.previous"],
      rowsPerPage: messages["mui.datatables.pagination.rowsperpage"],
      displayRows: messages["mui.datatables.pagination.displayrows"],
    },
    toolbar: {
      search: messages["mui.datatables.toolbar.search"],
      downloadCsv: messages["mui.datatables.toolbar.downloadcsv"],
      print: messages["mui.datatables.toolbar.print"],
      viewColumns: messages["mui.datatables.toolbar.viewcolumns"],
      filterTable: messages["mui.datatables.toolbar.filtertable"],
    },
    filter: {
      all: messages["mui.datatables.filter.all"],
      title: messages["mui.datatables.filter.title"],
      reset: messages["mui.datatables.filter.reset"],
    },
    viewColumns: {
      title: messages["mui.datatables.viewcolumns.title"],
      titleAria: messages["mui.datatables.viewcolumns.titlearia"],
    },
    selectedRows: {
      text: messages["mui.datatables.selectedrows.text"],
      delete: messages["mui.datatables.selectedrows.delete"],
      deleteAria: messages["mui.datatables.selectedrows.deletearia"],
    },
  };
}

export { getMuiMessages };
export { getMuiDataTablesTextLabels };
export { getMessages };
export default getMessages;
