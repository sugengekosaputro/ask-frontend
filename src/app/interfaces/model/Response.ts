export interface Response<T> {

  notif: string;
  kode: number;
  data: T[];
  token?: string;
}