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
    <div className="browse-headers">
      <h2 className="header-title">Catégories</h2>
      <div className="browse-headers-title">
        <p
          className={viewType === 'New Releases' ? 'active' : ''}
          onClick={() => {
            getNewReleases();
            updateCategoryType('New Releases');
          }}
        >
          Nouveautés
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
          En partenariat
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
