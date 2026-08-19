'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { QuoteModal } from '../modals/QuoteModal';
import { SearchModal } from '../modals/SearchModal';
import { ProductItem } from '@/lib/types';

interface ModalContextType {
  openQuoteModal: (product?: ProductItem | null, note?: string) => void;
  closeQuoteModal: () => void;
  openSearchModal: () => void;
  closeSearchModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [initialNote, setInitialNote] = useState<string>('');
  const [searchOpen, setSearchOpen] = useState(false);

  const openQuoteModal = (product?: ProductItem | null, note?: string) => {
    setSelectedProduct(product || null);
    setInitialNote(note || '');
    setQuoteOpen(true);
  };

  const closeQuoteModal = () => {
    setQuoteOpen(false);
  };

  const openSearchModal = () => {
    setSearchOpen(true);
  };

  const closeSearchModal = () => {
    setSearchOpen(false);
  };

  // Keyboard shortcut for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <ModalContext.Provider
      value={{
        openQuoteModal,
        closeQuoteModal,
        openSearchModal,
        closeSearchModal,
      }}
    >
      {children}
      <QuoteModal 
        isOpen={quoteOpen} 
        onClose={closeQuoteModal} 
        initialProduct={selectedProduct} 
        initialNote={initialNote}
      />
      <SearchModal 
        isOpen={searchOpen} 
        onClose={closeSearchModal} 
      />
    </ModalContext.Provider>
  );
};

export const useModals = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModals must be used within a ModalProvider');
  }
  return context;
};
