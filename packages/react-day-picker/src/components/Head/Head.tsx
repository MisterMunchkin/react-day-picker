import React from 'react';

import { HeadRow } from 'components/HeadRow';
import { useDayPicker } from 'contexts/DayPicker';

/** Render the table head. */
export function Head(): JSX.Element {
  const { classNames, styles } = useDayPicker();

  return (
    <thead style={styles.head} className={classNames.head}>
      <HeadRow />
    </thead>
  );
}
