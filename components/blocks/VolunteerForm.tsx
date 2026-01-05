"use client";
import { useState } from "react";
import Axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import { colors } from "@/styles";
import { Input } from "../modules/Input";
import { LinkObject } from "../modules/LinkObject";
import { Button } from "../modules/Button";

interface VolunteerFormProps {
  formId: string;
  events: {
    _id: string;
    title: string;
  }[];
}

const VolunteerForm = ({ events, formId }: VolunteerFormProps) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [event, setEvent] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<boolean>(false);
  const [eventError, setEventError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const mailer = {
    recipient: "hayniescornerartdistrict@gmail.com",
    subject: "HCAD Volunteer Form",
    name,
    email,
    phone,
    events: event,
  };

  const postForm = () => {
    Axios.post("/api/mailer", mailer)
      .then((response) => {
        console.log("response", response);
        setSubmitted(true);
        setLoading(false);
      })
      .catch((error) => {
        Axios.post("/api/errorAlert", error)
          .then((response) => {
            console.log("response", response);
          })
          .catch((err) => {
            console.log("error", err);
          });
        console.log("error", error);
        setSubmitted(false);
        setSubmitError(true);
        setLoading(false);
      });
  };

  const checkerCheck = () => {
    const allChecked = [];
    const checkboxes = document.querySelectorAll(
      "input[type='checkbox']:checked"
    );

    for (let index = 0; index < checkboxes.length; index++) {
      const element = checkboxes[index];
      const label = element.parentElement?.firstElementChild?.innerHTML;
      if (label) {
        allChecked.push(label);
      }
    }
    setEvent(allChecked.join(", "));
    setEventError(false);
  };

  return (
    <div className="form volunteer">
      {loading && (
        <div className="flex justify-center py-20">
          <ClipLoader size={150} color={colors.white} />
        </div>
      )}

      {!loading && !submitted && submitError && (
        <h2 className="font-black mt-20 text-red tracking-featureHeading text-2xl md:text-3xl leading-tight lg:leading-tight mb-10">
          Looks like something went wrong. Don&apos;t worry, the developer has
          been notified and will correct the problem soon. Please try again at a
          later date or send email directly to us&nbsp;
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

      {!loading && !submitted && !submitError && (
        <form
          className="text-black"
          onSubmit={(e) => {
            e.preventDefault();
            if (event === "") {
              setEventError(true);
            } else {
              setLoading(true);
              postForm();
            }
          }}
        >
          <fieldset
            className="font-semibold text-featBody"
            onChange={() => {
              checkerCheck();
            }}
          >
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
              required={!!phone ? false : true}
              func={setEmail}
            />
            <Input
              formId={formId}
              className="mb-8 block"
              id="phoneNumber"
              label="Phone Number"
              type="tel"
              delay={100}
              required={!!email ? false : true}
              func={setPhone}
            />
            <span
              className="fader my-14 block"
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-anchor={`#${formId}`}
            >
              Please send me information about volunteering for:
              {eventError && (
                <span className="block text-red font-black uppercase tracking-wider mt-5">
                  Please select at least one item
                </span>
              )}
            </span>
            <div
              className="fader md:flex md:flex-wrap"
              data-aos="fade-up"
              data-aos-anchor={`#${formId}`}
              data-aos-delay={200}
            >
              {events.map((type) => {
                return (
                  <Input
                    formId={formId}
                    key={type._id}
                    className="md:w-1/2 mb-5 flex items-start justify-start"
                    id={type._id}
                    required={false}
                    label={type.title}
                    type="checkbox"
                    delay={0}
                  />
                );
              })}
              <Input
                formId={formId}
                className="md:w-1/2 mb-5 flex items-start justify-start"
                id="neighborhoodCleanUp"
                required={false}
                label="Neighborhood Clean Up"
                type="checkbox"
                delay={0}
              />
              <Input
                formId={formId}
                className="md:w-1/2 mb-5 flex items-start justify-start"
                id="other"
                required={false}
                label="Other"
                type="checkbox"
                delay={0}
              />
              <Input
                formId={formId}
                className="md:w-1/2 mb-5 flex items-start justify-start"
                id="anyEvent"
                required={false}
                label="Any Event"
                type="checkbox"
                delay={0}
              />
            </div>
          </fieldset>
          <div
            className="fader text-center"
            data-aos="fade-up"
            data-aos-anchor={`#${formId}`}
            data-aos-delay={250}
          >
            <Button
              className={`w-full max-w-sm block md:inline-block mx-auto mt-10 bg-black text-white lg:inline-block`}
            >
              <button
                // disabled={event === ''}
                type="submit"
                className="uppercase"
                onClick={(e) => {
                  if (event === "") {
                    e.preventDefault();
                    setEventError(true);
                  }
                }}
              >
                Send Message
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
