<!-- is file ka naam: supabase-client.js (plain JS file, HTML nahi) -->
<script>
// Supabase client config – yahi pe URL/KEY change karna hai
const SUPABASE_URL = 'https://tghtgygjawhrcgtwhrej.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnaHRneWdqYXdocmNndHdocmVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU5OTM0MjksImV4cCI6MjA4MTU2OTQyOX0.Q-Ht_IFcPZPIHO5905o70EDya2yFdVP-9LjDmjkle38';

// Global Supabase client
window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Get current user (or null)
window.getCurrentUser = async function () {
  const { data, error } = await window.supabaseClient.auth.getUser();
  if (error || !data?.user) return null;
  return data.user;
};

// Require auth on a page; redirect if not logged in
window.requireAuth = async function (redirectToLogin = 'index.html') {
  const user = await window.getCurrentUser();
  if (!user) {
    window.location.href = redirectToLogin;
    return null;
  }
  return user;
};

// Logout helper
window.logoutAndRedirect = async function (redirectTo = 'index.html') {
  try {
    await window.supabaseClient.auth.signOut();
  } catch (e) {
    console.error('Logout error:', e);
  }
  window.location.href = redirectTo;
};
</script>
