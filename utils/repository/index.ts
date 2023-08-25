import { AdminPasswordRepository } from '@/app/admin/auth/admin/password-repository';
import { ServiceRepository } from '@/app/admin/auth/service/repository';
import { EducationRepository } from '@/app/admin/auth/education/repository';
import { AdminRepository } from '@/app/admin/auth/admin/repository';
import { ExperienceRepository } from '@/app/admin/auth/experience/repository';

const repositories = {
  admin: new AdminRepository(),
  adminPassword: new AdminPasswordRepository(),
  service: new ServiceRepository(),
  education: new EducationRepository(),
  experience: new ExperienceRepository(),
};

type Repositories = typeof repositories;
type RepositoryKey = keyof Repositories;

export function getRepository<T extends RepositoryKey>(
  key: T,
): Repositories[T] {
  return repositories[key];
}
