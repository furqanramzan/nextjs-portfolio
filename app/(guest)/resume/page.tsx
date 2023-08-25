import { getRepository } from '@/utils/repository';

function getEducations() {
  return getRepository('education').getMany();
}

function getExperiences() {
  return getRepository('experience').getMany();
}

function getWorkSkills() {
  return getRepository('workSkill').getMany();
}

function getSoftSkills() {
  return getRepository('softSkill').getMany();
}

export default async function Resume() {
  const { items: educations } = await getEducations();
  const { items: experiences } = await getExperiences();
  const { items: workSkills } = await getWorkSkills();
  const { items: softSkills } = await getSoftSkills();

  return (
    <div className="flex w-full flex-col gap-8">
      <h2 className="text-5xl font-medium">RESUME</h2>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <div className="grid gap-8">
            <h6 className="flex flex-wrap items-center gap-x-3 text-4xl font-medium">
              <span className="text-primary-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 48 48"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="4"
                  >
                    <path d="M2 17.4L23.022 9l21.022 8.4l-21.022 8.4L2 17.4Z" />
                    <path
                      strokeLinecap="round"
                      d="M44.044 17.51v9.223m-32.488-4.908v12.442S16.366 39 23.022 39c6.657 0 11.467-4.733 11.467-4.733V21.825"
                    />
                  </g>
                </svg>
              </span>
              Education
            </h6>
            <div className="grid gap-5">
              {educations.map((education) => (
                <div
                  key={education.id}
                  className="rounded-xl bg-gray-100 p-6 hover:bg-primary-200  dark:bg-gray-900 dark:hover:bg-primary-800"
                >
                  <p className="font-light">{education.year}</p>
                  <h6 className="font-semibold">{education.title}</h6>
                  <p>{education.institute}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="grid gap-8">
            <h6 className="flex flex-wrap items-center gap-x-3 text-4xl font-medium">
              <span className="text-primary-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M100 100a12 12 0 0 1 12-12h32a12 12 0 0 1 0 24h-32a12 12 0 0 1-12-12Zm136-32v128a20 20 0 0 1-20 20H40a20 20 0 0 1-20-20V68a20 20 0 0 1 20-20h36v-8a28 28 0 0 1 28-28h48a28 28 0 0 1 28 28v8h36a20 20 0 0 1 20 20ZM100 48h56v-8a4 4 0 0 0-4-4h-48a4 4 0 0 0-4 4ZM44 72v35.23A180.06 180.06 0 0 0 128 128a180 180 0 0 0 84-20.78V72Zm168 120v-58.06A204.27 204.27 0 0 1 128 152a204.21 204.21 0 0 1-84-18.06V192Z"
                  />
                </svg>
              </span>
              Experience
            </h6>
            <div className="grid gap-5">
              {experiences.map((experience) => (
                <div
                  key={experience.id}
                  className="rounded-xl bg-gray-100 p-6 hover:bg-primary-200  dark:bg-gray-900 dark:hover:bg-primary-800"
                >
                  <p className="font-light">{experience.year}</p>
                  <h6 className="font-semibold">{experience.title}</h6>
                  <p>{experience.institute}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="grid gap-8">
            <h6 className="text-4xl font-medium">Work Skills</h6>
            <div className="flex flex-wrap gap-4">
              {workSkills.map((skill) => (
                <span
                  key={skill.id}
                  className="rounded-xl bg-gray-100 px-4 py-2 hover:bg-primary-200  dark:bg-gray-900 dark:hover:bg-primary-800"
                >
                  {skill.title}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="grid gap-8">
            <h6 className="text-4xl font-medium">Soft Skills</h6>
            <div className="flex flex-wrap gap-4">
              {softSkills.map((skill) => (
                <span
                  key={skill.id}
                  className="rounded-xl bg-gray-100 px-4 py-2 hover:bg-primary-200  dark:bg-gray-900 dark:hover:bg-primary-800"
                >
                  {skill.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
