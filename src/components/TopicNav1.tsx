import { FC } from 'react';
import NavBarTopics from "@/src/components/NavBarTopics"
import Link from "next/link";

interface TopicNav1Props {}

const TopicNav1: FC<TopicNav1Props> = () => (
  <div>
    <NavBarTopics>
        <li className="text-center"><Link href="/methods/topic-1/error">Aproximación de error</Link></li>
        <li className="text-center"><Link href="/methods/topic-1/biseccion">Bisección</Link></li>
        <li className="text-center"><Link href="/methods/topic-1/n-raphson">Newton raphson</Link></li>
    </NavBarTopics>
  </div>
);

export default TopicNav1;