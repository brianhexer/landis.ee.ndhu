import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import members1 from '/images/members1.jpg';
import members2 from '/images/members2.jpg';
import members3 from '/images/members3.jpg';
import members4 from '/images/members4.jpg';
import members5 from '/images/members5.jpg';
import members6 from '/images/members6.jpg';

const Members = () => {
    const phds = [
        { name: 'Cheng-Sen Huang (黃承森)', area: 'Distributed Algorithms, Self-organization, Artificial Intelligence.' },
        { name: 'Cheng-Yu Chen (陳政宇)', area: 'Wireless Sensor Network, Ad-hoc Network, Data Aggregation and Data Fusion.' }
    ];

    const masters = [
        { name: 'Bo-Han Chiu (邱柏翰)', area: 'Mobile Multimedia .' },
        { name: 'Zong-Yan Jhouv (周宗彥)', area: 'Geographic Routing.' },
        { name: 'Yu-Feng Jiang (蔣裕峰)', area: 'Vehicle Ad hoc Network.' },
        { name: 'Wen-Chung Zhang (張文駿)', area: 'Cloud Computing.' },
        { name: 'Ching-Lung Hsu (許晉榮)', area: 'Simultaneous Localization and Mapping (SLAM).' },
        { name: 'Kai-Jun Zhong (鍾楷駿)', area: 'Machine Learning.' },
        { name: 'He-Yi Ji (紀和佾)', area: 'Machine Learning.' },
        { name: 'Su-Ying Cheng (蘇應成)', area: 'Low Earth Orbit (LEO) satellites.' },
        { name: 'Chi-Yu Chen (陳麒宇)', area: 'Machine Learning.' }
    ];

    const alumni = [
        { name: 'David Juan (阮大維, M.S.)', thesis: 'An Endurant Spanning Tree for Data Aggregation on Wireless Sensor Networks. (無線感測網路上資料彙集之最適能量分佈生成樹研究應用)', job: '仁寶電腦工業有限股份公司-Compal Electronics, Inc.' },
        { name: 'Cheng-Yu Chen (陳政宇, M.S.)', thesis: 'Position Based Multicast Routing on Wireless Ad Hoc Networks. (無線網路中基於位置資訊之群播路由協定研究)', job: 'Pursuing his further education at the National Dong Hwa University (NDHU), Taiwan, R.O.C. now.' },
        { name: 'Yen-Hua Chen (陳彥華, M.S.)', thesis: 'Disjoint Multi-path QoS Routing Protocol on Multi-channel Wireless Networks. (在多通道無線網路下非重疊多重路徑之QoS路由協定)', job: 'Serving at the Mandatory Military now.' },
        { name: 'Chih-Hao Hong (洪志豪, M.S.)', thesis: 'Swarm Intelligence as a Service on the Cloud (PSO & GA over Iterative MapRdeuce - Twister). (雲端群體智能)', job: '工研院資通所-Industry Technology Research Institute/ Information and Communications Research Laboratories.' },
        { name: 'Yi-Ying Tseng (曾奕穎, M.S.)', thesis: 'Swarm Intelligence as a Service on the Cloud (PSO & GA over Iterative MapRdeuce - Twister). (雲端群體智能)', job: '工研院資通所-Industry Technology Research Institute/ Information and Communications Research Laboratories.' },
        { name: 'Jin-Long Lin (林金龍, M.S.)', thesis: 'Adaptive Greedy Geographic Routing for Constructing Tight Routes in Wireless Ad Hoc Networks. (無線隨意網路中利用適應性貪婪式轉發以建立緊捷路徑之路由協定)', job: '宏達電-HTC' },
        { name: 'Chen-You Yeh (葉宸祐, M.S.)', thesis: 'A Study of The Vehicle Dispatching Systems. (車輛派遣系統之研究)', job: '和碩科技-Pegatron Corporation.' },
        { name: 'Shi-Ting Huang (黃士庭, M.S.)', thesis: 'Prediction-Coverage-First Detection Scheduling for Energy Efficient Multi-Target Tracking in Sensor Networks. (無線感測網路中以預測區間涵蓋為優先排程之多目標追蹤)', job: 'Serving at the Mandatory Military now.' },
        { name: 'Kuei-Chih Liu (劉奎志, M.S.)', thesis: 'Self-organized Distributed Sensor Deployment for Topology Control in Wireless Sensor Networks. (無線感測網路拓樸控制之自主性分散式節點部署)', job: '' },
        { name: 'Yu-Wei Chou (周育緯, M.S.)', thesis: 'Scientific Cloud Computing by Apache Hama. (以Apache Hama 實作科學雲計算)', job: '美商Pharos公司.' },
        { name: 'Siou-Ming Shihv(石修銘, M.S.)', thesis: 'Energy Efficient Virtual Machine Deployment with High QoS in a cloud Data Center. (在雲端運算資料中心中具節能與高服務品質之虛擬機器佈署)', job: '中研院-Academia Sinica.' }
    ];

    const defaultTiltOptions = {
        reverse: false,  // reverse the tilt direction
        max: 15,     // max tilt rotation (degrees)
        perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1.02,   // 2 = 200%, 1.5 = 150%, etc..
        speed: 1000,   // Speed of the enter/exit transition
        transition: true,   // Set a transition on enter/exit.
        axis: null,   // What axis should be disabled. Can be X or Y.
        reset: true,   // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }

    return (
        <div className="container mx-auto px-6 py-24">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl font-bold uppercase mb-16 text-center text-foreground dark:text-white"
            >
                Members
            </motion.h1>

            {/* Photos Section - Masonry Grid Style */}
            <div className="mb-32">
                <h2 className="text-3xl font-bold text-accent-purple mb-12 border-b border-border dark:border-gray-800 pb-4">Lab Life</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { src: members3, caption: "River trekking in Mukumugi, 2013", span: "md:col-span-2 md:row-span-2" },
                        { src: members1, caption: "LANDIS Lab, 2012", span: "" },
                        { src: members2, caption: "Farglory Hotel, 2012", span: "" },
                        { src: members5, caption: "Moonhouse, 2014", span: "" },
                        { src: members6, caption: "LANDIS Lab, 2014", span: "md:col-span-2" },
                        { src: members4, caption: "Mukumugi, 2013", span: "" }
                    ].map((img, i) => (
                        <Tilt key={i} options={defaultTiltOptions} className={`relative group rounded-2xl overflow-hidden shadow-2xl ${img.span}`}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="h-full w-full"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-6">
                                    <p className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.caption}</p>
                                </div>
                                <img src={img.src} alt={img.caption} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" style={{ minHeight: '300px' }} />
                            </motion.div>
                        </Tilt>
                    ))}
                </div>
            </div>

            <div className="space-y-24">
                <section>
                    <div className="flex items-end gap-4 mb-8 border-b border-border dark:border-gray-800 pb-4">
                        <h2 className="text-4xl font-bold text-accent-purple">Ph.D. Program</h2>
                        <span className="text-muted-foreground mb-1">Current Researchers</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {phds.map((p, i) => (
                            <Tilt key={i} options={{ ...defaultTiltOptions, max: 10, scale: 1.01 }}>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="h-full bg-card/40 dark:bg-card border border-accent-purple/50 p-8 rounded-2xl group relative overflow-hidden shadow-[0_0_15px_rgba(147,114,255,0.15)] hover:shadow-[0_0_25px_rgba(147,114,255,0.3)] transition-all duration-500"
                                >
                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <span className="text-8xl font-bold text-foreground dark:text-white">PHD</span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 text-foreground dark:text-white group-hover:text-accent-purple transition-colors">{p.name}</h3>
                                    <p className="text-muted-foreground leading-relaxed"><span className="text-accent-purple font-mono text-sm block mb-1">FOCUS AREA</span> {p.area}</p>
                                </motion.div>
                            </Tilt>
                        ))}
                    </div>
                </section>

                <section>
                    <div className="flex items-end gap-4 mb-8 border-b border-border dark:border-gray-800 pb-4">
                        <h2 className="text-4xl font-bold text-accent-purple">Master Program</h2>
                        <span className="text-muted-foreground mb-1">Graduate Students</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {masters.map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="bg-card/40 dark:bg-white/5 backdrop-blur-sm border border-accent-purple/50 p-6 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 shadow-[0_0_15px_rgba(147,114,255,0.15)] hover:shadow-[0_0_25px_rgba(147,114,255,0.3)] transition-all duration-500"
                            >
                                <h3 className="text-xl font-bold mb-2 text-foreground dark:text-white">{p.name}</h3>
                                <p className="text-muted-foreground text-sm">{p.area}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section>
                    <div className="flex items-end gap-4 mb-8 border-b border-border dark:border-gray-800 pb-4">
                        <h2 className="text-4xl font-bold text-accent-purple">Alumni</h2>
                        <span className="text-muted-foreground mb-1">Hall of Fame</span>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {alumni.map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="bg-card/40 dark:bg-card border border-accent-purple/50 p-6 rounded-xl transition-all group flex flex-col md:flex-row gap-6 items-start shadow-[0_0_15px_rgba(147,114,255,0.15)] hover:shadow-[0_0_25px_rgba(147,114,255,0.3)] duration-500"
                            >
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold mb-2 text-foreground dark:text-white group-hover:text-accent-purple transition-colors">{p.name}</h3>
                                    <div className="pl-4 border-l-2 border-accent-purple/30">
                                        <p className="text-muted-foreground text-sm mb-1 leading-relaxed italic">"{p.thesis}"</p>
                                    </div>
                                </div>
                                {p.job && (
                                    <div className="md:w-1/3 bg-accent-purple/5 p-4 rounded-lg border border-accent-purple/10">
                                        <span className="text-xs font-bold text-accent-purple uppercase tracking-wider block mb-1">Current Position</span>
                                        <p className="text-sm text-muted-foreground">{p.job}</p>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Members;
