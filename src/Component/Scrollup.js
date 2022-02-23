import { useEffect } from "react";
import { useLocation } from "react-router";

const Scrollup = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  console.log(pathname);
  return null;
};
export default Scrollup;