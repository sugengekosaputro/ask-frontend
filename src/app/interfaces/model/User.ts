export interface User {
  id: number;
  username: string;
  email: string;
  role: number;
  email_verified_at?: any;
  created_at?: Date;
  updated_at?: Date;
  created_by?: any;
  updated_by?: any;
  is_deleted?: number;
}