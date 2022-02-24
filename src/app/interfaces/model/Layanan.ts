export interface Layanan {
  id_layanan: number;
  id_instansi: number;
  kode: string;
  nama: string;
  harga: string;
  created_at?: Date;
  updated_at?: Date;
  created_by?: string;
  updated_by?: any;
  is_deleted?: number;
}