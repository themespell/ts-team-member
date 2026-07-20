import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { fetchData } from '../services/fetchData';
import { deleteData } from "../services/deleteData";
import { duplicateData } from "../services/duplicateData.js";
import { toastNotification } from '../utils/toastNotification.js';
import { TsModal } from './controls/tsControls.js';
import {
  AlertTriangle,
  Brush,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Copy,
  Ellipsis,
  FilePenLine,
  Search,
  Sparkles,
  Trash2,
} from 'lucide-react';
import { getTranslations } from "../utils/translations.js";
import commonStore from "../states/commonStore.js";
import TsButton from "./controls/TsButton.jsx";

function DataTable({ type, title, editor }) {
  const translations = getTranslations();
  const [data, setData] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [bulkDeleteModalOpen, setBulkDeleteModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const [copiedValue, setCopiedValue] = useState("");
  const pageSize = 10;

  const isPro = window.tsteam_settings?.is_pro || false;
  const isLicenseInactive = window.tsTeamPro?.is_licence_inactive || false;
  const canDuplicate = isPro && !isLicenseInactive;

  const { saveSettings, updateModal, reloadData } = commonStore((state) => ({
    saveSettings: state.saveSettings,
    updateModal: state.updateModal,
    reloadData: state.reloadData,
  }));

  useEffect(() => {
    setLoading(true);
    setSelectedRowKeys([]);
    fetchData(`tsteam/${type}/fetch`, (response) => {
      if (response && response.success) {
        const showcaseData = (response.data || []).map((item) => ({
          key: item.post_id,
          ...item,
        }));
        setData(showcaseData);
      } else {
        setData([]);
      }
      setLoading(false);
    });
  }, [type, reloadData]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('[data-action-menu]') && !event.target.closest('button')) {
        setOpenMenuId(null);
      }
    };
    if (openMenuId) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openMenuId]);

  useEffect(() => {
    if (!copiedValue) return undefined;
    const timeout = window.setTimeout(() => setCopiedValue(""), 1500);
    return () => window.clearTimeout(timeout);
  }, [copiedValue]);

  const normalizedData = useMemo(() => data.map((item) => ({
    ...item,
    _searchable: Object.values(item)
      .filter((v) => typeof v === 'string')
      .join(' ')
      .toLowerCase(),
  })), [data]);

  const filteredData = useMemo(() => normalizedData.filter((item) => {
    if (!searchTerm) return true;
    return item._searchable.includes(searchTerm.toLowerCase());
  }), [normalizedData, searchTerm]);

  const totalPages = Math.max(1, Math.ceil(filteredData.length / pageSize));
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedData = filteredData.slice(startIndex, startIndex + pageSize);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, reloadData]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const handleDelete = (post_id) => {
    setDeleteId(post_id);
    setDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    deleteData(`tsteam/${type}/delete`, deleteId)
      .then((response) => {
        if (response.success) {
          toastNotification('success', `${title} Deleted`, `The ${title} has been successfully deleted.`);
          setData((prevData) => prevData.filter((item) => item.key !== deleteId));
          setDeleteModalOpen(false);
        } else {
          toastNotification('error', 'Error', `There was an error deleting the ${title}.`);
        }
      })
      .catch(() => {
        toastNotification('error', 'Error', `There was an error deleting the ${title}.`);
      });
  };

  const handleDuplicate = (post_id) => {
    duplicateData(`tsteam/${type}/duplicate`, post_id)
      .then((response) => {
        if (response.success) {
          toastNotification('success', `${title} Duplicated`, `The ${title} has been successfully duplicated.`);
          saveSettings('reloadData', !reloadData);
        } else {
          toastNotification('error', 'Error', `There was an error duplicating the ${title}.`);
        }
      })
      .catch(() => {
        toastNotification('error', 'Error', `There was an error duplicating the ${title}.`);
      });
  };

  const handleProFeature = () => {
    toastNotification('warning', 'Pro Feature', 'Duplicate is only available in the Pro version.');
  };

  const handleBulkDelete = () => {
    if (selectedRowKeys.length === 0) {
      toastNotification('warning', 'No Selection', 'Please select at least one item to delete.');
      return;
    }
    setBulkDeleteModalOpen(true);
  };

  const confirmBulkDelete = () => {
    const deletePromises = selectedRowKeys.map((id) =>
      deleteData(`tsteam/${type}/delete`, id)
    );

    Promise.all(deletePromises)
      .then((responses) => {
        const successCount = responses.filter((r) => r.success).length;
        const failCount = responses.length - successCount;

        if (successCount > 0) {
          toastNotification('success', 'Bulk Delete Completed', `${successCount} item(s) deleted successfully.`);
          setData((prevData) => prevData.filter((item) => !selectedRowKeys.includes(item.key)));
          setSelectedRowKeys([]);
        }
        if (failCount > 0) {
          toastNotification('error', 'Partial Error', `${failCount} item(s) could not be deleted.`);
        }
        setBulkDeleteModalOpen(false);
      })
      .catch(() => {
        toastNotification('error', 'Error', 'There was an error deleting the items.');
        setBulkDeleteModalOpen(false);
      });
  };

  const handleEdit = (post_id) => {
    setSelectedPost(post_id);
    saveSettings('updateModal', true);
  };

  const closeModal = () => {
    saveSettings('updateModal', false);
    setSelectedPost(null);
  };

  const handleEditor = (post_id, currentType) => {
    let currentUrl = window.location.href;
    if (currentUrl.includes('?')) {
      currentUrl += `&path=editor&type=${currentType}&post_id=${post_id}`;
    } else {
      currentUrl += `?path=editor&type=${currentType}&post_id=${post_id}`;
    }
    window.location.href = currentUrl;
  };

  const handleMenuToggle = useCallback((e, recordKey) => {
    e.stopPropagation();
    if (openMenuId === recordKey) {
      setOpenMenuId(null);
      return;
    }
    const rect = e.currentTarget.getBoundingClientRect();
    const menuWidth = 224;
    const menuHeight = 200;
    let top = rect.bottom + 4;
    let left = rect.right - menuWidth;

    if (top + menuHeight > window.innerHeight) {
      top = rect.top - menuHeight - 4;
    }
    if (left < 8) {
      left = 8;
    }

    setMenuPosition({ top, left });
    setOpenMenuId(recordKey);
  }, [openMenuId]);

  const handleCopy = async (value) => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        const input = document.createElement("textarea");
        input.value = value;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
      }
      setCopiedValue(value);
      toastNotification("success", "Copied", "Value copied to clipboard.");
    } catch {
      toastNotification("error", "Copy failed", "Unable to copy value to clipboard.");
    }
  };

  const compactCode = (value, limit = 34) => (
    value && value.length > limit ? `${value.slice(0, limit)}...` : value
  );

  // Determine columns dynamically from first data item
  const tableColumns = useMemo(() => {
    if (!data.length) return [];
    const firstRow = data[0];
    const skipKeys = ['key', 'post_id', 'team_member_ids'];
    return Object.keys(firstRow).filter((k) => !skipKeys.includes(k));
  }, [data]);

  const renderCellValue = (key, value) => {
    if (!value) return <span className="text-muted-foreground">—</span>;

    if (key === 'image' || key === 'profileImage' || key === 'member_image') {
      return (
        <img
          src={value}
          alt={key}
          className="h-9 w-9 shrink-0 rounded-full object-cover"
        />
      );
    }

    if (key === 'category') {
      return (
        <span
          className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold"
          style={{
            background: 'rgba(112, 63, 214, 0.1)',
            color: '#703FD6',
          }}
        >
          {value}
        </span>
      );
    }

    if (key === 'team_members' && Array.isArray(value)) {
      if (value.length === 0) return <span className="text-muted-foreground">—</span>;
      const names = value.map((m) => m.name || m).join(', ');
      return (
        <span className="truncate block max-w-[200px]" title={names}>
          {names}
        </span>
      );
    }

    if (key === 'shortcode' || key === 'snippet') {
      return (
        <button
          type="button"
          onClick={() => handleCopy(value)}
          className="tsteam-code-chip group"
          title={value}
        >
          <span className="tsteam-code-chip__label">{key === 'shortcode' ? 'Shortcode' : 'PHP'}</span>
          <span className="min-w-0 truncate">{compactCode(value, 26)}</span>
          {copiedValue === value ? (
            <Check className="h-3.5 w-3.5 shrink-0 text-primary" />
          ) : (
            <Copy className="h-3.5 w-3.5 shrink-0 text-muted-foreground transition group-hover:text-primary" />
          )}
        </button>
      );
    }

    if (typeof value === 'string' && value.length > 60) {
      return <span className="truncate block max-w-[200px]" title={value}>{value}</span>;
    }

    return <span>{value}</span>;
  };

  return (
    <div className="max-w-full overflow-x-hidden rounded-[28px]">
      {/* Search bar */}
      <div className="flex flex-wrap items-center gap-3 border-b border-border p-4 sm:p-5">
        <div className="relative min-w-[200px] flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder={`Search ${title.toLowerCase()}...`}
            className="w-full rounded-lg border border-border bg-background py-2 pl-9 pr-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
          />
        </div>
      </div>

      {/* Bulk action bar */}
      {selectedRowKeys.length > 0 && (
        <div className="flex items-center justify-between border-b border-primary/20 bg-primary/5 px-5 py-3">
          <span className="text-sm font-medium text-primary">
            {selectedRowKeys.length} {selectedRowKeys.length === 1 ? 'item' : 'items'} selected
          </span>
          <TsButton
            label={`Delete Selected (${selectedRowKeys.length})`}
            onClick={handleBulkDelete}
            className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600"
          />
        </div>
      )}

      {loading ? (
        <div className="space-y-3 p-5">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={`loading-${index}`} className="h-16 animate-pulse rounded-2xl bg-muted/60" />
          ))}
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/20 text-left text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  <th className="w-10 px-4 py-3">
                    <input
                      type="checkbox"
                      checked={selectedRowKeys.length === paginatedData.length && paginatedData.length > 0}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedRowKeys(paginatedData.map((r) => r.key));
                        } else {
                          setSelectedRowKeys([]);
                        }
                      }}
                      className="h-4 w-4 rounded border-border accent-primary"
                    />
                  </th>
                  {tableColumns.map((col) => (
                    <th key={col} className="px-4 py-3">
                      {col.charAt(0).toUpperCase() + col.slice(1).replace(/_/g, ' ')}
                    </th>
                  ))}
                  <th className="px-4 py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.length ? paginatedData.map((record) => (
                  <tr key={record.key} className="border-b border-border/60 transition hover:bg-muted/30">
                    <td className="px-4 py-3">
                      <input
                        type="checkbox"
                        checked={selectedRowKeys.includes(record.key)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedRowKeys((prev) => [...prev, record.key]);
                          } else {
                            setSelectedRowKeys((prev) => prev.filter((k) => k !== record.key));
                          }
                        }}
                        className="h-4 w-4 rounded border-border accent-primary"
                      />
                    </td>
                    {tableColumns.map((col) => (
                      <td key={col} className="max-w-0 px-4 py-3 align-middle">
                        <div className="flex items-center gap-2">
                          {renderCellValue(col, record[col])}
                        </div>
                      </td>
                    ))}
                    <td className="px-4 py-3 align-middle text-right">
                      <div className="relative inline-flex">
                        <button
                          type="button"
                          onClick={(e) => handleMenuToggle(e, record.key)}
                          className="grid h-8 w-8 place-items-center rounded-xl border border-transparent text-muted-foreground transition hover:border-border hover:bg-muted hover:text-foreground"
                        >
                          <Ellipsis className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan={tableColumns.length + 2} className="px-5 py-12 text-center">
                      <div className="mx-auto max-w-sm">
                        <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-muted text-muted-foreground">
                          <Search className="h-5 w-5" />
                        </div>
                        <h3 className="mt-4 text-base font-semibold text-foreground">No items found</h3>
                        <p className="mt-1 text-sm text-muted-foreground">Try a different search term.</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-5 py-2.5 text-xs text-muted-foreground">
            <span>
              Showing {filteredData.length ? startIndex + 1 : 0}–{Math.min(startIndex + pageSize, filteredData.length)} of {filteredData.length}
            </span>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                disabled={currentPage === 1}
                className="rounded-lg px-2 py-1 transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }
                return (
                  <button
                    key={pageNum}
                    type="button"
                    onClick={() => setCurrentPage(pageNum)}
                    className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition ${
                      currentPage === pageNum
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:bg-muted'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                type="button"
                onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                disabled={currentPage === totalPages}
                className="rounded-lg px-2 py-1 transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </>
      )}

      {openMenuId && createPortal(
        <div
          className="fixed z-[9999] w-56 rounded-2xl border border-border bg-white p-2 shadow-lg"
          style={{ top: menuPosition.top, left: menuPosition.left }}
        >
          <button type="button" onClick={() => { setOpenMenuId(null); handleEdit(openMenuId); }} className="tsteam-action-item">
            <FilePenLine className="h-4 w-4" />
            {translations.edit}
          </button>

          {editor && (
            <button type="button" onClick={() => { setOpenMenuId(null); handleEditor(openMenuId, type); }} className="tsteam-action-item">
              <Brush className="h-4 w-4" />
              {translations.editDesign}
            </button>
          )}

          <button
            type="button"
            onClick={() => {
              setOpenMenuId(null);
              if (canDuplicate) {
                handleDuplicate(openMenuId);
              } else {
                handleProFeature();
              }
            }}
            className="tsteam-action-item"
          >
            <Copy className={`h-4 w-4 ${canDuplicate ? "" : "text-muted-foreground"}`} />
            <span className="flex-1 text-left">{translations.duplicate || 'Duplicate'}</span>
            {!canDuplicate && <span className="rounded-full bg-amber-500 px-2 py-0.5 text-[10px] font-semibold text-white">PRO</span>}
          </button>

          <button
            type="button"
            onClick={() => { setOpenMenuId(null); handleDelete(openMenuId); }}
            className="tsteam-action-item text-red-500 hover:bg-red-50 hover:text-red-600"
          >
            <Trash2 className="h-4 w-4" />
            {translations.delete}
          </button>
        </div>,
        document.body
      )}

      <TsModal
        actionType='edit'
        formSupport={true}
        name={title}
        type={type}
        id={selectedPost}
        isOpen={updateModal}
        isClose={closeModal}
        width={800}
      />

      <TsModal
        isOpen={deleteModalOpen}
        isClose={() => setDeleteModalOpen(false)}
        width={400}
        name={title}
      >
        <div className="flex flex-col items-center justify-center p-6">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
            <AlertTriangle className="h-8 w-8 text-red-500" />
          </div>
          <h3 className="mb-2 text-xl font-semibold text-gray-900">{translations.areYouSure}</h3>
          <p className="mb-8 text-center text-gray-600">
            {translations.deleteConfirmation} "{title}". {translations.areYouSure}
          </p>
          <div className="flex w-full space-x-4">
            <TsButton
              label={translations.noKeepIt}
              onClick={() => setDeleteModalOpen(false)}
              className="flex-1 rounded-lg bg-gray-100 py-2.5 text-gray-700 hover:bg-gray-200"
            />
            <TsButton
              label={translations.yesDelete}
              onClick={confirmDelete}
              className="flex-1 rounded-lg bg-red-500 py-2.5 text-white hover:bg-red-600"
            />
          </div>
        </div>
      </TsModal>

      <TsModal
        isOpen={bulkDeleteModalOpen}
        isClose={() => setBulkDeleteModalOpen(false)}
        width={400}
        name={title}
      >
        <div className="flex flex-col items-center justify-center p-6">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
            <AlertTriangle className="h-8 w-8 text-red-500" />
          </div>
          <h3 className="mb-2 text-xl font-semibold text-gray-900">Delete Multiple Items</h3>
          <p className="mb-8 text-center text-gray-600">
            Are you sure you want to delete <strong>{selectedRowKeys.length}</strong> selected item(s)? This action cannot be undone.
          </p>
          <div className="flex w-full space-x-4">
            <TsButton
              label="Cancel"
              onClick={() => setBulkDeleteModalOpen(false)}
              className="flex-1 rounded-lg bg-gray-100 py-2.5 text-gray-700 hover:bg-gray-200"
            />
            <TsButton
              label={`Delete ${selectedRowKeys.length} Item(s)`}
              onClick={confirmBulkDelete}
              className="flex-1 rounded-lg bg-red-500 py-2.5 text-white hover:bg-red-600"
            />
          </div>
        </div>
      </TsModal>
    </div>
  );
}

export default DataTable;
