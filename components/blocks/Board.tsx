import Container from '@components/modules/Container';
import { breakpoints } from '@styles';
import { isEven, parseCompanies, slugify } from '@utils';

interface BoardProps {
  boardHeading?: string;
  delay?: number;
  boardMembers: {
    _id: string;
    companies?: {
      _id: string;
      title: string;
      url: string;
    }[];
    title: string;
    positionTitle?: string;
  }[];
}

const Board = ({
  boardHeading,
  delay = 0,

  boardMembers,
}: BoardProps) => {
  const delayNum = delay * 100;
  return (
    <section
      id={slugify(boardHeading)}
      className="board text-white py-16 md:py-5 lg:pt-sectionPadding"
    >
      <Container maxWidth={breakpoints.md}>
        <h3
          data-aos="fade-up"
          data-aos-delay={`${delayNum}`}
          className="fader text-seaFoam text-center text-featHeading font-black tracking-featureHeading leading-9 uppercase mb-10"
        >
          {boardHeading}
        </h3>
        <ul className="md:flex md:flex-wrap">
          {boardMembers.map(
            ({ _id, title, positionTitle, companies }, index) => {
              const itemDelay = delayNum + (index + 1) * 50;

              return (
                <li
                  key={_id}
                  data-aos="fade-up"
                  data-aos-anchor={`#${slugify(boardHeading)}`}
                  data-aos-delay={`${itemDelay}`}
                  className={`fader text-center md:text-left md:w-1/2 mb-10 text-featBody ${
                    isEven(index) ? 'md:pr-10' : ''
                  }`}
                >
                  <p className="font-black text-seaFoam mb-2">{title}</p>
                  <p className="font-semibold mb-2">{positionTitle}</p>
                  <p
                    className="font-semibold"
                    dangerouslySetInnerHTML={{
                      __html: parseCompanies(companies),
                    }}
                  />
                </li>
              );
            }
          )}
        </ul>
      </Container>
    </section>
  );
};

export { Board };
export default Board;
