import React from 'react';
import { motion } from 'framer-motion';

const Publications = () => {
    const journalPapers = [
        {
            content: <>Huang, Shih-Yun, Cheng-Yu Chen, Jen-Yeu Chen, and Han-Chieh Chao. (2023, Feb). <a href="https://doi.org/10.3390/sym15020538" target="_blank" rel="noopener noreferrer" className="text-accent-purple hover:underline">“A Survey on Resource Management for Cloud Native Mobile Computing: Opportunities and Challenges.”</a> Symmetry 15, no. 2: 538.</>
        },
        {
            content: "Cheng-Yu Chen, Jen-Yeu Chen, Ping-Rong Lin, Arvin C.-S. Huang (2020, Dec). Adaptive Clustering and Scheduling for Dynamic Region-based Resource Allocation in V2V Communications. Journal of Signal Processing Systems, Volume 92, Number 12, 1349-1368."
        },
        {
            content: <>Ping-Rong Lin, Cheng-Yu Chen, Tao-Qing Liu, Jen-Yeu Chen, Shiann-Shiun Jeng (2020, Jan). <a href="https://doi.org/10.1002/dac.4301" target="_blank" rel="noopener noreferrer" className="text-accent-purple hover:underline">“Optimization of 2-stage cooperative spectrum for cognitive radio networks using multi-antenna energy detectors.”</a> International Journal of Communication Systems , Vol 33, No 6. (SCI)</>
        },
        {
            content: "Chun-Yi Wei, Arvin C.-S. Huang, Cheng-Yu Chen, Jen-Yeu Chen (2018, Mar). QoS-Aware Hybrid Scheduling for Geographical Zone-Based Resource Allocation in Cellular Vehicle-to-Vehicle Communications. IEEE Communications Letters, Volume 22, Issue 3, 610-613. (SCI, 37/89, TELECOMMUNICATIONS). MOST 105-2218-E-009-006."
        },
        {
            content: <>Jen-Yeu Chen and Yi-Ying Tseng, <a href="https://arxiv.org/abs/1303.2553" target="_blank" rel="noopener noreferrer" className="text-accent-purple hover:underline">“Distributed intrusion detection of byzantine attacks in wireless networks with random linear network coding”</a>, International Journal of Distributed Sensor Networks, Volume 2012 (2012), Article ID 758340, 10 pages.</>
        },
        {
            content: <>Han-Ying Kao, Yu-Tseng Wang, Chia-Hui Huang, Pao-Lien Lai and Jen-Yeu Chen, <a href="https://www.hindawi.com/journals/tswj/2014/183732/" target="_blank" rel="noopener noreferrer" className="text-accent-purple hover:underline">“Assessment and Classification of Service Learning: A Case Study of CS/EE Students”</a>, The Scientific World Journal Volume 2014 (2014), Article ID 183732, 8 pages.</>
        },
        {
            content: <>Jen-Yeu Chen and Gopal Pandurangan, <a href="http://epubs.siam.org/doi/abs/10.1137/100793104" target="_blank" rel="noopener noreferrer" className="text-accent-purple hover:underline">“Almost-optimal gossip-based aggregate computation”</a> SIAM Journal on Computing (SICOMP), Vol. 41, No. 3, 2012, pp. 455–483.</>
        },
        {
            content: <>Jen-Yeu Chen, Chia-Wen Chiu, Gwo-Long Li and Mei-Juan Chen, <a href="http://ieeexplore.ieee.org/document/5599884/" target="_blank" rel="noopener noreferrer" className="text-accent-purple hover:underline">“Burst-Aware Dynamic Rate Control for H.264/AVC Video Streaming”</a> IEEE Transactions on Broadcasting, vol. 57, no. 1, Mar. 2011, pp. 89-93.</>
        },
        {
            content: <>Jen-Yeu Chen, Gopal Pandurangan and Jianghai Hu, <a href="https://www.researchgate.net/publication/221343711_Brief_Announcement_Locality-Based_Aggregate_Computation_in_Wireless_Sensor_Networks" target="_blank" rel="noopener noreferrer" className="text-accent-purple hover:underline">“Locality Based Aggregate Computation”</a> submitted.</>
        },
        {
            content: <>Jen-Yeu Chen and Jianghai Hu, <a href="http://ieeexplore.ieee.org/document/4468701/" target="_blank" rel="noopener noreferrer" className="text-accent-purple hover:underline">“Analysis of Distributed Random Grouping for Aggregate Computation on Wireless Sensor Networks with Randomly Changing Graphs”</a> IEEE Transactions on Parallel and Distributed Systems (IEEE TPDS),vol.19, no.8, Aug. 2008, pp.1136-1149. (doi: 10.1109/TPDS.2008.40)<br /> (This paper is awarded the 2011 IEEE ITSOC Taipei Chapter/ COMSOC Taipei and Tainan Chapter Young Scholar Best Paper Award)</>
        },
        {
            content: <>Jen-Yeu Chen, Gopal Pandurangan, Dongyan Xu, <a href="http://ieeexplore.ieee.org/document/1668063/" target="_blank" rel="noopener noreferrer" className="text-accent-purple hover:underline">“Robust Computation of Aggregates in Wireless Sensor Networks: Distributed Randomized Algorithms and Analysis”</a> IEEE Transactions on Parallel and Distributed Systems (IEEE TPDS), vol.17, no.9, Sep. 2006, pp.987-1000. (doi: 10.1109/TPDS.2006.128)</>
        },
        {
            content: <>Szu-Lin Su, Jen-Yeu Chen, and Jane-Hwa Huang, <a href="http://ieeexplore.ieee.org/document/545699/" target="_blank" rel="noopener noreferrer" className="text-accent-purple hover:underline">“Performance Analysis of soft Handoff in CDMA Cellular Networks”</a> IEEE Journal on Selected Areas of Communications (IEEE JSAC), vol.14, no.9, Dec. 1996, pp.1762-1796. (doi:10.1109/49.545699)</>
        }
    ];

    const conferencePapers = [
        {
            content: "Yung-Chung Tsuei and Jen-Yeu Chen. (2024, Aug). Establishment of Vehicle 3D Bounding Boxes Based on a Mono Camera and Cooperative V2V Vision System. CVGIP 2024, Hualien, Taiwan."
        },
        {
            content: "Hsiang-Jan Hung, Golam Firdaus, Chieh-Ming Yang, Chi-Hui Chen, Jen-Yeu Chen and Jui-Ling Hsiao. (2024, Aug). Application of Deep Learning in Music Therapy. ICITL 2024, Tartu, Estonia."
        },
        {
            content: "Chun-Liang Lin, Chieh-Ming Yang, Zhe-Yu Xu and Jen-Yeu Chen. (2024, Jan). Deep Multi-Task Learning Applied to Slate Area and Type Detection. NST 2024, Chungli, Taiwan."
        },
        {
            content: "Chieh-Ming Yang, Firdaus Golam, Jen-Yeu Chen and Chuan-Ming Liu. (2023, Aug). Smart Glasses Application Based on Face and Facial Expression Recognition for Children with Neurodevelopmental Disorders. ICITL 2023, Porto, Portugal."
        },
        {
            content: <>Hung-Yu Lin, Zhe-Yu Xu, Jian-Yu Zhou, Jen-Yeu Chen. (2024, Jan). <a href="https://doi.org/10.1109/CCNC51664.2024.10454671" target="_blank" rel="noopener noreferrer" className="text-accent-purple hover:underline">"A ROS-based Agricultural AI-Driven AGV (A3GV) with Collaboration and Guiding from Drones in the Outdoor Farming Fields"</a> 2024 IEEE Consumer Communications & Networking Conference (CCNC), Las Vegas, USA, 2024, pp. 1-2, doi: 10.1109/CCNC51664.2024.10454671.</>
        },
        {
            content: <>Chuan-Shiuan Liang, Zhe-Yu Xu, Jian-Yu Zhou, Chieh-Ming Yang, Jen-Yeu Chen. (2023, Aug). <a href="https://doi.org/10.1109/APWCS60142.2023.10234059" target="_blank" rel="noopener noreferrer" className="text-accent-purple hover:underline">"Automated Detection of Coffee Bean Defects using Multi-Deep Learning Models"</a> 2023 VTS Asia Pacific Wireless Communications Symposium (APWCS), Tainan city, Taiwan, 2023, pp. 1-5, doi: 10.1109/APWCS60142.2023.10234059.</>
        },
        {
            content: <>Ming Han Tsai, Jen-Yeu Chen, Wei-Che Chien. (2022, Dec). <a href="https://doi.org/10.1109/IET-ICETA56553.2022.9971583" target="_blank" rel="noopener noreferrer" className="text-accent-purple hover:underline">"Mobile Edge Computing for Rapid deployment Object Detection System"</a> 2022 IET International Conference on Engineering Technologies and Applications (IET-ICETA), Changhua, Taiwan, 2022, pp. 1-2, doi: 10.1109/IET-ICETA56553.2022.9971583.</>
        },
        {
            content: <>Kai-Jie Chang, Chung-Wei Chuang, Jun-Tung Chiu, Jen-Yeu Chen. (2022, Aug). <a href="https://doi.org/10.1109/APWCS55727.2022.9906504" target="_blank" rel="noopener noreferrer" className="text-accent-purple hover:underline">"Flying Watchdog: A Drone with Edge AIoT for Residential Safety and Fall Detection by Face and Posture Recognition"</a> 2022 IEEE VTS Asia Pacific Wireless Communications Symposium (APWCS), Seoul, Korea, Republic of, 2022, pp. 181-185, doi: 10.1109/APWCS55727.2022.9906504.</>
        },
        {
            content: 'Shi-Jim Yen, S. Kavak and Jen-Yeu Chen, "STEMI Recognition in KEY...", 2021 30th Wireless and Optical Communications Conference (WOCC), 2021, pp. 142-144, doi: 10.1109/WOCC53213.2021.9603013.'
        },
        {
            content: "Amoo, M. E. et al. (2020, June), Breaking Down the Silos: Innovations for Multidisciplinary Programs Paper presented at 2020 ASEE Virtual Annual Conference Content Access, Virtual On line . 10.18260/1-2--34224"
        },
        {
            content: "Chu-Peng Wu, Yun-Ruei Li, Jing-Ling Wang, Hsin-Piao Lin, Li-Chun Wang, Shiann-Shiun Jeng, Jen-Yeu Chen (2020, Jan). Learning-based Downlink User Selection Algorithm for UAV-BS Communication Network. IEEE CCNC 2020."
        },
        {
            content: "Chia-Ling Chiang, Yu-Lin Lin, Han-Chieh Chao, Jen-Yeu Chen, Chih-Hung Lai (2019, Dec). Effect of Augmented Reality on Astronomical Observation Instruction. ICiTL2019."
        },
        {
            content: "Chi-Hung Lin, Wei-Che Chien, Cosmos Jen-Yeu Chen, Chin-Feng Lai, HanChieh Chao (2019, Sep). Energy Efficient Fog RAN (F-RAN)... IEEE VTC2019-Fall."
        },
        {
            content: "Jing-Ling Wang, Yun-Ruei Li, Abebe Belay Adege, Li-Chun Wang, ShiannShiun Jeng, Jen-Yeu Chen (2019, Jan). Machine Learning Based Rapid 3D Channel Modeling for UAV Communication Networks. IEEE CCNC 2019."
        },
        {
            content: "Cheng-Yu Chen, Arvin C.-S. Huang, Song-Yi Huang, Jen-Yeu Chen (2018, May). Energy-saving scheduling in the 3GPP narrowband Internet of Things... IEEE WOCC 2018."
        },
        {
            content: "Yan-Ting Liu, et al. (2018, May). A solar powered long range real-time water quality monitoring system by LoRaWAN. IEEE WOCC 2018."
        },
        {
            content: "Cheng-Yu Chen, Arvin C.-S. Huang and Jen-Yeu Chen (2017, Oct). ACRA: Adaptive Clustering Resource Allocation for Vehicle to Vehicle Communications. IEEE ICMU 2017."
        },
        {
            content: "Cheng-Yu Chen, Arvin C.-S. Huang and Jen-Yeu Chen (2017, Aug). Clustering for Region-based Resource Allocation in 3GPP Vehicle-to-Vehicle Communications. IEEE VTS APWCS 2017."
        },
        {
            content: "Ping-Rong Lin, Shiann-Shiun Jeng, Jen-Yeu Chen and Szu-Lin Su (2016, Aug). Time-Frequency Analysis for Spectrum Sensing in Multi-Antenna Wireless Systems. IEEE VTS APWCS 2016."
        },
        {
            content: "Cheng-Han Li, Jen-Yeu Chen and Chung-Ju Chang (2016, Jul). A Utility-based Self-Configuration Scheme for Macro-Small Cellular Systems. IEEE/CIC ICCC2016."
        },
        {
            content: "Cheng-Yu Chen, Arvin C.-S. Huang and Jen-Yeu Chen (2015, Aug). Power Management of Dense Small Cells for Next Generation Green Wireless Networks. IEEE VTS APWCS 2015."
        },
        {
            content: "Cheng-Sen Huang, Shi-Ting Huang, Cheng-Yu Chen and Jen-Yeu Chen (2015, May). Prediction-coverage-first detection scheduling for energy efficient multitarget tracking. ARIS 2015."
        },
        {
            content: "Kuan-Yu Lin, Jen-Yeu Chen, Fang-Ching Ren, Chung-Ju Chang (2015, May). TAPS: Traffic-Aware Power Saving Scheme for Clustered Small Cell Base Stations in LTE-A. IEEE VTC Spring 2015."
        },
        {
            content: "Jen-Yeu Chen, Patrick C.-Y. Chen, Jin-Long Lin and Chuan-Ming Liu, “TGR : Tight Geographic Routing in Wireless Ad Hoc Networks,” IEEE VTS APWCS 2013."
        },
        {
            content: "Jen-Yeu Chen, Da-Wei Juan and Cheng-Sen Huang, “DEST: DISTRIBUTED ENDURANT SPANNING TREE FOR DATA AGGREGATION ON WIRELESS SENSOR NETWORKS,” IET ICWCA 2012. (Best Paper Award)"
        },
        {
            content: "Jen-Yeu Chen, Gopal Pandurangan, “Optimal Gossip-Based Aggregate Computation,” ACM SPAA2010."
        },
        {
            content: "Jen-Yeu Chen, Gopal Pandurangan, Jianghai Hu, “Brief announcement: locality-based aggregate computation in wireless sensor networks,” ACM PODC2009."
        },
        {
            content: "Jen-Yeu Chen and Jianghai Hu, “On the Convergence of Distributed Random Grouping for Average Consensus on Sensor Networks with Time-varying Graphs,” IEEE CDC 2007."
        },
        {
            content: "Jen-Yeu Chen and Jianghai Hu, “Probabilistic Map Building by Coordinated Mobile Sensors,” IEEE ICNSC2006."
        },
        {
            content: "Jen-Yeu Chen, Gopal Pandurangan, Dongyan Xu, “Distributed Randomized Algorithms for Robust Aggregates Computation in Wireless Sensor Networks”, IEEE IPSN2005."
        },
        {
            content: "Szu-Lin Su and Jen-Yeu Chen, “Performance Analysis of Soft Handoff in Cellular Networks,” IEEE PIMRC’95."
        }
    ];

    const technicalReports = [
        {
            content: "Chun-Yi Wei, Jen-Yeu Chen, et al. (2015, Nov). Multiple carriers and multiple operators in V2X scenario. 3GPP LTE-Advanced R13, Posted Contribution, R1-155558(RAN1#83)."
        },
        {
            content: "Chun-Yi Wei, Jen-Yeu Chen, et al. (2015, Aug). The multiple-carrier discovery transmission for inter-PLMN ProSe discovery. 3GPP LTE-Advanced R13, Posted Contribution, R1-154372 (RAN1#82)."
        },
        {
            content: "Chun-Yi Wei, Jen-Yeu Chen, et al. (2015, Aug). The uncoordinated and coordinated inter-PLMN ProSe discovery. 3GPP LTE-Advanced R13, Posted Contribution, R2-153151(RAN2#91)."
        },
        {
            content: "Yu-Fong Chieh, Jen-Yeu Chen. (2015, Jul). Energy efficient data harvesting for delay tolerant data in a wireless mobile network with machine type devices. MOST 103-2221-E-259-001."
        },
        {
            content: "Chun-Yi Wei, Jen-Yeu Chen, et al. (2015, May). The multiple-carrier discovery for intra/inter-PLMN ProSe. 3GPP LTE-Advanced R13, Posted Contribution, R1-152949(RAN2#81)."
        },
        {
            content: "Chun-Yi Wei, Jen-Yeu Chen, et al. (2015, Apr). Synchronization and Resynchronization Procedures for the Coverage Enhancement of eNB’s Timing using D2DSS Transmission. 3GPP LTE-Advanced R13, Posted Contribution, R1-144937(RAN2#80b)."
        },
        {
            content: "Chun-Yi Wei, Jen-Yeu Chen, et al. (2015, Apr). The inter-carrier and interPLMN discovery. 3GPP LTE-Advanced R13, Posted Contribution, R1151576(RAN2#80b)."
        }
    ];

    const patents = [
        {
            content: "陸空無人載具協作系統 (Taiwan Patent M666225), Feb 2025."
        },
        {
            content: "自動化行動載具 (Taiwan Patent M666226), Feb 2025."
        },
        {
            content: "具表情及人臉辨識與提示功能之互動式穿戴電子裝置 (Taiwan Invention Patent I842225), May 2024."
        },
        {
            content: "具表情及人臉辨識與提示功能之互動式穿戴電子裝置 (Taiwan Utility Model M643208), July 2023."
        }
    ];

    const talks = [
        {
            content: "The Vertically Integrated Project (VIP) Program in NDHU, Keynote Speaker, Seoul, Korea, Feb 2024."
        },
        {
            content: "The State of the Art of the 3GPP V2X Specifications, Plenary Invited Speaker, WOCC 2019, Beijing, China, May 2019."
        }
    ];

    return (
        <div className="container mx-auto px-6 py-24">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl font-bold uppercase mb-12 text-center text-foreground dark:text-white"
            >
                Publications
            </motion.h1>

            <div className="max-w-4xl mx-auto space-y-24">

                <section>
                    <h2 className="text-3xl font-bold text-accent-purple mb-8 border-b border-border dark:border-gray-800 pb-4">Journal Papers</h2>
                    <div className="space-y-4">
                        {journalPapers.map((paper, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="bg-card/40 dark:bg-white/5 backdrop-blur-md border border-accent-purple/50 p-6 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 shadow-[0_0_15px_rgba(147,114,255,0.15)] hover:shadow-[0_0_25px_rgba(147,114,255,0.3)] transition-all duration-500"
                            >
                                <div className="flex gap-4">
                                    <span className="text-accent-purple font-mono opacity-50 select-none">#{i + 1}</span>
                                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                        {paper.content}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-accent-purple mb-8 border-b border-border dark:border-gray-800 pb-4">Conference Papers</h2>
                    <div className="space-y-4">
                        {conferencePapers.map((paper, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="bg-card/40 dark:bg-white/5 backdrop-blur-md border border-accent-purple/50 p-6 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 shadow-[0_0_15px_rgba(147,114,255,0.15)] hover:shadow-[0_0_25px_rgba(147,114,255,0.3)] transition-all duration-500"
                            >
                                <div className="flex gap-4">
                                    <span className="text-accent-purple font-mono opacity-50 select-none">#{i + 1}</span>
                                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                        {paper.content}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-accent-purple mb-8 border-b border-border dark:border-gray-800 pb-4">Technical Reports</h2>
                    <div className="space-y-4">
                        {technicalReports.map((paper, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="bg-card/40 dark:bg-white/5 backdrop-blur-md border border-accent-purple/50 p-6 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 shadow-[0_0_15px_rgba(147,114,255,0.15)] hover:shadow-[0_0_25px_rgba(147,114,255,0.3)] transition-all duration-500"
                            >
                                <div className="flex gap-4">
                                    <span className="text-accent-purple font-mono opacity-50 select-none">#{i + 1}</span>
                                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                        {paper.content}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-accent-purple mb-8 border-b border-border dark:border-gray-800 pb-4">Patents</h2>
                    <div className="space-y-4">
                        {patents.map((paper, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="bg-card/40 dark:bg-white/5 backdrop-blur-md border border-accent-purple/50 p-6 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 shadow-[0_0_15px_rgba(147,114,255,0.15)] hover:shadow-[0_0_25px_rgba(147,114,255,0.3)] transition-all duration-500"
                            >
                                <div className="flex gap-4">
                                    <span className="text-accent-purple font-mono opacity-50 select-none">#{i + 1}</span>
                                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                        {paper.content}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-accent-purple mb-8 border-b border-border dark:border-gray-800 pb-4">Invited Talks</h2>
                    <div className="space-y-4">
                        {talks.map((paper, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="bg-card/40 dark:bg-white/5 backdrop-blur-md border border-accent-purple/50 p-6 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 shadow-[0_0_15px_rgba(147,114,255,0.15)] hover:shadow-[0_0_25px_rgba(147,114,255,0.3)] transition-all duration-500"
                            >
                                <div className="flex gap-4">
                                    <span className="text-accent-purple font-mono opacity-50 select-none">#{i + 1}</span>
                                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                        {paper.content}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Publications;
