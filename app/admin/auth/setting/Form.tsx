'use client';

import type { Setting } from './repository';
import { update } from './actions';
import { updateSettingSchema } from './validations';
import Upsert from '@/app/admin/auth/components/Upsert';
import Input from '@/components/Input';
import { useSubmitForm } from '@/hooks/submit-form';
import { names } from '@/utils/names';

interface Props {
  item?: Setting;
}

const { singularName, pluralName, href } = names('setting');

export default function Form({ item }: Props) {
  const { submitting, errors, submit } = useSubmitForm({
    callback: update,
    schema: updateSettingSchema,
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
            name: 'name',
            value: item?.name,
            disabled: true,
          }}
        />
      </div>
      <div className="sm:col-span-2">
        <Input
          input={{
            name: 'content',
            errors: errors.content,
            value: item?.content,
          }}
        />
      </div>
    </Upsert>
  );
}
