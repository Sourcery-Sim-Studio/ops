//---- comment out original landing page export 07/19/25 ----
//import Landing from './(landing)/landing'
//
//export default Landing
//
//
//New edits: 07/19/25:
//
// ---- redirect root to /login 07/19/25 ----
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/login');
  return null;
}
