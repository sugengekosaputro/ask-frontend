export interface Instansi {
  id_instansi: number;
  nama: string;
  alamat: string;
  nomor_telepon: string;
  deskripsi: string;
  created_at?: Date;
  updated_at?: Date;
  created_by?: string;
  updated_by?: any;
  is_deleted?: number;
}