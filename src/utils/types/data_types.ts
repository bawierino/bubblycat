import { DataSource, DuplexDataSource } from 'aurumjs';

export type AurumData<T> = T | DataSource<T> | DuplexDataSource<T>;
export type AurumDataSource<T> = DataSource<T> | DuplexDataSource<T>;

export type DataSourcify<T extends Object> = {
	[key in keyof T]: DataSource<T[key]>;
};
