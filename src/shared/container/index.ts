import { container } from 'tsyringe';
import '@modules/users/providers';
import '../providers';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';
container.registerSingleton<IAppointmentsRepository>(
    'AppointmentsRepository', 
    AppointmentsRepository
);
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
container.registerSingleton<IUsersRepository>(
    'UsersRepository', 
    UsersRepository
);
import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';
container.registerSingleton<IUserTokensRepository>(
    'UserTokensRepository', 
    UserTokensRepository
);
import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';
import NotificationsRepository from '@modules/notifications/infra/typeorm/repositories/NotificationsRepository';
container.registerSingleton<INotificationsRepository>(
    'NotificationsRepository', 
    NotificationsRepository
);
