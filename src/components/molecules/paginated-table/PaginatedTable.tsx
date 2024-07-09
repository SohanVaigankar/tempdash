import React, { useMemo, useState } from "react";
// components
import Pagination from "../../atoms/pagination/Pagination";

interface TableProps<T> {
  data: T[];
  columns: {
    key: keyof T;
    header: string;
    sortable?: boolean;
  }[];
  itemsPerPage: number;
}

const PaginatedTable = <T extends Record<string, any>>(
  props: TableProps<T>
) => {
  const { data, columns, itemsPerPage } = props;

  type SortConfigType = {
    key: keyof T;
    direction: "asc" | "desc";
  };

  const [sortConfig, setSortConfig] = useState<SortConfigType | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  //   sorting data based on sort config
  const sortedData = useMemo(() => {
    const sortableData = data;

    if (sortableData.length > 0 && sortConfig !== null) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }

    return sortableData;
  }, [data, sortConfig]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedData.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedData, currentPage, itemsPerPage]);

  //  reversing sortconfig order to sort table
  const sortTable = (key: keyof T, isSortable: boolean | undefined) => {
    if (isSortable === false) return;

    let direction: "asc" | "desc" = "asc";
    if (sortConfig?.key === key && sortConfig?.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
    handlePageChange(1);
  };

  //   fn to update current page number
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full">
      {/* table */}
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key as string}
                  onClick={() => sortTable(column.key, column.sortable)}
                  className="px-6 py-3 cursor-pointer hover:bg-gray-100"
                >
                  <div className="flex items-center">
                    {column.header}
                    {sortConfig?.key === column.key && (
                      <span className="ml-2">
                        {sortConfig.direction === "asc" ? "▲" : "▼"}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => (
              <tr key={index} className="bg-white border-b hover:bg-gray-50">
                {columns.map((column) => (
                  <td
                    key={column.key as string}
                    className="px-6 py-4 whitespace-nowrap"
                  >
                    {item[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* pagination */}
      <Pagination
        currentPage={currentPage}
        totalItems={sortedData.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default React.memo(PaginatedTable);
