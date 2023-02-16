type ResponseData = {
  id: number;
  processName: string;
  color: string;
  private?: boolean;
  // data: [];
};

export type DataProps = {
  data: ResponseData[];
};

export type CreateProcessModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export type CreateProcessModalInitialValues = {
  name: string;
  color: string;
};

export type CardProps = {
  process?: any;
  children?: React.ReactNode;
  color?: string;
};
