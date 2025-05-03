'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

// Lazy load heavy components
const DataMap = dynamic(() => import('./DataMap'), { ssr: false });

export default function DiseaseGrid({ data }) {
  const [selectedDisease, setSelectedDisease] = useState(null);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th>Disease</th>
                <th>Cases (2025)</th>
                <th>Mortality</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr 
                  key={item.Id} 
                  onClick={() => setSelectedDisease(item)}
                  className="cursor-pointer hover:bg-blue-50"
                >
                  <td>{item.Indicator}</td>
                  <td>{item.Value || 'N/A'}</td>
                  <td>{item.DeathRate || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="sticky top-4 h-fit">
        {selectedDisease ? (
          <DiseaseDetail disease={selectedDisease} />
        ) : (
          <DataMap data={data} />
        )}
      </div>
    </div>
  );
}
