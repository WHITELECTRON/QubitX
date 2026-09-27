// routes/AppRoutes.tsx
import { createBrowserRouter } from "react-router-dom";
// import MainLayout from "../layouts/MainLayout";
import LandingPage from "../pages/LandingPage";
// import OnboardingPage from "../pages/OnboardingPage";
// import DashboardPage from "../pages/DashboardPage";
// import CoursesPage from "../pages/CoursesPage";
// // ...other imports

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
//   {
//     path: "/onboarding",
//     element: <OnboardingPage />,
//   },
//   {
//     element: <MainLayout />,        // parent route — renders shared shell
//     children: [                      // child routes render inside <Outlet />
//       { path: "/dashboard", element: <DashboardPage /> },
//       { path: "/courses", element: <CoursesPage /> },
//       { path: "/lesson", element: <LessonPage /> },
//       { path: "/quantum-lab", element: <QuantumLabPage /> },
//       { path: "/results", element: <ResultsPage /> },
//       { path: "/challenges", element: <ChallengesPage /> },
//       { path: "/community", element: <CommunityPage /> },
//       { path: "/progress", element: <ProgressPage /> },
//       { path: "/profile", element: <ProfilePage /> },
//     ],
//   },
]);

export default router;