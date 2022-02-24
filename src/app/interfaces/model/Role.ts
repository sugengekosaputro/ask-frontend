export interface Role {
  id_role: number;
  nama: string;
  created_at?: Date;
  updated_at?: Date;
  created_by?: string;
  updated_by?: any;
  is_deleted?: number;
}