import { unstable_cache } from 'next/cache';

const fetchWHOData = unstable_cache(
  async () => {
    const res = await fetch('https://ghoapi.azureedge.net/api/indicators');
    return res.json();
  },
  ['who-data'],
  { revalidate: 3600 } // 1 hour cache
);

export async function getDiseaseData() {
  const [whoData, africaCDC] = await Promise.all([
    fetchWHOData(),
    fetch('https://africacdc.org/api/diseases'),
  ]);
  
  return { whoData, africaCDC };
}
