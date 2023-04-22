import Image from 'next/image';
import React from 'react';

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="flex-1 flex items-center justify-start">
    <div className={`hidden sm:block mr-4`}>
      <Image 
        src={activeSong.album?.images[0].url ? activeSong.album.images[0].url:"/addis-music.png"}
        alt="cover art" className="rounded-full" 
        width={80} height={80}
      />
    </div> 
    <div className="w-[50%]">
      <p className="truncate text-white font-bold text-lg">
        {activeSong?.name ? activeSong?.name : 'No active Song'}
      </p>
    </div>
  </div>
);

export default Track;
