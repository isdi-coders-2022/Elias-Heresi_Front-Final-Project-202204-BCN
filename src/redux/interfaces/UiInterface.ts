export interface Ui {
  loading: boolean;
  feedback: boolean;
  entryId: null | string;
}

export interface ToastInput {
  message: string;
  type: "success" | "error" | "info";
}

export interface ConfirmationInput {
  displayText: string;
  action: () => void;
}
