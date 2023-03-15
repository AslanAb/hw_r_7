import { Link, Outlet, useLocation } from "react-router-dom";
const GeneralPage = () => {
  const location = useLocation();
  return (
    <>
      <header>
        <Link to="/">General</Link>
        <Link to="/posts">Posts</Link>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
};
export default GeneralPage;
