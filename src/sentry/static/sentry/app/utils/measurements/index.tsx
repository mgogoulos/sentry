import {getDuration} from 'app/utils/formatters';
import {Vital} from 'app/utils/performance/vitals/types';

export function formattedValue(record: Vital | undefined, value: number): string {
  if (record && record.type === 'duration') {
    return getDuration(value / 1000, 3);
  }

  return value.toFixed(3);
}
