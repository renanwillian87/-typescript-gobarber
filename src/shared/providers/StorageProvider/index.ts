import { container } from 'tsyringe';
import uploadConfig from '@config/upload';
import IStorageProvider from './models/IStorageProvider';
import DiskStorageProvider from './implementations/DiskStorageProvider';
import AWSS3StorageProvider from './implementations/AWSS3StorageProvider';
const providers = {
    disk: DiskStorageProvider,
    s3: AWSS3StorageProvider
}
container.registerSingleton<IStorageProvider>(
    'StorageProvider',
    providers[uploadConfig.driver]
);
