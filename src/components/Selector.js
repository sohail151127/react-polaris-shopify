import {Select} from '@shopify/polaris';
import {useState, useCallback} from 'react';

export function SelectExample() {
  const [selected, setSelected] = useState('Variants - As pic/L/China');

  const handleSelectChange = useCallback((value) => setSelected(value), []);

  const options = [
    {label: 'Variants - As pic/L/China', value: 'Variants - As pic/L/China'},
    {label: 'Yesterday', value: 'yesterday'},
    {label: 'Last 7 days', value: 'lastWeek'},
  ];

  return (
    <Select
      label="Date range"
      options={options}
      onChange={handleSelectChange}
      value={selected}
    />
  );
}