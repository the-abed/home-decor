import React from 'react';
import { DotLoader } from 'react-spinners';

const LoaderSpinner = () => {
    return (
         <div className="fixed inset-0 flex items-center justify-center z-50">
            <DotLoader></DotLoader>
      {/* <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div> */}
    </div>
    );
};

export default LoaderSpinner;