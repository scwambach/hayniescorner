import { Button, Input, Container, LinkObject } from '@components';
import { useState } from 'react';
import Axios from 'axios';
import ClipLoader from 'react-spinners/ClipLoader';
import { breakpoints, colors } from '@styles';

interface ContactFormProps {
  formId: string;
  delay?: number;
  bgColor?: string;
  heading?: string;
  buttonColor?: string;
}

const ContactForm = ({
  bgColor = colors.color6,
  buttonColor,
  heading,
  delay = 0,
  formId,
}: ContactFormProps) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const mailer = {
    recipient: 'hayniescornerartdistrict@gmail.com',
    subject: 'HCAD Contact Form',
    name,
    email,
    message,
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
    <section
      id={formId}
      className="form contact text-black py-16 lg:py-sectionPadding bg-seaFoam"
      style={{
        backgroundColor: bgColor,
      }}
    >
      <Container maxWidth={breakpoints.wlg}>
        <h4
          className="fader uppercase font-black text-sectionHeading tracking-sectionHeading leading-base text-center text-white mb-10"
          data-aos="fade-up"
          data-aos-anchor={`#${formId}`}
        >
          {heading}
        </h4>
        {loading && (
          <div className="flex justify-center py-20">
            <ClipLoader size={150} color={colors.white} />
          </div>
        )}
        {!loading && !submitted && submitError && (
          <h2 className="font-black mt-20 text-darkOrange tracking-featureHeading text-2xl md:text-3xl leading-tight lg:leading-tight mb-10">
            Looks like something went wrong. Don&apos;t worry, the developer has
            been notified and will correct the problem soon. Please try again at
            a later date or send email directly to us&nbsp;
            <LinkObject classes="underline hover:text-color9" url="/contact">
              HERE!
            </LinkObject>
          </h2>
        )}
        {!loading && submitted && !submitError && (
          <h2 className="font-black mt-20 text-white  tracking-featureHeading text-2xl md:text-6xl leading-tight lg:leading-tight mb-10">
            <span className="block mb-5">
              Thank you for getting in touch with us!
            </span>
            We will reach out to you as soon&nbsp;as&nbsp;we&nbsp;can!
          </h2>
        )}
        {!loading && !submitted && !submitError && (
          <form
            onSubmit={(e) => {
              setLoading(true);
              e.preventDefault();
              postForm();
            }}
          >
            <fieldset className="font-semibold text-featBody">
              <Input
                formId={formId}
                className="mb-8 block"
                id="fullName"
                label="Full Name"
                type="text"
                required
                func={setName}
              />
              <Input
                formId={formId}
                className="mb-8 block"
                id="emailAddress"
                label="Email Address"
                type="email"
                delay={50}
                required={true}
                func={setEmail}
              />
              <Input
                formId={formId}
                className="mb-16 block"
                id="message"
                label="Message"
                type="textarea"
                delay={100}
                required={true}
                func={setMessage}
              />
            </fieldset>
            <div
              className="fader text-center"
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-anchor={`#${formId}`}
            >
              <Button
                classes={`w-full max-w-sm block md:inline-block mx-auto ${
                  buttonColor || 'bg-darkOrange'
                } text-white block lg:inline-block`}
              >
                <button type="submit" className="uppercase">
                  Send Message
                </button>
              </Button>
            </div>
          </form>
        )}
      </Container>
    </section>
  );
};

export { ContactForm };
export default ContactForm;
