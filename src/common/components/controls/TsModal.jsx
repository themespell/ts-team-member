import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import FormContainer from '../helper/form/FormContainer';
import { X } from 'lucide-react';
import {getTranslations} from "../../utils/translations.js";

function TsModal({ actionType, formSupport, name, type, id, isOpen, isClose, width = 700, children }) {
  const translations = getTranslations();
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => {
        setAnimating(true);
      });
    } else {
      setAnimating(false);
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const title = actionType === 'create'
    ? `${translations.add} ${name}`
    : actionType === 'edit'
    ? `${translations.edit} ${name}`
    : actionType === 'delete'
    ? `${translations.delete} ${name}`
    : '';

  const handleClose = () => {
    setAnimating(false);
    setTimeout(() => {
      isClose();
    }, 200);
  };

  const modal = (
    <div className="fixed inset-0 z-[10000] flex items-start justify-center p-4 pt-[6vh]">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-200 ${animating ? 'opacity-100' : 'opacity-0'}`}
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className={`relative flex flex-col bg-white shadow-2xl transition-all duration-200 ${animating ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4'}`}
        style={{ maxWidth: width, width: '100%', maxHeight: '88vh', borderRadius: '16px', overflow: 'hidden' }}
      >
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #f0f0f0',
          padding: '16px 32px',
          flexShrink: 0,
        }}>
          <h2 className="text-lg font-bold text-[#1a1a2e]">{title}</h2>
          <button
            type="button"
            onClick={handleClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-[#999] transition hover:bg-[#f5f5f5] hover:text-[#333]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto" style={{ minHeight: 0 }}>
          {formSupport ? (
            <FormContainer actionType={actionType} name={name} type={type} post_id={id} />
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}

export default TsModal;
