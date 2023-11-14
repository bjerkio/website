import { beforeEach, describe, expect, it, vi } from 'vitest';
import { formatDate, formatDateRange } from '../utils';

describe('formatDate', () => {
  beforeEach(() => {
    vi.useFakeTimers({
      now: new Date('2023-11-14 11:00'),
    });
  });
  it('should format date', () => {
    expect(formatDate(new Date('2023-11-14 11:00'))).toBe(
      'tirsdag 14. november kl. 11.00',
    );

    expect(formatDate(new Date('2024-11-14 11:00'))).toBe(
      'torsdag 14. november 2024 kl. 11.00',
    );

    expect(formatDate(new Date('2023-11-14'), false)).toBe(
      'tirsdag 14. november',
    );
  });

  it('should format date range', () => {
    expect(
      formatDateRange(
        new Date('2023-11-14 11:00'),
        new Date('2023-11-14 14:00'),
      ),
    ).toStrictEqual({
      dateFrom: 'tirsdag 14. november kl. 11.00',
      dateTo: '14.00',
    });

    expect(
      formatDateRange(
        new Date('2023-11-14 11:00'),
        new Date('2023-11-15 14:00'),
      ),
    ).toStrictEqual({
      dateFrom: 'tirsdag 14. november kl. 11.00',
      dateTo: 'onsdag 15. november kl. 14.00',
    });

    expect(
      formatDateRange(
        new Date('2023-11-14 11:00'),
        new Date('2024-11-15 14:00'),
      ),
    ).toStrictEqual({
      dateFrom: 'tirsdag 14. november 2023 kl. 11.00',
      dateTo: 'fredag 15. november 2024 kl. 14.00',
    });

    expect(
      formatDateRange(
        new Date('2024-11-14 11:00'),
        new Date('2024-11-15 14:00'),
      ),
    ).toStrictEqual({
      dateFrom: 'torsdag 14. november kl. 11.00',
      dateTo: 'fredag 15. november 2024 kl. 14.00',
    });
  });
});
