import { FC } from 'react';
import NavBarTopics from "@/src/components/NavBarTopics"
import Link from "next/link";

interface TopicNav4Props {}

const TopicNav4: FC<TopicNav4Props> = () => (
  <div>
    <NavBarTopics>
        <li className="text-center"><Link href="/methods/topic-1/trapezium">Trapezium method</Link></li>
        <li className="text-center"><Link href="/methods/topic-1/simpson">Simpson 1/3</Link></li>
    </NavBarTopics>
  </div>
);

export default TopicNav4;