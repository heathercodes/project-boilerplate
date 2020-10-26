import React, { useContext } from 'react';
import { GlobalContext } from '../providers/GlobalProvider';

export function Main(): React.ReactElement {
  const { data } = useContext(GlobalContext);
  return (
    <ul>
      {data.map((item: string) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default Main;
