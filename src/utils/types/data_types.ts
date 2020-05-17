import { DataSource, DuplexDataSource } from 'aurumjs';

export type AurumData<T> = T | DataSource<T> | DuplexDataSource<T>;
