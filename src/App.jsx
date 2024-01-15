import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/auth-context";
import Header from "./components/layout/Header";
import FrontPage from "./pages/FrontPage";

import PostDetailPage from "./pages/PostDetailPage";
import ProfilePage from "./pages/ProfilePage";
import PostAddNewPage from "./pages/PostAddnewPage";
import ProfileUser from "./components/profile/ProfileUser";
import SavingPostPage from "./pages/SavingPostPage";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header></Header>
                <FrontPage></FrontPage>
              </>
            }
          ></Route>
          <Route
            path="/post-addnew"
            element={
              <>
                <Header></Header>
                <PostAddNewPage></PostAddNewPage>
              </>
            }
          ></Route>
          <Route
            path="/post"
            element={
              <>
                <Header></Header>
                <PostDetailPage></PostDetailPage>
              </>
            }
          ></Route>
          <Route
            path="/user/:slug"
            element={
              <>
                <Header></Header>
                <ProfilePage></ProfilePage>
              </>
            }
          ></Route>
          <Route
            path="/profile-user"
            element={
              <>
                <Header></Header>
                <ProfileUser></ProfileUser>
              </>
            }
          ></Route>
          <Route
            path="/user/saved"
            element={
              <>
                <Header></Header>
                <SavingPostPage></SavingPostPage>
              </>
            }
          ></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
