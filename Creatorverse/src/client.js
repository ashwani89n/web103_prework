import { createClient } from '@supabase/supabase-js';

const URL = 'https://wjkpiqtdpqghitdcfymm.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indqa3BpcXRkcHFnaGl0ZGNmeW1tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ1MjIzMDcsImV4cCI6MjA0MDA5ODMwN30.noWzTXsvf52wqhwDxEEcskV0vjGx3N_DXxjZGpxQZv8';

export const supabase = createClient(URL, API_KEY);