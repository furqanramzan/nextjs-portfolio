import type { HTMLAttributes, HTMLInputTypeAttribute } from 'react';

export interface InputItem {
  name: string;
  /**
   * @default true
   */
  showLabel?: boolean;
  label?: string | false;
  /**
   * @default text
   */
  type?: HTMLInputTypeAttribute;
  /**
   * @default $name
   */
  id?: string;
  /**
   * @default Type $name here
   */
  placeholder?: string;
  /**
   * @default true
   */
  required?: boolean;
  /**
   * @default 0
   */
  min?: number;
  max?: number;
  /**
   * @default false
   */
  multiple?: boolean;
  value?: string | number;
  errors?: string[];
  class?: HTMLAttributes<HTMLInputElement>['className'];
}

interface Props {
  input: InputItem;
}

export default function AppInput({ input }: Props) {
  const name = input.name;
  const min = input.min || 0;
  const value = input.value || '';
  const overrideClass = input.class || '';
  const multiple = input.multiple || false;
  const id = input.id || name;
  const type = input.type || 'text';
  const label = input.label || name.charAt(0).toUpperCase() + name.slice(1);
  const showLabel = input.showLabel || true;
  const required = input.required || true;
  const placeholder = input.placeholder || `Type ${name} here`;
  const errors = input.errors || [];
  const hasError = errors.length > 0;

  return (
    <div>
      {showLabel && (
        <label
          htmlFor={id}
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        min={min}
        name={name}
        required={required}
        placeholder={placeholder}
        defaultValue={value}
        multiple={multiple}
        max={input.max}
        aria-invalid={hasError}
        className={`block w-full rounded-lg border p-2.5 text-sm ${
          hasError
            ? 'border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-500 dark:bg-gray-700 dark:text-red-500 dark:placeholder-red-500'
            : 'focus:border-primary-600 focus:ring-primary-600 dark:focus:border-primary-500 dark:focus:ring-primary-500 border-gray-300 bg-gray-50 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
        } ${overrideClass}`}
        type={type}
      />
      {hasError && (
        <ul className="mt-2 text-sm text-red-600 dark:text-red-500">
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
