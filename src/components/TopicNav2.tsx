import { FC } from 'react';
import NavBarTopics from "@/src/components/NavBarTopics"
import Link from "next/link";

interface TopicNav2Props {}

const TopicNav2: FC<TopicNav2Props> = () => (
  <div>
    <NavBarTopics>
        <li className="text-center"><Link href="/methods/topic-1/jacobi">Jacobi</Link></li>
        <li className="text-center"><Link href="/methods/topic-1/gauss-seidel">Gauss-seidel</Link></li>
    </NavBarTopics>
  </div>
);

export default TopicNav2;