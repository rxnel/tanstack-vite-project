import { createClient } from "@supabase/supabase-js";
import type { Database } from "../../database.types";

// Get Supabase URL and key from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error(
    "Missing Supabase environment variables. Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env file.",
  );
}

const supabase = createClient<Database>(
  supabaseUrl as string,
  supabaseKey as string,
);

export default supabase;
