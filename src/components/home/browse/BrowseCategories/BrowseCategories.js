import React from "react";
import {
  getCategories,
  getNewReleases,
  getFeatured,
  updateCategoryType,
} from "../../../../store/actions";
import { connect } from "react-redux";
import "./BrowseCategories.scss";

const BrowseCategories = ({
  getCategories,
  getNewReleases,
  getFeatured,
  updateCategoryType,
  viewType,
}) => {
  return (
    <div className="browse-headers">
      <h2 className="header-title">Catégories</h2>
      <div className="browse-headers-title">
        <p
          className={viewType === "New Releases" ? "active" : ""}
          onClick={() => {
            getNewReleases();
            updateCategoryType("New Releases");
          }}
        >
          <h3>Nouveautés</h3>
        </p>
        <p
          className={viewType === "Genres" ? "active" : ""}
          onClick={() => {
            getCategories();
            updateCategoryType("Genres");
          }}
        >
          <h3>Genres</h3>
        </p>
        <p
          className={viewType === "Featured" ? "active" : ""}
          onClick={() => {
            getFeatured();
            updateCategoryType("Featured");
          }}
        >
          <h3>En partenariat</h3>
        </p>
      </div>
    </div>
  );
};

export default connect(
  (state) => ({
    viewType: state.browse.viewType,
  }),
  {
    getCategories,
    getNewReleases,
    updateCategoryType,
    getFeatured,
  }
)(BrowseCategories);
