import { Button, Input } from '@components';
import { ArrowDown } from '@svgs';
import { useState } from 'react';

interface VolunteerFormProps {
  events: {
    _id: string;
    date: string;
    title: string;
  }[];
}

const VolunteerForm = ({ events }: VolunteerFormProps) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [position, setPosition] = useState<string>('');

  const mailer = {
    name,
    email,
    phone,
    position,
  };

  return (
    <div className="form volunteer">
      {events.length > 0 ? (
        <form
          onSubmit={(e) => {
            console.log(mailer);
            e.preventDefault();
          }}
        >
          <fieldset className="font-semibold text-featBody">
            <Input
              className="mb-8 block"
              id="fullName"
              label="Full Name"
              type="text"
              required
              func={setName}
            />
            <Input
              className="mb-8 block"
              id="emailAddress"
              label="Email Address"
              type="email"
              delay={50}
              required={!!phone ? false : true}
              func={setEmail}
            />
            <Input
              className="mb-8 block"
              id="phoneNumber"
              label="Phone Number"
              type="tel"
              delay={100}
              required={!!email ? false : true}
              func={setPhone}
            />
            <label
              htmlFor="volunteerFor"
              className="relative mb-12 block"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <span className="mb-5 block">I would like to volunteer for:</span>
              <select
                id="volunteerFor"
                name="volunteerFor"
                className="mt-1 block w-full p-5 appearance-none focus:outline-none text-xl"
                required
                onChange={(e) => {
                  setPosition(e.target.value);
                }}
              >
                <option></option>
                {events.map(({ _id, date, title }) => (
                  <option key={_id} value={`${title} on ${date}`}>
                    {title}
                  </option>
                ))}
              </select>
              <ArrowDown />
            </label>
          </fieldset>
          <div data-aos="fade-up" data-aos-delay="150">
            <Button classes="text-white block lg:inline-block bg-red">
              <button type="submit" className="uppercase">
                Submit
              </button>
            </Button>
          </div>
        </form>
      ) : (
        <h2 className="font-black text-white uppercase tracking-featureHeading text-2xl md:text-3xl lg:text-banner leading-tight lg:leading-tight mb-10">
          There currently aren&apos;t any events scheduled at the moment. Please
          check back soon!
        </h2>
      )}
    </div>
  );
};

export { VolunteerForm };
export default VolunteerForm;
