import { useRef } from 'react';
import SomeComponente from './SomeComponente';

const HookeUseImperativeHandle = () => {
  const componentRef = useRef();
  return (
    <div>
      <h2>useImperativeHandle</h2>
      {/* inviando como propriedade */}
      <SomeComponente ref={componentRef} />
      <button onClick={() => componentRef.current.validate()}>Validate</button>
      <hr />
    </div>
  );
};

export default HookeUseImperativeHandle;
