import React from "react";
import {
  getFeatured,
  getNewReleases,
  getCategories,
  updateCategoryType,
  selectViewType,
} from "../../../../store/browse/browseSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import "./BrowseCategories.scss";

const BrowseCategories = () => {
  const dispatch = useAppDispatch();
  const viewType = useAppSelector(selectViewType);
  return (
    <div className="browse-headers">
      <h2 className="header-title">Catégories</h2>
      <div className="browse-headers-title">
        <p
          className={viewType === "New Releases" ? "active" : ""}
          onClick={() => {
            dispatch(getNewReleases());
            dispatch(updateCategoryType("New Releases"));
          }}
        >
          Nouveautés
        </p>
        <p
          className={viewType === "Genres" ? "active" : ""}
          onClick={() => {
            dispatch(getCategories());
            dispatch(updateCategoryType("Genres"));
          }}
        >
          Genres
        </p>
        <p
          className={viewType === "Featured" ? "active" : ""}
          onClick={() => {
            dispatch(getFeatured());
            dispatch(updateCategoryType("Featured"));
          }}
        >
          En partenariat
        </p>
      </div>
    </div>
  );
};

export default BrowseCategories;
