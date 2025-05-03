import { Suspense } from 'react';
import { getDiseaseData } from '@/services/api';
import DiseaseGrid from '@/components/DataGrid/DiseaseGrid';
import AdUnit from '@/components/AdUnits/Leaderboard';

export default async function DiseasesPage() {
  const { whoData } = await getDiseaseData();

  return (
    <main className="container mx-auto px-4">
      <h1 className="text-4xl font-bold my-8">African Disease Database</h1>
      
      <AdUnit slot="disease_top" />
      
      <Suspense fallback={<DiseaseSkeleton />}>
        <DiseaseGrid data={whoData.value} />
      </Suspense>

      <section className="my-12">
        <h2 className="text-2xl font-semibold mb-4">Trusted Sources</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <SourceCard 
            name="WHO Africa" 
            url="https://www.afro.who.int" 
            logo="/assets/logos/who-africa.png"
          />
          {/* Add CDC, Africa CDC, NIH */}
        </div>
      </section>
    </main>
  );
}

function DiseaseSkeleton() {
  return (
    <div className="space-y-4">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="h-20 bg-gray-100 rounded animate-pulse" />
      ))}
    </div>
  );
}
