import { FC } from 'react';
import NavBarTopics from "@/src/components/NavBarTopics"
import Link from "next/link";

interface TopicNav3Props {}

const TopicNav3: FC<TopicNav3Props> = () => (
  <div>
    <NavBarTopics>
        <li className="text-center"><Link href="/methods/topic-1/lagrange-interpolation">Lagrange interpolation</Link></li>
        <li className="text-center"><Link href="/methods/topic-1/newton-interpolation">Newton interpolation</Link></li>
    </NavBarTopics>
  </div>
);

export default TopicNav3;