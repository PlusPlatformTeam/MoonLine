import React from 'react';
import Data from './data';
import './gallery.css';
import GalleryItem from './GalleryItem';
import _ from 'lodash';

const Gallery = ({ activeFilter }) => {
    const galleryItems = Data();
    
    const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

    const chunks = _.chunk(filteredItems, 3);

    return (
      <div className="grid grid-cols-1 gap-4 px-4 overflow-hidden lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">
        {chunks.map((chunk, index) => (
          <div key={index} className="grid gap-4">
            {chunk.map((item, i) => (
              <GalleryItem key={i} item={item} />
            ))}
          </div>
        ))}
      </div>
    );
  };

export default Gallery;