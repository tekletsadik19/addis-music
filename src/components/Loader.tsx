import React from 'react';

import { Loader } from 'lucide-react';
import Paragraph from './ui/Paragraph';

const Loader = ({ title }) => (
  <div className="w-full flex justify-center items-center flex-col">
    Loader
    <Paragraph className="font-bold text-2xl text-white mt-2">{title || 'Loading'}</Paragraph>
  </div>
);

export default Loader;
