import React from "react";
// import LevelUpModal from "./LevelUpModal";
import ActionCompleteModal from "./ActionCompleteModal";
import LoadingModal from "./LoadingModal";
import AlphaWelcomeModal from "./AlphaWelcomeModal";

function ModalManager({ children }) {
  return (
    <>
      {/* <LevelUpModal /> */}
      <AlphaWelcomeModal />
      <ActionCompleteModal />
      <LoadingModal />
      <>{children}</>
    </>
  );
}

export default ModalManager;
