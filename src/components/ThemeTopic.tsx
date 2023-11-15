import { FC } from 'react';
import { motion } from 'framer-motion';

interface ThemeTopicProps {
    topic: string
}

const ThemeTopic: FC<ThemeTopicProps> = ({topic}) => (

    <motion.div className="w-[100%] h-[15vh] grid items-center border-b">
              <h1 className="text-white text-[32px] font-bold text-center">{topic}</h1>
    </motion.div>
);

export default ThemeTopic;