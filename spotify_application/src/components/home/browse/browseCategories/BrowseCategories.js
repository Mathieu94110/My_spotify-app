import React from 'react';
import {
  getCategories,
  getNewReleases,
  getFeatured,
  updateCategoryType,
} from '../../../../store/actions';
import { connect } from 'react-redux';
import './BrowseCategories.scss';

const BrowseCategories = ({
  getCategories,
  getNewReleases,
  getFeatured,
  updateCategoryType,
  viewType,
}) => {
  return (
    <div className="section-title">
      <div>
        <h3 className="header-title">Catégories: </h3>
        <div className="browse-headers">
          <p
            className={viewType === 'New Releases' ? 'active' : ''}
            onClick={() => {
              getNewReleases();
              updateCategoryType('New Releases');
            }}
          >
            New Releases
          </p>
          <p
            className={viewType === 'Genres' ? 'active' : ''}
            onClick={() => {
              getCategories();
              updateCategoryType('Genres');
            }}
          >
            Genres
          </p>
          <p
            className={viewType === 'Featured' ? 'active' : ''}
            onClick={() => {
              getFeatured();
              updateCategoryType('Featured');
            }}
          >
            Featured
          </p>
        </div>
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
