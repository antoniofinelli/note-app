import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'
// <<url.hostname not implemented fix>> https://github.com/supabase/supabase/issues/8464


const supabaseUrl = 'https://jexvzmhqsrdhhmeltket.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpleHZ6bWhxc3JkaGhtZWx0a2V0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxOTEyMDgsImV4cCI6MTk5Mjc2NzIwOH0.xAyN0gktoFgUNnntYhHFzchrsggbkvTd6ltfrH8qYRo'
export const supabase = createClient(supabaseUrl, supabaseKey)