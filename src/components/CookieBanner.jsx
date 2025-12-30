import React, { useEffect } from 'react';
// import 'vanilla-cookieconsent/dist/cookieconsent.css';
// import * as CookieConsent from 'vanilla-cookieconsent';

const CookieBanner = () => {
    useEffect(() => {
        /*
        if (typeof CookieConsent !== 'undefined') {
             CookieConsent.run({
                guiOptions: {
                    consentModal: {
                        layout: 'box',
                        position: 'bottom right',
                        equalWeightButtons: true,
                        flipButtons: false
                    },
                    preferencesModal: {
                        layout: 'box',
                        position: 'right',
                        equalWeightButtons: true,
                        flipButtons: false
                    }
                },
                categories: {
                    necessary: {
                        readOnly: true
                    },
                    analytics: {}
                },
                language: {
                    default: 'en',
                    autoDetect: 'browser',
                    translations: {
                        en: {
                            consentModal: {
                                title: 'We use cookies',
                                description: 'We use cookies and other tracking technologies to improve your browsing experience on our website, to show you personalized content and targeted ads, to analyze our website traffic, and to understand where our visitors are coming from.',
                                acceptAllBtn: 'Accept all',
                                acceptNecessaryBtn: 'Reject all',
                                showPreferencesBtn: 'Customize'
                            },
                            preferencesModal: {
                                title: 'Cookie Usage',
                                acceptAllBtn: 'Accept all',
                                acceptNecessaryBtn: 'Reject all',
                                savePreferencesBtn: 'Save preferences',
                                closeIconLabel: 'Close modal',
                                sections: [
                                    {
                                        title: 'Cookie Usage',
                                        description: 'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want.'
                                    },
                                    {
                                        title: 'Strictly Necessary Cookies',
                                        description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly.',
                                        linkedCategory: 'necessary'
                                    },
                                    {
                                        title: 'Performance and Analytics',
                                        description: 'Allows the website to remember the choices you have made in the past.',
                                        linkedCategory: 'analytics'
                                    }
                                ]
                            }
                        }
                    }
                }
            });
            
            // Apply the custom theme class to the body or main container if needed
            document.body.classList.add('cc--elegant-black');
        }
        */
    }, []);

    return null; // The library renders its own DOM elements
};

export default CookieBanner;
