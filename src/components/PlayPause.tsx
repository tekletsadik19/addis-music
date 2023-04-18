'use client'
import Image from 'next/image';
import Link from "next/link";
import { useDispatch } from "react-redux";
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

{/* @ts-expect-error  */}
const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) => (isPlaying && activeSong?.name === song?.name ? (
    <FaPauseCircle
      size={35}
      className="text-gray-300"
      onClick={handlePause}
    />
  ) : (
    <FaPlayCircle
      size={35}
      className="text-gray-300"
      onClick={handlePlay}
    />
  ));
  

export default PlayPause;

