import { useState, useEffect, useMemo } from 'react';

const HookUseMemo = () => {
  const [number, setNumber] = useState(0);

  const premiumNumbers = ['0', '100', '200'];

  useEffect(() => {
    console.log('Premium numbers foi alterado.');
  }, [premiumNumbers]);

  return (
    <div>
      <h2>useMemo</h2>
    </div>
  );
};

export default HookUseMemo;
