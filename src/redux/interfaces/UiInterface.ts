export interface Ui {
  loading: boolean;
  feedback: boolean;
}

export interface ToastInput {
  message: string;
  type: "success" | "error" | "info";
}
