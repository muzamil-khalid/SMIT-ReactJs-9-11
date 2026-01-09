import { createClient } from '@supabase/supabase-js'

const supabaseUrl =  "https://rmvbzrxiewnefoadfwon.supabase.co  "
const supabaseAnonKey =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtdmJ6cnhpZXduZWZvYWRmd29uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY5ODQyNTYsImV4cCI6MjA4MjU2MDI1Nn0.6hHsPwldihujNd23eYA09MguHjpZujcwlaGa6TAVM_k"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
