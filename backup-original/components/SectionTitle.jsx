import React from 'react';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-neutral-900 mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm text-neutral-500">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;