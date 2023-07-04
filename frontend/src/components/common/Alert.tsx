import * as React from "react";

import MuiAlert, { AlertColor, AlertProps } from "@mui/material/Alert";
import { Snackbar, SnackbarOrigin } from "@mui/material";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type AlertContextType = {
  isOpen: boolean;
  type: AlertColor;
  message: string;
};

const AlertContext = React.createContext<AlertContextType>({
  isOpen: false,
  type: "info",
  message: "",
});
AlertContext.displayName = "AlertValueContext";

type AlertStatus = "open" | "close";

function alertReducer(
  state: { isOpen: boolean; type: AlertColor; message: string },
  action: {
    status: AlertStatus;
    type: AlertColor;
    message: string;
  }
) {
  const type = action.type;
  const message = action.message || "This is Alert message";
  switch (action.status) {
    case "open":
      return {
        isOpen: true,
        type: type,
        message,
      };
    case "close":
      return {
        isOpen: false,
        type: type,
        message,
      };
    default:
      return {
        isOpen: false,
        type: type,
        message,
      };
  }
}

type AlertDispatchContextType = React.Dispatch<{
  status: AlertStatus;
  type: AlertColor;
  message: string;
}>;

type Noop = () => void;

const AlertDispatchContext = React.createContext<
  AlertDispatchContextType | Noop
>(() => {});
AlertDispatchContext.displayName = "AlertDispatchContext";

export function AlertProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(alertReducer, {
    isOpen: false,
    type: "info",
    message: "info",
  });
  return (
    <AlertContext.Provider value={state}>
      <AlertDispatchContext.Provider value={dispatch}>
        {children}
      </AlertDispatchContext.Provider>
    </AlertContext.Provider>
  );
}

function useAlert() {
  return React.useContext(AlertContext);
}

export function useAlertDispatch() {
  return React.useContext(AlertDispatchContext);
}

type AlertViewProps = {
  autoHideDuration?: number;
};

function AlertInner({
  autoHideDuration = 1000,
  position,
  ...props
}: AlertViewProps & AlertProps & { position?: SnackbarOrigin }) {
  const alert = useAlert();
  const dispatch = useAlertDispatch();

  const handleClose = React.useCallback(() => {
    dispatch({ status: "close", type: alert.type, message: alert.message });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alert.message, alert.type]);

  return (
    <Snackbar
      open={alert.isOpen}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      anchorOrigin={position}
    >
      <Alert
        onClose={handleClose}
        severity={alert.type}
        sx={{ width: "100%" }}
        {...props}
      >
        {alert.message}
      </Alert>
    </Snackbar>
  );
}

export default function AlertView(
  props: AlertViewProps & AlertProps & { position?: SnackbarOrigin }
) {
  return (
    <>
      <AlertInner {...props} />
    </>
  );
}
