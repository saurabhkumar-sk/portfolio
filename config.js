const config = {
    emailJs: {
        publicKey: typeof process !== 'undefined' ? process.env.EMAILJS_PUBLIC_KEY : 'wN5_Pi6myJY9hIg9w',
        serviceId: typeof process !== 'undefined' ? process.env.EMAILJS_SERVICE_ID : 'service_5obxcj1',
        templateId: typeof process !== 'undefined' ? process.env.EMAILJS_TEMPLATE_ID : 'template_eaztska'
    }
};

export default config;
