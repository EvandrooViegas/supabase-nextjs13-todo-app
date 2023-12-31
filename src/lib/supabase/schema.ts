export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      tasks: {
        Row: {
          created_at: string | null
          description: string | null
          id: number
          status: string | null
          text: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: number
          status?: string | null
          text?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: number
          status?: string | null
          text?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
