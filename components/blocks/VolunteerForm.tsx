import { Button, Input, LinkObject } from '@components';
import { ArrowDown } from '@svgs';
import { useState } from 'react';
import Axios from 'axios';
import ClipLoader from 'react-spinners/ClipLoader';
import { colors } from '@styles';

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
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const mailer = {
    recipient: 'hayniescornerartdistrict@gmail.com',
    subject: 'HCAD Volunteer Form',
    name,
    email,
    phone,
    position,
  };

  const postForm = () => {
    Axios.post('/api/mailer', mailer)
      .then((response) => {
        console.log('response', response);
        setSubmitted(true);
        setLoading(false);
      })
      .catch((error) => {
        Axios.post('/api/errorAlert', error)
          .then((response) => {
            console.log('response', response);
          })
          .catch((err) => {
            console.log('error', err);
          });
        console.log('error', error);
        setSubmitted(false);
        setSubmitError(true);
        setLoading(false);
      });
  };

  return (
    <div className="form volunteer">
      {loading && (
        <div className="flex justify-center py-20">
          <ClipLoader size={150} color={colors.white} />
        </div>
      )}
      {!loading && !submitted && submitError && (
        <h2 className="font-black mt-20 text-darkOrange tracking-featureHeading text-2xl md:text-3xl leading-tight lg:leading-tight mb-10">
          Looks like something went wrong. Don&apos;t worry, the developer has
          been notified and will correctly the problem soon. Please try again at
          a later date or send email directly to us
          <LinkObject classes="underline hover:text-color9" url="/contact">
            HERE!
          </LinkObject>
        </h2>
      )}
      {!loading && submitted && !submitError && (
        <h2 className="font-black mt-20 text-white  tracking-featureHeading text-2xl md:text-6xl leading-tight lg:leading-tight mb-10">
          <span className="inline-block mb-5">
            Thank you for filling out the volunteer&nbsp;form!
          </span>
          We will reach out to you as soon&nbsp;as&nbsp;we&nbsp;can!
        </h2>
      )}
      {!loading && events.length > 0 && !submitted && !submitError && (
        <form
          onSubmit={(e) => {
            setLoading(true);
            e.preventDefault();
            postForm();
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
              className="fader relative mb-12 block"
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
          <div className="fader" data-aos="fade-up" data-aos-delay="150">
            <Button classes="text-white block lg:inline-block bg-darkOrange">
              <button type="submit" className="uppercase">
                Submit
              </button>
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export { VolunteerForm };
export default VolunteerForm;
