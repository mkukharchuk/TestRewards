import dayjs from 'dayjs';
import { PRIMARY_FORMAT } from 'src/shared/dataFormat';

export const transformDate = (date: string) => dayjs(date).format(PRIMARY_FORMAT);
