import react, { useContext, useRef } from "react";
import s from "../styles/skills.module.css";
import { ScrollContext } from "../utils/scroll-observer";

const fallbackDownloads = 10961809
const fallbackCommits = 24;

interface Props {
  downloads: number;
  commits: number;
}

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return 1;
  return 0.2;
};

const Skills: React.FC<Props> = ({ commits, downloads }) => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);

  const numOfPages = 3;
  let progress = 0;

  const { current: elContainer } = refContainer;

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;

    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }

  const numOfDownloads = Math.round((downloads || fallbackDownloads) / 1000 / 1000).toLocaleString() + ' million'
  const numOfCommits = Math.round(commits || fallbackCommits).toLocaleString()

  return (
    <div ref={refContainer} className="bg-black text-white">
      <div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl tracking-tight font-semibold">
        <div className="leading-[1.15]">
          <div
            className={s.skillText}
            style={{ opacity: opacityForBlock(progress, 0) }}
          >
            Lorem ipsum dolor sit {numOfCommits} commits adipisicing elit. Error
            eligendi architecto tenetur incidunt? Odio nam, aut, impedit minima
            veniam nihil quibusdam soluta at laudantium amet voluptas ullam sunt
            animi molestias!
          </div>
          <span
            className={`${s.skillText} inline-block after:content-['_']`}
            style={{ opacity: opacityForBlock(progress, 1) }}
          >
            Tempore facilis deserunt sit mollitia?
          </span>
          <span
            className={`${s.skillText} inline-block`}
            style={{ opacity: opacityForBlock(progress, 2) }}
          >
            We &apos;re maintaining some of popular open source projects, with
            over <strong>{numOfDownloads}</strong> downloads.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
