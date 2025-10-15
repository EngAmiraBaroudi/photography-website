import React from 'react';

const UploadPhoto = () => {
  return (
    <div className="upload-section">
      <h3>Upload New Photos</h3>
      <div className="upload-area">
        <input type="file" multiple />
        <button>Upload</button>
      </div>
    </div>
  );
};

export default UploadPhoto;