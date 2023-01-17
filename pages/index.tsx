import type { GetStaticProps } from 'next';
import { ProjectFragment } from 'graphql/types';
import { fetchAllProjects } from 'graphql/queries';
import { ReactElement, useEffect, useRef, useState } from 'react';
import anime, { AnimeTimelineInstance } from 'animejs';
import TopBar from '../components/molecules/TopBar';
import HighlightedText from '../components/atoms/HighlightedText';
import Slider from '../components/organisms/Slider';
import Bio from '../components/molecules/Bio';
import Layout from '../components/templates/Layout';
import { NextPageWithLayout } from './_app';
import Name from '../components/molecules/Name';

type Props = {
  projects: ProjectFragment[];
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const projects = await fetchAllProjects();

  return {
    props: {
      projects: projects.data.allProjects || [],
    },
  };
};

const Home: NextPageWithLayout = ({ projects }: Props) => {
  const [carouselIndex, setCarouselIndex] = useState(-1);
  const animationRef = useRef<AnimeTimelineInstance>();

  useEffect(() => {
    animationRef.current = anime.timeline({
      easing: 'easeInOutQuad',
      duration: 300,
    });

    animationRef.current.add({
      targets: '.title, .slider',
      opacity: [0, 1],
      translateX: ['-150px', '0px'],
    });

    animationRef.current.add({
      targets: '.description',
      opacity: [0, 1],
    });

    animationRef.current.add({
      targets: '.links',
      opacity: [0, 1],
      duration: 250,
    });
  }, []);

  return (
    <div className="w-full h-full md:row-start-2 xl:col-start-2 p-2 rounded-lg bg-color-corners">
      <div className="w-full h-full relative flex flex-col justify-between items-center md:grid md:grid-cols-2 md:grid-rows-[auto_1fr] xl:flex xl:flex-col xl:justify-between xl:items-start bg-stone-800 text-white font-silkscreen rounded-sm">
        <div className="w-full md:row-start-1 md:col-span-2">
          <TopBar />
        </div>

        <div className="w-full xl:w-2/5 md:h-full xl:relative xl:z-10 md:col-start-1 md:flex md:justify-start md:flex-col py-2 md:pt-28 xl:pt-0 xl:pt-32 px-5 md:px-10 xl:px-0 xl:ml-7 xl:pointer-events-none">
          <div className="title flex flex-col gap-2">
            {carouselIndex !== -1 ? (
              <>
                <p className="text-sm text-gray-300">{projects[carouselIndex].main ? 'main' : 'side'} project</p>
                <h1 className="block text-4xl font-permanent">
                  <HighlightedText>{projects[carouselIndex].name || ''}</HighlightedText>
                </h1>
              </>
            ) : (
              <Name />
            )}
          </div>

          <div className="slider">
            {carouselIndex !== -1 && (
              <div className="w-auto flex justify-center mt-5 text-sm overflow-hidden">
                <Slider data={projects[carouselIndex].techStack} />
              </div>
            )}
          </div>

          <div className="description h-auto relative flex flex-col gap-2 mt-6 text-sm text-slate-200 before:absolute before:-left-4 before:w-0.5 before:h-full before:bg-gradient-to-tr before:from-indigo-500 before:to-purple-500">
            {carouselIndex !== -1 ? <p>{carouselIndex !== -1 && projects[carouselIndex].description}</p> : <Bio />}
          </div>

          <div className="links">
            {carouselIndex !== -1 && (
              <div className="w-full flex items-center justify-between flex-row mt-5">
                <a
                  className="font-bold xl:pointer-events-auto xl:cursor-pointer xl:hover:underline xl:underline-offset-2"
                  href={projects[carouselIndex].livePreview || '/'}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live preview
                </a>
                <a
                  className="font-bold xl:pointer-events-auto xl:cursor-pointer xl:hover:underline xl:underline-offset-2"
                  href={projects[carouselIndex].githubRepo || '/'}
                  target="_blank"
                  rel="noreferrer"
                >
                  Repository
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="w-full xl:w-1/3 md:h-full xl:h-auto relative z-10 md:col-start-2 flex items-start md:justify-end xl:justify-start flex-col p-5 pt-10 md:pr-7 md:pb-8 xl:pl-7 xl:px-5 xl:pb-5 xl:pointer-events-none">
          <div className="w-full flex justify-center mb-3">
            <h2 className="relative text-xl before:absolute before:-left-14 before:top-1/2 before:w-10 before:h-0.5 before:bg-gradient-to-l before:from-indigo-500 before:to-purple-500 after:absolute after:-right-14 after:top-1/2 after:w-10 after:h-0.5 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-500">
              projects
            </h2>
          </div>
          <ul className="flex flex-col gap-3">
            {projects.map((project: ProjectFragment, index: number) => (
              <li key={project.id}>
                <button
                  className={`${carouselIndex === index && 'font-bold'} text-start xl:pointer-events-auto xl:hover:underline xl:underline-offset-2`}
                  onClick={() => {
                    setCarouselIndex(index);
                    animationRef.current?.restart();
                    animationRef.current?.play();
                  }}
                >
                  {project.main && '(*) '}
                  {project.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

Home.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Home;
