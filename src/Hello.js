import React, { useCallback } from "react";
import { useCountRenders } from "./useCountRenders";

// Example one
export const Hello = React.memo(({ increment }) => {
  useCountRenders();

  return <button onClick={() => increment(5)}>hello</button>;
});

// Example Two
export const Wrap = () => {
  const [isChecked, setIsChecked] = React.useState(false);
  const toggleChecked = useCallback(
                            () => {
                              setIsChecked(!isChecked)
                            },[isChecked]);
  console.log('Wrap is renderd!');
  return (
    <div>
      <p>Gia tri value la: {isChecked.toString()}</p>
      <Checkbox value={isChecked} toggleClick={toggleChecked} />
    </div>
  );
};

const Checkbox = React.memo(({ value, toggleClick }) => {
  console.log('Checkbox is renderd!');
  return (
    <div style={{ cursor: 'pointer' }} onClick={toggleClick}>
      {value ? 'have checked' : 'Not Checked'}
    </div>
  );
});
