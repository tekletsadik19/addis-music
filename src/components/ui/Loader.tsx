import React from 'react';

import {loader}  from '@/utils/loader';
import Image from 'next/image';
import Paragraph from './Paragraph';

const Loader = ({title}) => (
  <div className="w-full flex justify-center items-center flex-col">
    <Image src={loader} alt="loader" className="w-32 h-32 object-contain" />
    <Paragraph size={'default'}>{title || 'Loading'}</Paragraph>
  </div>
);

export default Loader;
