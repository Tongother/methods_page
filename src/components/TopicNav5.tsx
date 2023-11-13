import { FC } from 'react';
import NavBarTopics from "@/src/components/NavBarTopics"
import Link from "next/link";

interface TopicNav5Props {}

const TopicNav5: FC<TopicNav5Props> = () => (
  <div>
    <NavBarTopics>
        <li className="text-center"><Link href="/methods/topic-1/euler">Euler method</Link></li>
        <li className="text-center"><Link href="/methods/topic-1/taylor">Taylor method</Link></li>
    </NavBarTopics>
  </div>
);

export default TopicNav5;