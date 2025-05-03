'use client';

import { useMemo } from 'react';
import dynamic from 'next/dynamic';

const OutbreakMap = dynamic(
  () => import('@/components/Maps/OutbreakMap'),
  { 
    ssr: false,
    loading: () => <div className="h-96 bg-gray-100 rounded" />
  }
);

export default function AfricaOutbreakMap() {
  const geoData = useMemo(() => ({
    type: 'FeatureCollection',
    features: [] // Would contain GeoJSON data
  }), []);

  return (
    <div className="relative h-[600px] w-full">
      <OutbreakMap data={geoData} />
      <div className="absolute bottom-4 left-4 bg-white p-2 rounded shadow">
        <h4 className="font-bold">Live Outbreaks</h4>
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span>Active transmission</span>
        </div>
      </div>
    </div>
  );
}
