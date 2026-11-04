import React, { createContext, useContext, useState } from 'react';

const DonationModalContext = createContext();

export function DonationModalProvider({ children }) {
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [isVolunteerOpen, setIsVolunteerOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [donationCause, setDonationCause] = useState('General');

  const openDonateModal = (cause = 'General') => {
    setDonationCause(cause);
    setIsDonateOpen(true);
  };

  const closeDonateModal = () => {
    setIsDonateOpen(false);
  };

  const openVolunteerModal = () => {
    setIsVolunteerOpen(true);
  };

  const closeVolunteerModal = () => {
    setIsVolunteerOpen(false);
  };

  const openServiceModal = (service) => {
    setSelectedService(service);
  };

  const closeServiceModal = () => {
    setSelectedService(null);
  };

  return (
    <DonationModalContext.Provider
      value={{
        isDonateOpen,
        openDonateModal,
        closeDonateModal,
        donationCause,
        isVolunteerOpen,
        openVolunteerModal,
        closeVolunteerModal,
        selectedService,
        openServiceModal,
        closeServiceModal,
      }}
    >
      {children}
    </DonationModalContext.Provider>
  );
}

export function useDonationModal() {
  const context = useContext(DonationModalContext);
  if (!context) {
    throw new Error('useDonationModal must be used within a DonationModalProvider');
  }
  return context;
}

