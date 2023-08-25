'use client';

import type { Project } from './repository';
import { upsert } from './actions';
import { upsertProjectSchema } from './validations';
import Upsert from '@/app/admin/auth/components/Upsert';
import Input from '@/components/Input';
import { useSubmitForm } from '@/hooks/submit-form';
import { names } from '@/utils/names';

interface Props {
  item?: Project;
}

const { singularName, pluralName, href } = names('project');

export default function Form({ item }: Props) {
  const { submitting, errors, submit } = useSubmitForm({
    callback: upsert,
    schema: upsertProjectSchema,
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
      <div className="sm:col-span-2">
        <Input
          input={{
            name: 'category',
            errors: errors.category,
            value: item?.category,
          }}
        />
      </div>
      <div className="sm:col-span-2">
        <Input
          input={{
            name: 'image',
            type: 'file',
            required: !item,
            errors: errors.image,
          }}
        />
      </div>
    </Upsert>
  );
}
