import { useEffect, useState } from 'react';
import { volunteerQuery, siteQuery } from '@queries';
import { useRouter } from 'next/router';
import { getClient, usePreviewSubscription } from '@utils';
import { Button, Container, LinkObject, PageLayout } from '@components';
import { schedule } from '@utils/schedule';
import * as SVG from '@svgs';
import { breakpoints, colors } from '@styles';
import dayjs from 'dayjs';
import { games } from 'googleapis/build/src/apis/games';

type Props = {
  content: any;
  global: any;
};

interface GameProps {
  label: string;
  time: string;
}

interface ScheduleItemProps {
  date: string;
  day: string;
  league: string;
  notes: string;
  games: GameProps[];
}

const VolunteerPage = ({ content, global }: Props) => {
  const [activeDates, setActiveDates] = useState<ScheduleItemProps[]>([]);
  const router = useRouter();
  const today = new Date().toISOString();
  const todayDate = today.split('T')[0];

  const { data = {} } = usePreviewSubscription(volunteerQuery, {
    params: { todayDate },
    initialData: content,
    enabled: router.query.preview === '',
  });

  useEffect(() => {
    const schduleByDate = schedule.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA.getTime() - dateB.getTime();
    });

    setActiveDates(
      schduleByDate.filter((item) => {
        const date = new Date(item.date);
        return date.getTime() > new Date().getTime();
      })
    );
  }, []);

  return (
    <PageLayout
      content={data}
      global={global}
      subPage={{
        banner: {
          heading: '2023 Wiffle Ball Schedule',
        },
        color: 'bg-color7',
      }}
    >
      <section className="schedule bg-white relative py-16 md:pb-36 lg:py-sectionPadding">
        <SVG.Cap bgColor={colors.white} />
        <SVG.DateBox />
        <Container maxWidth={breakpoints.xxl}>
          <div className="grid xmd:grid-cols-2 gap-10">
            {activeDates.map((item: ScheduleItemProps) => {
              const games = item.games.filter((game) => game.label !== '');
              return (
                <div
                  key={item.date}
                  className="relative  xmd:ml-40 mt-20 xmd:mt-0"
                >
                  <div className="date text-center bg-blue text-white mb-5 xmd:mb-0 xmd:absolute xmd:top-0 right-full w-24 py-5 mr-14">
                    <div className="text-dateMon uppercase font-bold leading-base">
                      {dayjs(item.date).format('MMM')}
                    </div>
                    <div className="text-dateDay font-black leading-base">
                      {dayjs(item.date).format('D')}
                    </div>
                  </div>

                  <h2 className="font-black text-orange text-xl">
                    {item.notes}
                  </h2>
                  {item.league !== 'OFF' && (
                    <>
                      <p className="font-bold text-blue">
                        <span>League: </span>
                        {item.league}
                      </p>
                      <ul className="grid sm:grid-cols-2 max-w-xs gap-2">
                        {games.map((game, index: number) => (
                          <li key={game.label} className="text-xs mt-3">
                            <strong className="text-blue block mb-1">
                              Game {index + 1}
                            </strong>
                            <hr />
                            <span className="block mt-2">{game.label}</span>
                            <span className="block mt-2">
                              Time: {game.time}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              );
            })}
          </div>
          <div className="text-center mt-20">
            <Button classes="w-full block xmd:inline-block mx-auto xmd:mx-0 sm:w-full xmd:w-auto bg-blue whitespace-nowrap">
              <LinkObject
                url="https://www.facebook.com/hayniescornerwiffleballleague/"
                newTab
                classes="text-white"
              >
                Find this on Facebook
              </LinkObject>
            </Button>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
};

export default VolunteerPage;

export async function getStaticProps({ res, err, query, preview = false }) {
  const today = new Date().toISOString();
  const todayDate = today.split('T')[0];

  const doc = await getClient(query?.preview === '').fetch(volunteerQuery, {
    todayDate,
    pageId: 'volunteerPage',
  });
  const global = await getClient(query?.preview === '').fetch(siteQuery);

  if (!doc) {
    return {
      notFound: true,
    };
  }

  return {
    props: { content: doc, global, preview },
    revalidate: preview ? 1 : 60,
  };
}
