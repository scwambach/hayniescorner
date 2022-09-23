import React from 'react';
import { appUrl, PreviewModule } from '.';

export const WebPreview = () => {
  return (
    <div className="container" style={{ height: '100%' }}>
      <iframe
        title="Preview"
        src="https://website.com"
        frameBorder={0}
        style={{ width: '100%', height: '100%', overflow: 'hidden' }}
      />
    </div>
  );
};
