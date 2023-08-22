import { AdminRepository } from './admin-repository';
import { AdminPasswordRepository } from './admin-password-repository';
import { ServiceRepository } from './service-repository';

const repositories = {
  admin: new AdminRepository(),
  service: new ServiceRepository(),
  adminPassword: new AdminPasswordRepository(),
};

type Repositories = typeof repositories;
type RepositoryKey = keyof Repositories;

export function getRepository<T extends RepositoryKey>(
  key: T,
): Repositories[T] {
  return repositories[key];
}
