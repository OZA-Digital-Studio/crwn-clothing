import react from 'react';
import {connect} from 'react-redux';

import './collection.styles.scss';

import CollectionItem from '../../components/collection-item/collection-item.component';

import {selectCollection} from '../../redux/shop/shop.selectors';

const CollectionPage = ({collection}) => (
    <div className="collection-page">
        <h2>COLLECTION PAGE</h2>
    </div>
);

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);