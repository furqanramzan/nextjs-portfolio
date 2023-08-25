'use client';

import type { SoftSkill } from './repository';
import { upsert } from './actions';
import { upsertSoftSkillSchema } from './validations';
import Upsert from '@/app/admin/auth/components/Upsert';
import Input from '@/components/Input';
import { useSubmitForm } from '@/hooks/submit-form';
import { names } from '@/utils/names';

interface Props {
  item?: SoftSkill;
}

const { singularName, pluralName, href } = names('softSkill');

export default function Form({ item }: Props) {
  const { submitting, errors, submit } = useSubmitForm({
    callback: upsert,
    schema: upsertSoftSkillSchema,
  });

  return (
    <Upsert
      onSubmit={submit}
      singularName={singularName}
      pluralName={pluralName}
      href={href}
      submitting={submitting}
    >
      <Input
        input={{
          name: 'id',
          type: 'hidden',
          value: item?.id,
          showLabel: false,
        }}
      />
      <div className="sm:col-span-2">
        <Input
          input={{
            name: 'title',
            errors: errors.title,
            value: item?.title,
          }}
        />
      </div>
    </Upsert>
  );
}
