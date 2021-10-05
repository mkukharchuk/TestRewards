import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { PRIMARY_FORMAT } from 'src/shared/dataFormat';

dayjs.extend(relativeTime);

export const transformDate = (date: string) => {
  let transformedTime = '';
  const diffFromNow = dayjs().diff(dayjs(date), 'hours');
  if (diffFromNow < 24) {
    transformedTime = dayjs().to(dayjs(date));
  } else transformedTime = dayjs(date).format(PRIMARY_FORMAT);

  return transformedTime;
};
