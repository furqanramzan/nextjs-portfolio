import Form from './Form';
import { getSettings } from '@/utils/settings';

export default async function Contact() {
  const settings = await getSettings(['phone', 'email']);

  return (
    <div className="flex w-full flex-col gap-8">
      <h2 className="text-5xl font-medium">CONTACT</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex gap-x-3 rounded-xl bg-gray-100 p-6  hover:bg-primary-200 dark:bg-gray-900 dark:hover:bg-primary-800">
          <span className="text-primary-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <g fill="currentColor">
                <path d="m15.556 14.548l-.455.48s-1.083 1.139-4.038-1.972c-2.955-3.111-1.872-4.25-1.872-4.25l.287-.303c.706-.744.773-1.938.156-2.81L8.374 3.91C7.61 2.83 6.135 2.688 5.26 3.609L3.691 5.26c-.433.457-.723 1.048-.688 1.705c.09 1.68.808 5.293 4.812 9.51c4.247 4.47 8.232 4.648 9.861 4.487c.516-.05.964-.329 1.325-.709l1.42-1.496c.96-1.01.69-2.74-.538-3.446l-1.91-1.1c-.806-.463-1.787-.327-2.417.336ZM13.26 1.88a.751.751 0 0 1 .861-.62c.025.005.107.02.15.03c.085.018.204.048.352.09c.297.087.712.23 1.21.458c.996.457 2.321 1.256 3.697 2.631c1.376 1.376 2.175 2.702 2.632 3.698c.228.498.37.912.457 1.21a5.727 5.727 0 0 1 .113.454l.005.031a.765.765 0 0 1-.617.878a.75.75 0 0 1-.86-.617a2.82 2.82 0 0 0-.081-.327a7.395 7.395 0 0 0-.38-1.004c-.39-.85-1.092-2.024-2.33-3.262c-1.237-1.238-2.412-1.939-3.262-2.329a7.394 7.394 0 0 0-1.003-.38a5.749 5.749 0 0 0-.318-.08a.759.759 0 0 1-.627-.861Z" />
                <path
                  fillRule="evenodd"
                  d="M13.486 5.33a.75.75 0 0 1 .927-.516l-.206.721l.206-.72h.003l.003.001l.008.002l.02.006l.056.02a5.028 5.028 0 0 1 .767.373c.489.29 1.157.77 1.942 1.556c.785.785 1.266 1.453 1.556 1.942c.145.245.241.444.303.59a2.969 2.969 0 0 1 .09.233l.005.02l.003.008v.003l.001.001s0 .002-.72.208l.72-.206a.75.75 0 0 1-1.439.422l-.003-.01a3.67 3.67 0 0 0-.25-.504c-.224-.377-.627-.947-1.327-1.647c-.7-.7-1.269-1.102-1.646-1.325a3.662 3.662 0 0 0-.504-.25l-.01-.004a.75.75 0 0 1-.505-.925Z"
                  clipRule="evenodd"
                />
              </g>
            </svg>
          </span>
          <div className="flex flex-col gap-3">
            <h6 className="text-xl font-medium">Phone:</h6>
            <div>
              <p>{settings.phone}</p>
            </div>
          </div>
        </div>
        <div className="flex gap-x-3 rounded-xl bg-gray-100 p-6  hover:bg-primary-200 dark:bg-gray-900 dark:hover:bg-primary-800">
          <span className="text-primary-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m4 6l8 5l8-5H4Zm0 14q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v4.35l-1 1l-1 1V8l-7.475 4.675q-.075.05-.525.15q-.125 0-.263-.037t-.262-.113L4 8v10h5.15l2 2H4Zm8-6Zm0-3Zm0 1.875Zm3.95 6.325l4.95-4.95q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-5.65 5.65q-.3.3-.7.3t-.7-.3l-2.85-2.85q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l2.15 2.15Z"
              />
            </svg>
          </span>
          <div className="flex flex-col gap-3">
            <h6 className="text-xl font-medium">Email:</h6>
            <div>
              <p>{settings.email}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 rounded-3xl bg-gray-100 px-5 py-10 dark:bg-gray-900 xl:px-10">
        <p>
          I am always open to discussing{' '}
          <b>new projects, opportunities in tech world, partnerships</b> and
          more so <b>mentorship</b>.
        </p>
        <Form />
      </div>
    </div>
  );
}
