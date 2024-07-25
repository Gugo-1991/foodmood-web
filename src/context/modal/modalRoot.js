import { memo } from "react";

const ModalRenderer = memo(({ component, ...rest }) => component(rest));

export const ModalRoot = memo(({ modals }) => {
  return (
    <>
      {Object.keys(modals).map((key) => {
        return <ModalRenderer key={key} component={modals[key]} />;
      })}
    </>
  );
});
