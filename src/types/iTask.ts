import type { Database } from "@/lib/supabase/schema";
export type iTask = {

} & Database["public"]["Tables"]["tasks"]["Row"] | null