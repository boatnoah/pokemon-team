import { Outlet, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Layout = () => {
  return (
    <div className="text-center">
      <nav>
        <ul>
          <Button variant="link" key="home-button">
            <Link className="text-lg" to="/">
              Home
            </Link>
          </Button>
          <Button variant="link" key="create-button">
            <Link className="text-lg" to="/create">
              Create Pokemon
            </Link>
          </Button>
          <Button variant="link" key="gallery-button">
            <Link className="text-lg" to="/gallery">
              View Gallery
            </Link>
          </Button>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
