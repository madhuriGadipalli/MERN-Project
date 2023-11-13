import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
// import { NAVIGATE_TO_PAGE } from "../Redux/actions/navigateToPage";
import { useSelector } from "react-redux";

export const NavigatePage = () => {
  const navigate = useNavigate();
  const page = useSelector((state) => state.Commons.page);
  const previousPageRef = useRef();

  useEffect(() => {
    if (page && page !== previousPageRef.current) {
      navigate(page);
    }
  }, [page]);

  return null;
};
