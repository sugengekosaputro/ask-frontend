export interface Member {
  id_member: number;
  id_user: number;
  nama: string;
  telepon: string;
  member_type: number;
  created_at?: Date;
  updated_at?: Date;
  created_by?: string;
  updated_by?: any;
  is_deleted?: number;
}