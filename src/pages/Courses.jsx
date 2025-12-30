
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Calendar } from 'lucide-react';

const Courses = () => {
    const courses = [
        { term: 'Fall, 2025', items: [{ name: 'EE__M0220: Artificial Intelligence of Things (AIoT)' }, { name: 'EE__3080AA: Introduction to Computer Networks' }, { name: 'EE__3080AB: Introduction to Computer Networks' }, { name: 'EE__4020AA: Network Laboratory' }, { name: 'EE__4020AB: Network Laboratory' }] },
        { term: 'Spring, 2025', items: [{ name: 'GC__64470: Science Fiction Film and Modern Society' }, { name: 'EE__3364AA: Introduction to Algorithms' }, { name: 'EE__3364AB: Introduction to Algorithms' }, { name: 'EE__3369AA: Computational Intelligence Laboratory' }, { name: 'EE__3369AB: Computational Intelligence Laboratory' }] },
        { term: 'Fall, 2024', items: [{ name: 'EE__3080AA: Introduction to Computer Networks' }, { name: 'EE__3080AB: Introduction to Computer Networks' }, { name: 'EE__4020AA: Network Laboratory' }, { name: 'EE__4020AB: Network Laboratory' }] },
        { term: 'Spring, 2024', items: [{ name: 'GC__64470: Science Fiction Film and Modern Society' }, { name: 'EE__71320: Wireless Networks' }, { name: 'EE__52900: Wireless Networks' }, { name: 'EE__3364AA: Introduction to Algorithms' }, { name: 'EE__3364AB: Introduction to Algorithms' }, { name: 'EE__3369AA: Computational Intelligence Laboratory' }, { name: 'EE__3369AB: Computational Intelligence Laboratory' }] },
        { term: 'Fall, 2023', items: [{ name: 'EE__D0240: Advanced topics in networking' }, { name: 'EE__M0110: Advanced topics in networking' }, { name: 'EE__3080AA: Introduction to Computer Networks' }, { name: 'EE__3080AB: Introduction to Computer Networks' }, { name: 'EE__4020AA: Network Laboratory' }, { name: 'EE__4020AB: Network Laboratory' }, { name: 'EE__4020AC: Network Laboratory' }] },
        { term: 'Spring, 2023', items: [{ name: 'GC__64470: Science Fiction Film and Modern Society' }, { name: 'EE__M0090: Internet of Things' }, { name: 'EE__3364AA: Introduction to Algorithms' }, { name: 'EE__3364AB: Introduction to Algorithms' }, { name: 'EE__3369AA: Computational Intelligence Laboratory' }, { name: 'EE__3369AB: Computational Intelligence Laboratory' }] },
        { term: 'Fall, 2022', items: [{ name: 'EE__3080AA: Introduction to Computer Networks' }, { name: 'EE__3080AB: Introduction to Computer Networks' }, { name: 'EE__4020AA: Network Laboratory' }, { name: 'EE__4020AB: Network Laboratory' }] },
        { term: 'Spring, 2022', items: [{ name: 'GC__64470: Science Fiction Film and Modern Society' }, { name: 'EE__52900: Wireless Networks' }, { name: 'EE__3364AA: Introduction to Algorithms' }, { name: 'EE__3364AB: Introduction to Algorithms' }, { name: 'EE__3369AA: Computational Intelligence Laboratory' }, { name: 'EE__3369AB: Computational Intelligence Laboratory' }] },
        { term: 'Fall, 2021', items: [{ name: 'EE__3080AA: Introduction to Computer Networks' }, { name: 'EE__3080AB: Introduction to Computer Networks' }, { name: 'EE__4020AA: Network Laboratory' }, { name: 'EE__4020AB: Network Laboratory' }] },
        { term: 'Spring, 2021', items: [{ name: 'GC__64470: Science Fiction Film and Modern Society' }, { name: 'EE__71140: Network Science and Engineering' }, { name: 'EE__3364AA: Introduction to Algorithms' }, { name: 'EE__3364AB: Introduction to Algorithms' }, { name: 'EE__3363AA: Cloud Computing Laboratory' }, { name: 'EE__3363AB: Cloud Computing Laboratory' }] },
        { term: 'Fall, 2020', items: [{ name: 'EE__59200: Advanced topics in networking' }, { name: 'EE__3080AA: Introduction to Computer Networks' }, { name: 'EE__3080AB: Introduction to Computer Networks' }, { name: 'EE__4020AA: Network Laboratory' }, { name: 'EE__4020AB: Network Laboratory' }] },
        { term: 'Spring, 2020', items: [{ name: 'GC__64470: Science Fiction Film and Modern Society', link: 'http://134.208.11.249/gotomoodle.php?cid=108247968' }, { name: 'EE__59370: Internet of Things', link: 'http://134.208.11.249/gotomoodle.php?cid=108260920' }, { name: 'EE__3364AA: Introduction to Algorithms', link: 'http://134.208.11.249/gotomoodle.php?cid=108217651' }, { name: 'EE__3364AB: Introduction to Algorithms', link: 'http://134.208.11.249/gotomoodle.php?cid=108218809' }, { name: 'EE__3363AA: Cloud Computing Laboratory', link: 'http://134.208.11.249/gotomoodle.php?cid=108213987' }] },
        { term: 'Fall, 2019', items: [{ name: 'EE__59350: Services and Applications in Mobile Networks with Small Cells', link: 'http://134.208.11.249/gotomoodle.php?cid=108120766' }, { name: 'EE__3080AA: Introduction to Computer Networks', link: 'http://134.208.11.249/gotomoodle.php?cid=108111143' }, { name: 'EE__3080AB: Introduction to Computer Networks', link: 'http://134.208.11.249/gotomoodle.php?cid=108174216' }, { name: 'EE__4020AA: Network Laboratory', link: 'http://134.208.11.249/gotomoodle.php?cid=108164830' }, { name: 'EE__4020AB: Network Laboratory', link: 'http://134.208.11.249/gotomoodle.php?cid=108170320' }] },
        { term: 'Spring, 2019', items: [{ name: 'GC__64470: Science Fiction Film and Modern Society', link: 'http://134.208.11.249/gotomoodle.php?cid=107273023' }, { name: 'EE__52900: Wireless Networks', link: 'http://134.208.11.249/gotomoodle.php?cid=107242704' }, { name: 'EE__3364AA: Introduction to Algorithmss', link: 'http://134.208.11.249/gotomoodle.php?cid=107236544' }, { name: 'EE__3364AB: Introduction to Algorithmss', link: 'http://134.208.11.249/gotomoodle.php?cid=107268100' }, { name: 'EE__3363AA: Cloud Computing Laboratory', link: 'http://134.208.11.249/gotomoodle.php?cid=107268756' }, { name: 'EE__3363AB: Cloud Computing Laboratory', link: 'http://134.208.11.249/gotomoodle.php?cid=107247026' }] },
        { term: 'Fall, 2018', items: [{ name: 'EE__59200: Advanced topics in networking', link: 'http://134.208.11.249/gotomoodle.php?cid=107162837' }, { name: 'EE__3080AA: Introduction to Computer Networks', link: 'http://134.208.11.249/gotomoodle.php?cid=107173207' }, { name: 'EE__3080AB: Introduction to Computer Networks', link: 'http://134.208.11.249/gotomoodle.php?cid=107146542' }, { name: 'EE__40200: Network Laboratory', link: 'http://134.208.11.249/gotomoodle.php?cid=107176846' }] },
        { term: 'Spring, 2018', items: [{ name: 'EE__59370: Internet of Things', link: 'http://134.208.11.249/gotomoodle.php?cid=106205605' }, { name: 'EE__33640: Introduction to Algorithmss', link: 'http://134.208.11.249/gotomoodle.php?cid=106258961' }, { name: 'EE__33630: Cloud Computing Laboratory', link: 'http://134.208.11.249/gotomoodle.php?cid=106244206' }] },
        { term: 'Fall, 2017', items: [{ name: 'GC__64470: Science Fiction Film and Modern Society', link: 'http://134.208.11.249/gotomoodle.php?cid=106175411' }, { name: 'EE__59350: Services and Applications in Mobile Networks with Small Cells', link: 'http://134.208.11.249/gotomoodle.php?cid=106114715' }, { name: 'EE__40200: Network Laboratory', link: 'http://134.208.11.249/gotomoodle.php?cid=106165866' }, { name: 'EE__30800: Introduction to Computer Networks', link: 'http://134.208.11.249/gotomoodle.php?cid=106153063' }] },
        { term: 'Spring, 2017', items: [{ name: 'EE__58700: Sensor and Mobile Ad Hoc Networks', link: 'http://134.208.11.249/gotomoodle.php?cid=105218584' }, { name: 'EE__33640: Introduction to Algorithmss', link: 'http://134.208.11.249/gotomoodle.php?cid=105280922' }, { name: 'EE__40200: Network Laboratory', link: 'http://134.208.11.249/gotomoodle.php?cid=104230767' }] },
        { term: 'Fall, 2016', items: [{ name: 'EE__52900: Wireless Networks', link: 'http://134.208.11.249/gotomoodle.php?cid=105154765' }, { name: 'EE__33630: Cloud Computing Laboratory', link: 'http://134.208.11.249/gotomoodle.php?cid=105114697' }, { name: 'EE__30800: Introduction to Computer Networks', link: 'http://134.208.11.249/gotomoodle.php?cid=105114697' }] },
        { term: 'Spring, 2016', items: [{ name: 'EE__71140: Network Science and Engineerin', link: 'http://134.208.11.249/gotomoodle.php?cid=104281446' }, { name: 'EE__30800: Introduction to Computer Networks', link: 'http://134.208.11.249/gotomoodle.php?cid=104212069' }, { name: 'EE__40200: Network Laboratory', link: 'http://134.208.11.249/gotomoodle.php?cid=104230767' }] },
        { term: 'Fall, 2015', items: [{ name: 'EE__59200: Advanced topics in networking', link: 'http://134.208.11.249/gotomoodle.php?cid=104178874' }, { name: 'EE__33630: Cloud Computing Laboratory', link: 'http://134.208.11.249/gotomoodle.php?cid=104132081' }, { name: 'EE__33640: Introduction to Algorithms', link: 'http://134.208.11.249/gotomoodle.php?cid=104186236' }] },
    ];

    return (
        <div className="container mx-auto px-6 py-24">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl font-bold uppercase mb-16 text-center text-foreground dark:text-white"
            >
                Courses
            </motion.h1>

            <div className="max-w-4xl mx-auto relative">
                {/* Vertical Timeline Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-accent-purple/50 to-transparent transform -translate-x-1/2 ml-6 md:ml-0" />

                <div className="space-y-12">
                    {courses.map((semester, i) => (
                        <motion.div
                            key={semester.term}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-100px" }}
                            transition={{ delay: i * 0.05 }}
                            className={`flex flex-col md:flex-row gap-8 items-stretch ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Card Side */}
                            <div className="flex-1 w-full pl-12 md:pl-0">
                                <div className="bg-card/40 dark:bg-white/5 backdrop-blur-md border border-accent-purple/50 p-6 rounded-2xl hover:bg-black/5 dark:hover:bg-white/10 h-full shadow-[0_0_15px_rgba(147,114,255,0.15)] hover:shadow-[0_0_25px_rgba(147,114,255,0.3)] transition-all duration-500">
                                    <div className="flex items-center gap-3 mb-4 border-b border-border/50 dark:border-white/10 pb-4">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-accent-purple text-xs font-mono font-bold">
                                            <Calendar size={12} />
                                            {semester.term}
                                        </span>
                                    </div>
                                    <ul className="space-y-3">
                                        {semester.items.map((item, idx) => (
                                            <li key={idx} className="group/item">
                                                <a
                                                    href={item.link || '#'}
                                                    className={`flex items-start gap-2 ${item.link ? 'hover:text-accent-purple transition-colors cursor-pointer' : 'text-muted-foreground cursor-default'}`}
                                                    target={item.link ? "_blank" : undefined}
                                                    rel={item.link ? "noopener noreferrer" : undefined}
                                                >
                                                    <BookOpen size={16} className="mt-1 shrink-0 text-muted-foreground/70 group-hover/item:text-accent-purple transition-colors" />
                                                    <span className="text-sm font-medium leading-relaxed">{item.name}</span>
                                                    {item.link && <ExternalLink size={12} className="mt-1.5 opacity-0 group-hover/item:opacity-100 transition-opacity" />}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Center Dot */}
                            <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-background border-4 border-accent-purple transform -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(147,114,255,0.5)] flex items-center justify-center">
                                <div className="w-1.5 h-1.5 bg-foreground dark:bg-white rounded-full opacity-50" />
                            </div>

                            {/* Empty Side */}
                            <div className="flex-1 hidden md:block" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Courses;
