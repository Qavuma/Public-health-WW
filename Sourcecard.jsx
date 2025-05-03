import Image from 'next/image';

export function SourceCard({ name, url, logo }) {
  return (
    <a 
      href={url} 
      target="_blank"
      rel="noopener noreferrer"
      className="border rounded-lg p-4 hover:shadow-md transition-all"
    >
      <div className="relative h-16 w-full">
        <Image
          src={logo}
          alt={name}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 200px"
          priority={false}
        />
      </div>
      <p className="mt-2 text-center text-sm font-medium">{name}</p>
    </a>
  );
}
