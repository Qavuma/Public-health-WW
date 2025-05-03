'use client';

import { useEffect } from 'react';

export default function AdUnit({ slot }) {
  useEffect(() => {
    // Load Google AdSense in 2025
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div key={slot} className="w-full my-8">
      <ins className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-YOUR_PUB_ID"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
