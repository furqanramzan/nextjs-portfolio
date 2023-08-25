import { AdminRepository } from './admin-repository';
import { AdminPasswordRepository } from './admin-password-repository';
import { ServiceRepository } from './service-repository';
import { EducationRepository } from './education-repository';

const repositories = {
  admin: new AdminRepository(),
  adminPassword: new AdminPasswordRepository(),
  service: new ServiceRepository(),
  education: new EducationRepository(),
};

type Repositories = typeof repositories;
type RepositoryKey = keyof Repositories;

export function getRepository<T extends RepositoryKey>(
  key: T,
): Repositories[T] {
  return repositories[key];
}
