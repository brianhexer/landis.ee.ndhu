import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Network, Cloud, Wifi, Radio, Cpu, Smartphone } from 'lucide-react';
import ns2Img from '/images/ns2.jpg';
import iot2Img from '/images/iot2.jpg';
import fiveG2Img from '/images/5g2.jpg';

const researches = [
    {
        title: 'Network Science',
        icon: <Network className="w-6 h-6" />,
        description: `Network science is an interdisciplinary academic field which studies complex networks such as telecommunication networks, computer networks, biological networks, cognitive and semantic networks, and social networks. The field draws on theories and methods including graph theory from mathematics, statistical mechanics from physics, data mining and information visualization from computer science.`,
        image: ns2Img
    },
    {
        title: 'Internet of Things (IoT)',
        icon: <Wifi className="w-6 h-6" />,
        description: `The Internet of Things (IoT) refers to uniquely identifiable objects and their virtual representations in an Internet-like structure. Radio-frequency identification (RFID) was seen as a prerequisite for the Internet of Things in the early days. If all objects and people in daily life were equipped with identifiers, they could be managed and inventoried by computers.`,
        image: iot2Img
    },
    {
        title: '5G Mobile Networks',
        icon: <Radio className="w-6 h-6" />,
        description: `5G (5th generation mobile networks) denotes the next major phase of mobile telecommunications standards beyond the current 4G/IMT-Advanced standards. It aims to provide higher data rates, reduced latency, energy saving, cost reduction, higher system capacity, and massive device connectivity.`,
        image: fiveG2Img
    },
    {
        title: 'Distributed Information Processing',
        icon: <Cloud className="w-6 h-6" />,
        description: 'Distributed algorithms for Pervasive Computing, Data aggregation and fusion, Network self-organization, Consensus and synchronization, Multi-agent systems.',
        image: null
    },
    {
        title: 'Advanced Networking Technology',
        icon: <Smartphone className="w-6 h-6" />,
        description: 'Wireless sensor network, Ad hoc Network, Video over emerging networks, IPTV, Network coding, Cross layer optimal design.',
        image: null
    },
    {
        title: 'Advanced Algorithms & Analysis',
        icon: <Cpu className="w-6 h-6" />,
        description: 'Randomized algorithms, Probabilistic method, Stochastic hybrid system for analytical modeling.',
        image: null
    }
];

const Researches = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="container mx-auto px-6 py-24">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl font-bold uppercase mb-16 text-center text-foreground dark:text-white"
            >
                Researches
            </motion.h1>

            <div className="max-w-5xl mx-auto space-y-4">
                {researches.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`rounded-2xl overflow-hidden border transition-all duration-500 ${activeIndex === index
                            ? 'bg-accent-purple/10 border-accent-purple shadow-[0_0_25px_rgba(147,114,255,0.3)]'
                            : 'bg-card/40 dark:bg-card border-accent-purple/50 hover:bg-black/5 dark:hover:bg-white/5 shadow-[0_0_15px_rgba(147,114,255,0.15)] hover:shadow-[0_0_25px_rgba(147,114,255,0.3)]'
                            }`}
                    >
                        <div
                            className="flex justify-between items-center cursor-pointer p-6 md:p-8"
                            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`p-2 rounded-lg ${activeIndex === index ? 'bg-accent-purple text-white' : 'bg-black/5 dark:bg-white/5 text-muted-foreground'}`}>
                                    {item.icon}
                                </div>
                                <h3 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${activeIndex === index ? 'text-accent-purple dark:text-white' : 'text-muted-foreground'}`}>
                                    {item.title}
                                </h3>
                            </div>
                            <div className={`transition-colors duration-300 ${activeIndex === index ? 'text-accent-purple' : 'text-muted-foreground'}`}>
                                {activeIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                            </div>
                        </div>
                        <AnimatePresence>
                            {activeIndex === index && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 border-t border-border/50 dark:border-white/5 mt-2">
                                        <div className="flex flex-col md:flex-row gap-8 items-start pt-6">
                                            {item.image && (
                                                <img src={item.image} alt={item.title} className="w-full md:w-1/3 rounded-xl border border-border/50 dark:border-white/10 shadow-lg object-cover" />
                                            )}
                                            <div className="flex-1">
                                                <p className="text-lg text-muted-foreground leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>

            {/* Related Research Links */}
            <div className="max-w-5xl mx-auto mt-32">
                <h2 className="text-3xl font-bold text-accent-purple border-b border-border dark:border-gray-800 pb-4 mb-12">Related Links</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { title: "Autonomous Networks Research Group", sub: "USC", url: "http://anrg.usc.edu/www/" },
                        { title: "Wireless Sensor Network Center", sub: "NTU", url: "http://www.wsnc.ntu.edu.tw/" },
                        { title: "Laboratory for Information and Decision Systems", sub: "MIT", url: "http://lids.mit.edu/" },
                        { title: "Project of Sensor Web", sub: "Microsoft Research", url: "http://research.microsoft.com/en-us/projects/senseweb/" },
                        { title: "Sensors and Devices Group", sub: "Microsoft Research", url: "http://research.microsoft.com/en-us/groups/sendev/" },
                        { title: "Networked Embedded Computing Group", sub: "Microsoft Research", url: "http://research.microsoft.com/en-us/groups/nec/" },
                        { title: "Distributed Systems Group", sub: "Microsoft Research", url: "http://research.microsoft.com/en-us/groups/ds-red/" },
                        { title: "Networking Research Group", sub: "Microsoft Research", url: "http://research.microsoft.com/en-us/groups/nrg/" },
                        { title: "Machine Learning and Perception Group", sub: "Microsoft Research", url: "http://research.microsoft.com/en-us/groups/mlp/" },
                    ].map((link, i) => (
                        <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block p-6 bg-card/40 dark:bg-card border border-accent-purple/50 rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 relative overflow-hidden shadow-[0_0_15px_rgba(147,114,255,0.15)] hover:shadow-[0_0_25px_rgba(147,114,255,0.3)] transition-all duration-500"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Network size={40} className="text-foreground dark:text-white" />
                            </div>
                            <span className="text-xs font-bold text-accent-purple uppercase tracking-wider mb-2 block">{link.sub}</span>
                            <h3 className="font-bold text-foreground dark:text-white group-hover:text-accent-purple transition-colors">{link.title}</h3>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Researches;
